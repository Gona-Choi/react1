import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {useEffect, useState} from "react"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherBox from "./component/WeatherBox.jsx";
import WeatherButton from "./component/WeatherButton.jsx";
import { ClipLoader } from "react-spinners";



//1. 앱이 실행되자마자 현재위치기반의 날씨
//2. 날씨 정보에는 도시, 섭씨, 화씨 날씨상태
//3. 5개의 버튼,(1개는 현재, 4개는 다른 도시)
//4. 도시버튼을 클릭할 때마다 도시별 날씨가 나온다.
//5. 현재위치 버튼을 누르면 다시 현재위치 기반의 날씨가 나온다.
//6. 데이터를 들고오는 동안 로딩 스피너가 돈다.

function App() {

  const[weather, setWeather] = useState(null);
  const[city, setCity]=useState(null) 
  const[loading,setLoading]=useState(false)
  const cities=['Paris','New York', 'Tokyo', 'Seoul']

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat = position.coords.latitude
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon)
    })
  }

  const getWeatherByCurrentLocation = async(lat,lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=15287c905665d44d81b87ba54b9d1a4e&units=metric`
    setLoading(true)
    let response = await fetch(url)
    let data = await response.json()
    setWeather(data)
    setLoading(false)
  }

  const getWeatherByCity=async()=>{
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=15287c905665d44d81b87ba54b9d1a4e&units=metric`
    setLoading(true)
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data)
    setLoading(false)
  }

  const handleCityChange = (selected) => {
  if (selected === "current") {
    setCity(null);     
  } else {
    setCity(selected);  
  }
};

  useEffect(()=> { 
    if (city==null){
      getCurrentLocation()
    }else{
      getWeatherByCity()
    }   
  },[city])
  
  return (
   <div>
      {loading?(
        <div className="container app-container">
        <ClipLoader
        color="#f88c6b"
        loading={loading}
        size={150} /> </div>)
        :(
        <div className="container app-container">
        <WeatherBox weather={weather} />
        <WeatherButton cities={cities} setCity={setCity} selectedCity={city} handleCityChange={handleCityChange}/>
      </div>
    )}      
    </div>
    )
}

export default App