import React from 'react'

const Header = () => {
    return (
        <nav className="navbar navbar-light bg-dark d-flex justify-content-center align-items-center">
            <div className="container-fluid d-flex justify-content-center align-items-center">
                <a className="navbar-brand text-white" href="https://images.nasa.gov/" target="blank">
                    <img src="https://images.nasa.gov/images/nasa_logo-large.ee501ef4.png" alt="nasa logo" />
                    NASA Image
                </a>
                <h1 className="text-white fst-italic">By Romario Baldárrago</h1>
            </div>
        </nav>
    )
}

export default Header