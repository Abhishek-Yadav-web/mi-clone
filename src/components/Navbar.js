import React from 'react'
import '../styles/navbar.css'
import {Link} from 'react-router-dom'
import data from '../data/data'

const Navbar = () => {
    let url = `http://localhost:3000`
    return (
        <>
            <div className="nav">
                <div className="logo" id='LogoBx'>
                    <Link to="/" id='logo'> <img src={data.logo} alt="Not" id='logoImg' /></Link>
                </div>
                    <a className='navlinks' href={`${url}/miphones`}>Mi Phones</a>
                    <a className='navlinks' href={`${url}/redmiphones`}>Redmi Phones</a>
                    <a className='navlinks' href={`${url}/tv`}>TV</a>
                    <a className='navlinks' href={`${url}/laptops`}>Laptops</a>
                    <a className='navlinks' href={`${url}/lifestyle`}>Fitness & Lifestyle</a>
                    <a className='navlinks' href={`${url}/home`}>Home</a>
                    <a className='navlinks' href={`${url}/audio`}>Radio</a>
                    <a className='navlinks' href={`${url}/accessories`}>Accessories</a>
                <div className="searchBx">
                    <input type="text" name="search" placeholder='Search Products' autoComplete='off' /><ion-icon name="search-outline"></ion-icon>
                </div>
            </div>
        </>
    )
}

export default Navbar
