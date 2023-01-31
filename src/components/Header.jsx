import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <header className="header">
      <div className="header__container _container">
        <NavLink to='/' className="header__logo">shop</NavLink>
        <div className="header__content">the test project</div>
      </div>
    </header>
  )
}
