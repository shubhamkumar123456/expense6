import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <ul>
        <li><Link to="/">Expense</Link></li>
        <li><Link to="/counter">Counter</Link></li>
        <li><Link to="/form">From</Link></li>
        <li><Link to="/condition">condition</Link></li>
        <li><Link to="/hooks">UseEffect</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
