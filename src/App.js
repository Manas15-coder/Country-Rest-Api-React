import React, { useState } from 'react'
import {FaMoon,FaSun} from 'react-icons/fa'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import AllCountries from './components/AllCountries/AllCountries'
import CountryInfo from './components/CountryInfo/CountryInfo'

const App = () => {
  const [dark,setDark]=useState(false)
  
  const changeTheme=()=>{
    document.body.classList.toggle('dark')
    setDark(!dark)
  }

    // const apply_dark=()=>{

    // }
  return (
    <>
    <div className='header container-fluid'>
        <h4><b>Explore the world !</b></h4>
        <button onClick={changeTheme} className='btn'>{dark ? <FaMoon className='moon'/> : <FaSun className='moon'/>}</button>
    </div>
    <div className='container-fluid'>
      <Routes>
        <Route path='/' element={<AllCountries/>}/>
        <Route path='country/:countryName' element={<CountryInfo/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App





// here is the code update apply_dark
// when button is clicked the function apply dark will get called along with change theme
// import React, { useState } from 'react'
// import {FaMoon,FaSun} from 'react-icons/fa'
// import { Route, Routes } from 'react-router-dom'
// import './App.css'
// import AllCountries from './components/AllCountries/AllCountries'
// import CountryInfo from './components/CountryInfo/CountryInfo'

// const App = () => {
//   const [dark,setDark]=useState(false)
  
//   const changeTheme=()=>{
//     document.body.classList.toggle('dark')
//     setDark(!dark)
//   }

//     const apply_dark=()=>{
      
//     }
//   return (
//     <>
//     <div className='header container-fluid'>
//         <h4><b>Explore the world !</b></h4>
//         <button onClick={changeTheme} className='btn'>{dark ? <FaMoon className='moon'/> : <FaSun className='moon'/>}</button>
//     </div>
//     <div className='container-fluid'>
//       <Routes>
//         <Route path='/' element={<AllCountries/>}/>
//         <Route path='country/:countryName' element={<CountryInfo/>}/>
//       </Routes>
//     </div>
//     </>
//   )
// }

// export default App

