export const getCoronavirusData = () => {
    return fetch("https://coronavirus.m.pipedream.net/")
    .then(response => response.json())
    .then(data => {
        let date = [];
        let dataFilter = data.rawData;
        for(let i=515; i<598;i++){
            if(dataFilter[i]["Province_State"] == "Sverdlovsk Oblast"){
            date.push(dataFilter[i]);
            return date;
            }
            if(dataFilter[i]["Province_State"] == "Saint Petersburg"){
                date.push(dataFilter[i]);
            }
            if(dataFilter[i]["Province_State"] == "Moscow"){
                date.push(dataFilter[i]);
            }
            if(dataFilter[i]["Province_State"] == "Primorsky Krai"){
                date.push(dataFilter[i]);
            }
            if(dataFilter[i]["Province_State"] == "Moscow Oblast"){
                date.push(dataFilter[i]);
            }
        }
               
    })
   
    }
    

