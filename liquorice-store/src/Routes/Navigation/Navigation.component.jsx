import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './navigation.styles.scss'

export default function Navigation() {
  return (
    <>
      <nav>
        <div className='navigation-bar'>
          <Link to={'/'}><img src="./images/liquorice.png" alt="logo" className='logo'/></Link>
          <div className='navigation-links'>
              <ul>
          <Link to={'shop'} className="nav-link">Shop</Link>
          <Link to={'contact'} className="nav-link">Contact</Link>
          <Link to={'signin'} className="nav-link">Sign In</Link>
            </ul>
          </div>
         
        </div>
       
      </nav>
          <Outlet />
    </>
  )
}
