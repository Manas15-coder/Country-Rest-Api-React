import React, { useState } from 'react'

const Filter = ({onSelect}) => {
    const handleSelect=(e)=>{
        const region=e.target.value;
        onSelect(region)

    }
    return (
        <div className='filter'>
            <select name='filter'onChange={handleSelect} className='filter'>
                <option value=''>Select Country By Region</option>
                <option className='option' value="Africa">Africa</option>
                <option className='option' value="America">America</option>
                <option className='option' value="Asia">Asia</option>
                <option className='option' value="Europe">Europe</option>
                <option className='option' value="Oceania">Oceania</option>
            </select>

        </div>
    )
}

export default Filter
