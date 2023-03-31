import React, { useState } from 'react'

const Search = ({onSearch}) => {
    const [input,setInput]=useState([])
    const searchHandle=(e)=>{
        e.preventDefault()
        onSearch(input)

    }
  return (
    <div>
        <form onSubmit={searchHandle}>
            <input type='text' value={input} onChange={(e)=>setInput(e.target.value)}  placeholder='Search a Country....'className='search'/>
        </form>
      
    </div>
  )
}

export default Search
