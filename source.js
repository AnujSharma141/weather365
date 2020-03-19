let dataFat ,key
const res = {'clear':'https://media1.giphy.com/media/BwFWYaIbKgDL2/giphy.webp?cid=790b7611794b1081eac1d989893edc8e337e9f330fe00125&rid=giphy.webp',
'rain':'https://media1.giphy.com/media/5torEEM8QnR95Cqg11/giphy.webp?cid=790b76114ea7c497cf8298b12714738c429cc09ea35b8a6b&rid=giphy.webp',
'clouds':'https://media0.giphy.com/media/Pp9W9tuVF5NwQ/200.webp?cid=790b76118b5301424eec6bc2441790fb2c1cde964304764a&rid=200.webp',
'fog':'https://media0.giphy.com/media/Pp9W9tuVF5NwQ/200.webp?cid=790b76118b5301424eec6bc2441790fb2c1cde964304764a&rid=200.webp',
'smoke':'https://media2.giphy.com/media/xfleD6ByCmgta/giphy.webp?cid=790b76118b5301424eec6bc2441790fb2c1cde964304764a&rid=giphy.webp',
'haze':'https://media2.giphy.com/media/xfleD6ByCmgta/giphy.webp?cid=790b76118b5301424eec6bc2441790fb2c1cde964304764a&rid=giphy.webp',
'thunder':'https://media0.giphy.com/media/xaZCqV4weJwHu/giphy.webp?cid=790b7611753cf665ed14ab72732337355fd780218686ed6d&rid=giphy.webp',
'drizzle':'https://media.tenor.com/images/2842f6f26901a34857878dced060672f/tenor.gif'}

let a
const sub = document.querySelector('.card').onclick = () =>{
    var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };
      
      function success(pos) {
        var crd = pos.coords
      lat = crd.latitude
      lon = crd.longitude
      a = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=3638a082a594a98c0f29f5e269dd35af`
        console.log('Your current position is:');
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`)
        let request = new XMLHttpRequest()
    request.open('GET', a)
    request.responseType = 'json'
    request.send()
    request.onload = function()
    {
         dataFat = request.response;
        console.log(dataFat);
        let roundT = Math.round(dataFat.main.temp - 273.00, 1)
        console.log(dataFat.name,dataFat.sys.country,dataFat.weather[0].main, dataFat.weather[0].description, dataFat.main.temp)
    
        key = dataFat.weather[0].main.toLowerCase()
        console.log(key)
        
        document.querySelector('.res-main').innerHTML = dataFat.weather[0].main
        document.querySelector('.res-temp').innerHTML = roundT + ' C'
        document.querySelector('.res-city').innerHTML =  dataFat.name + ' , ' + dataFat.sys.country

        }
      }
      
      function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`)
      }
      
      navigator.geolocation.getCurrentPosition(success , error, options)

    document.querySelector('.mid').style.cssText = 'animation:fade 0.3s 1; opacity:0; '
    document.querySelector('.down-a').style.cssText = 'animation:fade 0.3s 1; opacity:0; '
    
    setTimeout(() => {
        document.querySelector('.load').style.cssText = 'animation:fade-in 0.3s 1; opacity:1; '
        setTimeout(() => {
            document.querySelector('.load').style.cssText = 'animation:fade 0.3s 1; opacity:0; '
            setTimeout(() => {
                
        document.querySelector('.back').style.cssText = `background: url(${res[key]}); background-position:center; background-size:cover;`
                document.querySelector('.result').style.cssText = 'animation:fade-in 0.3s 1; opacity:1; z-index:3 '
            }, 0300);
        }, 3000)
    }, 0300)
    
        document.querySelector('.reload').onclick = () =>{
            window.location.reload()
        }
    }   

const subm = document.querySelector('.main-b').onclick = () =>{
    
    let city = document.querySelector('.inp').value
    document.querySelector('.mid').style.cssText = 'animation:fade 0.3s 1; opacity:0; '
    document.querySelector('.down-a').style.cssText = 'animation:fade 0.3s 1; opacity:0; '

    a = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3638a082a594a98c0f29f5e269dd35af`
let request = new XMLHttpRequest()
request.open('GET', a)
request.responseType = 'json'
request.send()
request.onload = function()
{
     dataFat = request.response
    console.log(dataFat)
    let roundT = Math.round(dataFat.main.temp - 273.00, 1)
    console.log(dataFat.name,dataFat.sys.country,dataFat.weather[0].main, dataFat.weather[0].description, dataFat.main.temp)

    key = dataFat.weather[0].main.toLowerCase()
    console.log(key)
    document.querySelector('.res-main').innerHTML = dataFat.weather[0].main
    document.querySelector('.res-temp').innerHTML = roundT + ' C'
    document.querySelector('.res-city').innerHTML =  dataFat.name + ' , ' + dataFat.sys.country
    
    }
    
    setTimeout(() => {
        document.querySelector('.load').style.cssText = 'animation:fade-in 0.3s 1; opacity:1; '
        setTimeout(() => {
            document.querySelector('.load').style.cssText = 'animation:fade 0.3s 1; opacity:0; '
            setTimeout(() => {
                
    document.querySelector('.back').style.cssText = `background: url(${res[key]}); background-position:center; background-size:cover;`
                document.querySelector('.result').style.cssText = 'animation:fade-in 0.3s 1; opacity:1; z-index:3 '
            }, 0300);
        }, 3000)
    }, 0300)
    document.querySelector('.reload').onclick = () =>{
        window.location.reload()
    }
}


const back = ['https://images.unsplash.com/photo-1577709845184-8b41dfb4d08e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
'https://images.unsplash.com/photo-1567755956783-c9e13c21f495?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
'https://images.unsplash.com/photo-1533003505519-6a9b92ed4911?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
'https://images.unsplash.com/photo-1547961547-321889bff29e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
'https://images.unsplash.com/photo-1549007247-d4399d43df67?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
'https://images.unsplash.com/photo-1536195892759-c8a3c8e1945e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
'https://images.unsplash.com/photo-1539625050779-cb7fb2a81009?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
'https://images.unsplash.com/photo-1563830198204-5b21a012ef81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
'https://images.unsplash.com/photo-1570282302649-ab2397306757?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
'https://images.unsplash.com/photo-1574087776137-305a55298646?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60']

document.querySelector('.back').style.cssText = `background: url(${back[Math.floor((Math.random() * 10))]}); background-position:center; background-size:cover;`
    

