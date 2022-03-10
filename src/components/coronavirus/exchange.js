


fetch(`https://api.exchangerate.host/latest?base=USD`).then(result => result.json()).then(data => {
    
setInterval(() => console.log(data), 3000)
});

fetch(`https://api.exchangerate.host/latest?base=EUR`).then(result => result.json()).then(data => {
    
setInterval(() => console.log(data), 3000)
});


