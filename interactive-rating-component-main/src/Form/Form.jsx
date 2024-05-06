import React, {useState} from "react";
import logo from '../../images/icon-star.svg'
import './Form.scss'

const Form = () => {
    
    return(
        <>
        <div className="box">
            <img src={logo} alt="logo" className="logo" />
            <h1>How did we do?</h1>
            <p>please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            <button className="btn">1</button>
            <button className="btn">2</button>
            <button className="btn">3</button>
            <button className="btn">4</button>
            <button className="btn">5</button>
            <button className="sub">SUBMIT</button>
        </div>
        
        </>
    )
}

export default Form