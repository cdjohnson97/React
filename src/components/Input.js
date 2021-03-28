import React, { useState } from 'react';



const Input = ({input, setInput, addItems}) => {        
    

    return <>

        <input
        value={input}
        onChange={ (e) => setInput(e.target.value)}   
        />

        <button onClick={addItems}>+</button>


    </>
}

export default Input                                                                    