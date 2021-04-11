import React from 'react';


const HeaderMessage = ({title}) => {
    return <>
    {
        title ? <p className="HeaderMessage">Entrain d'écrire...</p> : ''
    }
    </>
}


export default HeaderMessage;