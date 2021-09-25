import BarChart from "./components/BarChart.js"
import LineChart from "./components/LineChart.js"
import PieChart from "./components/PieChart.js"
import Table from "./components/Table.js"



function App() {
  const getData = (city) => {
    let apikey="c10950e942154ab0874143659212509"
    let url=`https://api.weatherapi.com/v1/current.json?key=${apikey}&q=${city}&aqi=yes`
    // let url= "https://api.weatherapi.com/v1/current.json?key=c10950e942154ab0874143659212509&q=mumbai&aqi=yes"
    
    fetch(url).then((response) => {
      // console.log(response)
      return response.json();
    }).then((data) => {
      storeData(data);
      console.log(data)
    }).catch(() => {
      console.log("Failed to fetch data")
    })
  }
  
  getData("mumbai");
  getData("bangalore");

  getData("jabalpur");

  getData("chennai");


let newData=[]
const storeData = (data) => {
  let obj={}
  obj.name=data.location.name;
  obj.temp=data.current.temp_c;
  obj.humidity=data.current.humidity;
  obj.pressure=data.current.pressure_in;
  obj.wind_speed=data.current.wind_kph;
  newData.push(obj)
}
console.log(newData)

  let data=[
    {
      "name":"mumbai",
      "temp":34,
      "humidity":28,
      "pressure":41,
      "wind_speed":25,

    },
    {
      "name":"delhi",
      "temp":39,
      "humidity":31,
      "pressure":9,
      "wind_speed":38,

    },
    {
      "name":"pune",
      "temp":28,
      "humidity":12,
      "pressure":11,
      "wind_speed":10,

    }
  ]
    
  let city=[];
  let temp=[];
  let humidity=[];
  let pressure=[];

  let wind_speed=[];




  data.forEach(element => {
    city.push(element.name)
    temp.push(element.temp)
    humidity.push(element.humidity)
    pressure.push(element.pressure)
    wind_speed.push(element.wind_speed)


  });
console.log(city, temp, humidity, pressure, wind_speed)
let i=0;
let tableRow=data.map((element) => {
  i+=1;
  return(
    <div className="row " id="row" key={Math.random()}>
    <div className="col-sm-2 border" key={Math.random()}>
    {i}
    </div>
    <div className="col-sm-2 border" key={Math.random()}>
    {element.name}
    </div>
    <div className="col-sm-2 border" key={Math.random()}>
    {element.temp}
    </div>
    <div className="col-sm-2 border" key={Math.random()}>
    {element.humidity}
    </div>
    <div className="col-sm-2 border" key={Math.random()}>
    {element.pressure}
    </div>
    <div className="col-sm-2 border" key={Math.random()}>
    {element.wind_speed}
    </div>
    </div>
  )
  
})
  
  return (
    <div>
      <h2>Let's get started!</h2>
      <Table tableRow={tableRow}/>
      <BarChart city={city} temp={temp} humidity={humidity} pressure={pressure} wind_speed={wind_speed}/>
      <LineChart city={city} temp={temp} humidity={humidity} pressure={pressure} wind_speed={wind_speed}/>
      <PieChart city={city} temp={temp} humidity={humidity} pressure={pressure} wind_speed={wind_speed}/>
    </div>
  );
}

export default App;
