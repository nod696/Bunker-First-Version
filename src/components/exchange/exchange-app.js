export const getUSDData = () => {
  return fetch(`https://api.exchangerate.host/latest?base=USD`)
    .then((result) => result.json())
    .then((data) => {
      return data;
    });
};

export const getEURData = () => {
  return fetch(`https://api.exchangerate.host/latest?base=EUR`)
    .then((result) => result.json())
    .then((data) => {
      return data;
    });
};

// function loadData(){
//     setInterval(async () => {
//         getUSDData().then((result) => {console.log(result)});
//         getEURData().then((result) => {console.log(result)});
//     }, 30000);
// }

