import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
        <ul>
            <li> <Link to="/shopping/home">Home</Link></li>
            <li><Link to="/shopping/men">Mens</Link></li>
            <li><Link to="/shopping/women">Womens</Link></li>
            <li><Link to="/shopping/kids">Kids</Link></li>
        </ul>
    </div>
  )
}
