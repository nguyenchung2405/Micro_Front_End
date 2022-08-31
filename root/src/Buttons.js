import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Buttons() {
  return (
    <div>
        <NavLink className="nav-link" to="/">Home</NavLink>
        <NavLink className="nav-link" to="/group">Group</NavLink>
        <NavLink className="nav-link" to="/process">Process</NavLink>
    </div>
  )
}
