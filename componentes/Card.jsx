import React, { useState } from 'react'

const Card = ({Data, Icon}) => {
  const [Degrees, setDegrees] = useState('°C')
  const [Temp, setTemp] = useState(Data.main?.temp)

  const changeDegreeds = () =>{
    if(Degrees === '°C'){
      const temp1 = (Temp * 9 / 5 + 32).toFixed(2)
      setDegrees('°F')
      setTemp(temp1)
    }if(Degrees === '°F'){
      const temp2 = ((Temp - 32) * 5 / 9).toFixed(2)
      setDegrees('°C')
      setTemp(temp2)
    }
  }
  return (
    <div className='Card'>
        <h1 className='Title'>Meteorologist</h1>
        <p className='subTitle'>{Data.name}</p>
        <div className='gridContainer'>
            <div className='imgContainer'>
                <img src={`http://openweathermap.org/img/wn/${Icon}@4x.png`} alt="Icon" />
                <p className='subTitle'>{Temp}{Degrees} </p>
            </div>
            <ul className='infoContainer'>
                    <li>
                      <p>{Data.weather?.description}</p>
                    </li>
                    <li>
                      <p>Cloudiness: {Data.clouds?.all}</p>
                    </li>
                    <li>
                      <p>Wind Speed: {Data.wind?.speed}</p>
                    </li>
                    <li>
                      <p>Humidity: {Data.main?.humidity}</p>
                    </li>
            </ul>
        </div>
        <button onClick={changeDegreeds}>Degreens °F/°C</button>
    </div>
  )
}

export default Card