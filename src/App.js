import BarChart from "./components/BarChart.js";
import LineChart from "./components/LineChart.js";
import PieChart from "./components/PieChart.js";
import Table from "./components/Table.js";
import { useState, useEffect } from "react";

function App() {
  const [district, setDistrict] = useState("");
  const [search, setSearch] = useState("jabalpur");
  const [weather, setWeather] = useState("");
  const [temperature, setTemperature] = useState("");
  const [humid, setHumid] = useState("");
  const [press, setPress] = useState("");
  const [wind, setWind] = useState("");
  const [tableRow, setTableRow] = useState("");
  const [inputState, setInputState] = useState("");

  let newData = [];
  let city = [];
  let temp = [];
  let humidity = [];
  let pressure = [];

  let wind_speed = [];

  useEffect(() => {
    const fetchApi = async () => {
      let apikey = "c10950e942154ab0874143659212509";
      let url = `https://api.weatherapi.com/v1/current.json?key=${apikey}&q=${search}&aqi=yes`;
      const response = await fetch(url);
      const resJson = response.json();
      return resJson;
    };
    let json = fetchApi();
    json.then((jsonData) => {
      console.log(jsonData);
      storeData(jsonData);

      // setDistrict(jsonData);
    });
  }, [search]);

  // console.log(district);
  // useEffect(() => {
  const storeData = (data) => {
    newData = JSON.parse(localStorage.getItem("newData"))
      ? JSON.parse(localStorage.getItem("newData"))
      : [];
    let obj = {};
    obj.name = data.location.name;
    obj.temp = data.current.temp_c;
    obj.humidity = data.current.humidity;
    obj.pressure = data.current.pressure_in;
    obj.wind_speed = data.current.wind_kph;
    newData.push(obj);

    localStorage.setItem("newData", JSON.stringify(newData));
    console.log(newData);

    newData.forEach((element) => {
      city.push(element.name);
      temp.push(element.temp);
      humidity.push(element.humidity);
      pressure.push(element.pressure);
      wind_speed.push(element.wind_speed);
    });
    console.log(city, temp, humidity, pressure, wind_speed);
    //
    setDistrict(city);
    setTemperature(temp);
    setHumid(humidity);
    setPress(pressure);
    setWind(wind_speed);
    setWeather([city, temp, humidity, pressure, wind_speed]);

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
  };

  // let data = [
  //   ...newData,
  //   // JSON.parse(graphInput);
  //   {
  //     name: "mumbai",
  //     temp: 34,
  //     humidity: 28,
  //     pressure: 41,
  //     wind_speed: 25,
  //   },
  //   {
  //     name: "delhi",
  //     temp: 39,
  //     humidity: 31,
  //     pressure: 9,
  //     wind_speed: 38,
  //   },
  //   {
  //     name: "pune",
  //     temp: 28,
  //     humidity: 12,
  //     pressure: 11,
  //     wind_speed: 10,
  //   },
  // ];

  const submitHandler = (event) => {
    event.preventDefault();
    setSearch(inputState);
  };

  const inputHandler = (event) => {
    setInputState(event.target.value);
  };

  const clearHandler = (event) => {
    localStorage.removeItem("newData");
    setSearch("bangalore");
  };

  return (
    <div>
      <h2 className="text-center my-5">Weather stats!</h2>
      <div className="container">
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label htmlFor="searchCity" className="form-label">
              Enter city
            </label>
            <input
              type="text"
              className="form-control"
              id="searchCity"
              onChange={inputHandler}
              value={inputState}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <button
            type="button"
            className="btn btn-primary mx-3"
            onClick={clearHandler}
          >
            Clear
          </button>
        </form>
      </div>
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
