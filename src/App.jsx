import axios from 'axios';
import { useEffect, useState } from 'react'
import './App.css'
import Card from '../componentes/Card';
import Loading from '../componentes/Loading';

function App() {

  const [Data, setData] = useState({})
  const [Icon, setIcon] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [Temp, setTemp] = useState('')

  useEffect (() => {

    navigator.geolocation.getCurrentPosition((v) => {
      const API_KEY = 'b2f026001f3acd715115ffc28aec8b8f';
        const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${v?.coords.latitude}&lon=${v?.coords.longitude}&appid=${API_KEY}&units=metric`

        axios.get(URL)
          .then((res) => {
            setData(res.data)
            setIcon(res.data.weather[0].icon)
            setIsLoading(false)
            setTemp(Data.main?.temp)
            console.log(res)
          })
          .catch(err => console.log(err))
    })
    
  }, [])


  return (
    <div className='App'>
      {isLoading

       ? 

      <Loading/>

       : 
      
      <Card
        Data = {Data}
        Icon = {Icon}
        Temp = {Temp}
      />}
      
      
    </div>
  )
}

export default App
