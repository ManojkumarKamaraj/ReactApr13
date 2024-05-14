import React, { useReducer } from 'react';
import ReducerAction from './ReducerAction';

const UseReducerHook = () => {
    //like useState it halso have [state,dispatch]
    // it also have a parameter useReducer(reducerAction , StateValue)  

    // const[state,dispatch] =useReducer(reducerAction,stateValue) 
    const[state,dispatch] =useReducer( ReducerAction ,0) 

    return (
        <div className='counter'>
            <h1>Counter Function </h1>
            {/* All the functions are in ReducerAction to perform 
            all the operations */}
            <div className='disp-value '>
            {state}
            </div>
            
            <button className='btn btn-danger ' onClick={()=>(dispatch({type:'ADD',payload:10}))}>ADD BY 10</button>
            <button className='btn btn-danger 'onClick={()=>(dispatch({type:'SUB',payload:5}))}>SUB BY 5</button>
            <br />
            <button className='btn btn-dark ' onClick={()=>(dispatch({type:'RESET'}))}>ReSet</button>

            
        </div>
    );
};

export default UseReducerHook;