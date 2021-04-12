import React from 'react'
import { NavLink } from 'react-router-dom'


function Header() {
    return (
        <div className="section-header">
            <nav className="menu-list">
              
            <NavLink className="order-list"  to='/components/posts'>Meal1</NavLink>
            
            <NavLink  className="order-list" to='/meals2'>Meal2</NavLink>
            
            <NavLink  className="order-list" to='/meals3'>Meal3</NavLink>
            <NavLink  className="order-list" to='/notfound'></NavLink>
            </nav>
        </div>
    )
}

export default Header
