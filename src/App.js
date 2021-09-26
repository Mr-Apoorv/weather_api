import BarChart from "./components/BarChart.js";
import LineChart from "./components/LineChart.js";
// import PieChart from "./components/PieChart.js";
import Table from "./components/Table.js";
import InputForm from "./components/InputForm";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar.js";

function App() {
  const [district, setDistrict] = useState("");
  const [search, setSearch] = useState("");
  const [temperature, setTemperature] = useState("");
  const [humid, setHumid] = useState("");
  const [press, setPress] = useState("");
  const [wind, setWind] = useState("");
  const [tableRow, setTableRow] = useState("");

  let newData = [];
  let city = [];
  let temp = [];
  let humidity = [];
  let pressure = [];

  let wind_speed = [];

  useEffect(() => {
    const fetchApi = async () => {
      let apikey = "c10950e942154ab0874143659212509";
      if (!search) {
        console.log("Enter some city");
        alert("Enter some city");
      } else {
        let url = `https://api.weatherapi.com/v1/current.json?key=${apikey}&q=${search}&aqi=yes`;

        try {
          const response = await fetch(url);

          if (!response.ok) {
            throw new Error(response);
          }
          const resJson = response.json();
          return resJson;

          // storing my books
        } catch (exception) {
          // storing my error onto Sentry
          console.log("error in fetching data");
          alert("Enter a valid city name");
        }
      }
    };
    let json = fetchApi();
    json.then((jsonData) => {
      // console.log(jsonData);
      storeData(jsonData);
    });
  }, [search]);

  const storeData = (data) => {
    newData = JSON.parse(localStorage.getItem("newData"))
      ? JSON.parse(localStorage.getItem("newData"))
      : [];
    if (!data) {
      console.log("No data found");
      // alert("No data found");
    } else {
      let obj = {};
      obj.name = data.location.name;
      obj.temp = data.current.temp_c;
      obj.humidity = data.current.humidity;
      obj.pressure = data.current.pressure_in;
      obj.wind_speed = data.current.wind_kph;
      newData.push(obj);

      localStorage.setItem("newData", JSON.stringify(newData));
      // console.log(newData);

      newData.forEach((element) => {
        city.push(element.name);
        temp.push(element.temp);
        humidity.push(element.humidity);
        pressure.push(element.pressure);
        wind_speed.push(element.wind_speed);
      });
      // console.log(city, temp, humidity, pressure, wind_speed);

      setDistrict(city);
      setTemperature(temp);
      setHumid(humidity);
      setPress(pressure);
      setWind(wind_speed);

      let i = 0;
      setTableRow(
        newData.map((element) => {
          i += 1;
          return (
            <div className="row " id="row" key={Math.random()}>
              <div className="col-sm-2 border">{i}</div>
              <div className="col-sm-2 border">{element.name}</div>
              <div className="col-sm-2 border">{element.temp}</div>
              <div className="col-sm-2 border">{element.humidity}</div>
              <div className="col-sm-2 border">{element.pressure}</div>
              <div className="col-sm-2 border">{element.wind_speed}</div>
            </div>
          );
        })
      );
    }
  };

  return (
    <div>
      <NavBar />
      <InputForm setSearch={setSearch} />

      <Table tableRow={tableRow} />
      <BarChart
        city={district}
        temp={temperature}
        humidity={humid}
        pressure={press}
        wind_speed={wind}
      />
      <LineChart
        city={district}
        temp={temperature}
        humidity={humid}
        pressure={press}
        wind_speed={wind}
      />
      {/* <PieChart
        city={district}
        temp={temperature}
        humidity={humid}
        pressure={press}
        wind_speed={wind}
      /> */}
    </div>
  );
}

export default App;
