import React from 'react'
import { NavLink } from 'react-router-dom'


function Header() {
    return (
        <div className="section-header">
            <nav className="menu-list">
              
            <NavLink className="order-list"  to='/components/posts'>Home</NavLink>
            <NavLink  className="order-list" to='/about'>About</NavLink>
            <NavLink  className="order-list" to='/notfound'></NavLink>
            </nav>
        </div>
    )
}

export default Header
