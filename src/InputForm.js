// const [graphInput, setGraphInput] = useState(
//   JSON.stringify([
//     {
//       name: "mumbai",
//       temp: 34,
//       humidity: 28,
//       pressure: 41,
//       wind_speed: 25,
//     },
//     {
//       name: "delhi",
//       temp: 39,
//       humidity: 31,
//       pressure: 9,
//       wind_speed: 38,
//     },
//     {
//       name: "pune",
//       temp: 28,
//       humidity: 12,
//       pressure: 11,
//       wind_speed: 10,
//     },
//   ])
// );
// console.log(graphInput);

// useEffect(() => {
//   const getData = (city) => {
//     let apikey = "c10950e942154ab0874143659212509";
//     let url = `https://api.weatherapi.com/v1/current.json?key=${apikey}&q=${city}&aqi=yes`;
//     // let url= "https://api.weatherapi.com/v1/current.json?key=c10950e942154ab0874143659212509&q=mumbai&aqi=yes"

//     fetch(url)
//       .then((response) => {
//         // console.log(response)
//         return response.json();
//       })
//       .then((data) => {
//         storeData(data);
//         // console.log(data)
//       })
//       .catch(() => {
//         console.log("Failed to fetch data");
//       });
//   };

//   getData();
// }, []);

// // getData("bangalore");

// // getData("jabalpur");

// // getData("chennai");

// let newData = [];
// const storeData = (data) => {
//   let obj = {};
//   obj.name = data.location.name;
//   obj.temp = data.current.temp_c;
//   obj.humidity = data.current.humidity;
//   obj.pressure = data.current.pressure_in;
//   obj.wind_speed = data.current.wind_kph;
//   newData.push(obj);
//   //
// };
// console.log(newData);

// useEffect(() => {
//   setGraphInput(JSON.stringify(newData));
// }, [newData]);
