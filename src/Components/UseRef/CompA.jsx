import React, { useState } from 'react';

const CompA = () => {
    const[data,setData] =useState('')
    const handleChange = (e)=>{
        setData(e.target.value)
    }
    return (
        <div>
            <h1>Component without UseRef Hook</h1>
            <label>Name:</label>
            <input type='text' value={data} onChange={handleChange}></input>
            <br />
            {data}
        </div>
    );
};

export default CompA;