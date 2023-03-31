import React, { useState, useEffect } from 'react'
import './countryinfo.css'
import { Link, useParams } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
const CountryInfo = () => {
  const [country, setCountry] = useState([])
  const { countryName } = useParams()
  const getCountry = () => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
      .then((res) => {
        return res.json()
      }).then((data) => {

        setCountry(data);
        console.log(country);
      })
  }
  useEffect(() => {
    getCountry()
  }, [])


  return (
    <div>
      <Link to='/'><button className='btn-home'><FaArrowLeft />Go Back</button></Link>
      <div className='country-info'>
        {
          country.map((country, index) => {
            return (
              <>
                <div className='country-info-detail' key={index}>
                  <img src={country.flags.svg} alt='image' className='country-info-image' />
                </div>
                <div className='country-detail'>
                  <div className='country-name'>
                    <h1>{country.name.common}</h1>
                    <h5>Population : {country.population}</h5>
                    <h5>Region : {country.region}</h5>
                    <h5>Sub Region : {country.subregion}</h5>
                    <h5>Capital : {country.capital}</h5>
                </div>
                <div className='country-domain'>
                </div>
              </div>

              </>
            )
          })
        }
      </div>
    </div>
  )
}

export default CountryInfo
