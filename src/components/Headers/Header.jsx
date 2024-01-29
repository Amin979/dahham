import React from 'react'
import Navbar from "../Navbar/Navbar";
import "./Header.css"
import {FaPaperPlane} from "react-icons/fa";

const Header = () => {
    return (
        <header className='header flex flex-center flex-column'>
            <Navbar/>
            <div className='container'>
                <div className='header-content-center flex flex-column'>
                    <h1 className='text-uppercase header-title'>Dahham Company</h1>
                    <p className='text-lead'>We are the oldest company in Syria specialized in manufacturing washing
                        machine parts.</p>
                    <p></p>
                    <a href="/" className='btn header-btn btn-blue'>
                        <FaPaperPlane/> <span>get started</span>
                    </a>
                </div>
            </div>

        </header>)
}

export default Header