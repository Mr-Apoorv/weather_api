const cityValidation = (inputVal) => {
  let cityWeather = JSON.parse(localStorage.getItem("newData"));
  let cityNames = cityWeather.filter((element) => {
    return element.name;
  });
  if (cityNames.includes(inputVal)) {
    console.log(cityNames);
    alert("city already exist in the app");
    console.log("city already exist in the app");
  } else {
    props.setSearch(inputState); //
  }
};
