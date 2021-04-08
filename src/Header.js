import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <div className="section-header">
            <nav>
            <NavLink to='/components/posts'>Meal1</NavLink>
            <br />
            <NavLink to='/meals2'>Meal2</NavLink>
            <br />
            <NavLink to='/meals3'>Meal3</NavLink>
           
            </nav>
        </div>
    )
}

export default Header
