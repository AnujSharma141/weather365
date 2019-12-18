const subm = document.querySelector('.main-b').onclick = () =>{
            let city = document.querySelector('.inp').value;
            document.querySelector('.inp').value = '';
            let a = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='
        let request = new XMLHttpRequest();
        request.open('GET', a);
        request.responseType = 'json';
        request.send();
        request.onload = function()
        {
            const dataFat = request.response;
            let roundT = Math.round(dataFat.main.temp - 273.00, 1);
            document.querySelector('.let').innerHTML = `${dataFat.weather[0].main}, ${roundT}C`;
            document.querySelector('.det').innerHTML =`${dataFat.name},${dataFat.sys.country}`; 
            console.log(dataFat.name,dataFat.sys.country,dataFat.weather[0].main, dataFat.weather[0].description, dataFat.main.temp);
        }
            
        }
        
