export function getData(currentCity, currentDegr) {
let API_KEY = "be507d0c59804ab2b92133717220703";
  fetch(
    `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${currentCity.value}`
  )
    .then((result) => result.json())
    .then((data) => {
      currentDegr.value = data.current["temp_c"];
    });
}
