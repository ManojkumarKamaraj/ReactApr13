import React, { useEffect, useRef, useState } from 'react';

const UseRefHook = () => {
    const[data,setData] = useState(0)
    const myRef = useRef()
    const myRef2 = useRef()
    useEffect(()=>{
        myRef.current.focus()
    },[])
    const handleSubmit =()=>{
        console.log(myRef.current.value);
        myRef2.current = myRef.current.value;
        setData(data => data+1)
    }
    return (
        <div>
            <h1>Component using UseRefHook</h1>
            {/* <label>Name:</label> */}
            <input type='text' placeholder='Enter name' ref={myRef} />
            <input type='text' placeholder='Enter name' />
            <br />
            <button onClick={handleSubmit}>Click</button>
            {myRef2.current}
            
            
        </div>
    );
};

export default UseRefHook;