import React from 'react'
import Navbar from "../Navbar/Navbar";
import "./Header.css"
import {FaPaperPlane} from "react-icons/fa";

const handleButtonClick = (event) => {
    event.preventDefault();
    // Add your button click logic here
};
const Header = () => {
    return (
        <header className='header flex flex-center flex-column'>
            <Navbar/>
            <div className='container'>
                <div className='header-content-center flex flex-column'>
                    <h1 className='text-uppercase header-title'>Dahham Company</h1>
                    <p className='text-lead'>We are the oldest company in Syria specialized in manufacturing washing
                        machine parts.</p>

                    <a href="/" className='btn header-btn button btn-blue' onClick={handleButtonClick}>
                        <FaPaperPlane/> <span>get started </span>
                    </a>
                </div>
            </div>

        </header>)
}

export default Header