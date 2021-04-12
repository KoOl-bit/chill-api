import React from 'react'
import { Redirect } from 'react-router-dom'

function Meals1 (isRedirecting) {
    return isRedirecting ?  (
        <Redirect to="/404" />
    ):(
        <div className="page-heading"><h1>Meals1</h1></div>
    )
}

export default Meals1
