import React, { useEffect, useState } from 'react'
import './allcountries.css'
import { Link } from 'react-router-dom'
import Search from '../Search/Search'
import Filter from '../Filter/Filter'

const AllCountries = () => {
    const [countries,setCountries]=useState([])
    const getCountry=()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then((res)=>{
            return res.json()
        }).then((data)=>{
            setCountries(data);
            console.log(data)
        })
    }

    const getCountryByName=(countryName)=>{
        fetch(`https://restcountries.com/v3.1/name/${countryName}`)
        .then((res)=>{
            return res.json()
        }).then((data)=>{
            setCountries(data);
            console.log(data)
        })
    }
    const getCountryByRegion=(regionName)=>{
        fetch(`https://restcountries.com/v3.1/region/${regionName}`)
        .then((res)=>{
            return res.json()
        }).then((data)=>{
            setCountries(data);
            console.log(data)
        })
    }



    useEffect(()=>{
        getCountry()
    },[])
  return (
    <>
    <div className='country-wrapper'>
        <div className='country-top'>
            <div className='search'>
                <Search onSearch={getCountryByName}/>
            </div>
            <div className='filter'>
                <Filter onSelect={getCountryByRegion}/>
            </div>


        </div>
        <div className='country-bottom'>
            
            {countries.map((country)=>{
                return(
                    <>
                    <Link to={`/country/${country.name.common}`} className='link'>
                    <div className='card'>
                        <img src={country.flags.svg} className='image'/>
                        <div className='card-body'>
                            <h5>{country.name.common}</h5>
                            <h6>Population : {country.population}</h6>
                            <h6>Region : {country.region}</h6>
                            <h6>Capital : {country.capital}</h6>
                        </div>
                    </div>
                    </Link>
                    </>
                )
            })}
        </div>
    </div>
    </>
  )
}

export default AllCountries
