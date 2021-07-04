import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';


function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false);
    return (
        <>
            <div className="topnav">
                <Link to="/" className="active"> !آشپزانه </Link>
                <Link to="/میان وعده ها" className="snaks"> میان وعده ها </Link>
                <Link to="/تزیین غذا" className="tazeen"> تزیین غذا </Link>
                <div className="dropdown">
                    <button className="dropbtn">غذاها 
                    <i class="fa fa-caret-down"></i>
                    </button>
                <div className="dropdown-content">
                    <Link to="/غذاهای محلی" className="ghaza-mahalee">غذاهای محلی</Link>
                    <Link to="/فست فود" className="fastfood">فست فود</Link>
                    <Link to="/غذاهای دریایی" className="seafood">غذاهای دریایی</Link>
                </div>
                </div>
                <Link to="/ارتباط با ما" className="contact"> ارتباط با ما  </Link> 
            </div>
        </>
    )
}

export default Navbar
