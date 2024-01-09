import React, { useState } from 'react'
import CartSummary from './CartSummary'
import { Container, Menu, Dropdown, Input } from 'semantic-ui-react'
import SignedOut from './SignedOut'
import SignedIn from './SignedIn'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Navi() {
  const { cartItems } = useSelector(state => state.cart)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const navigate = useNavigate()

  function handleSignOut(params) {
    setIsAuthenticated(false)
    navigate('/')
  }
  function handleSignIn(params) {
    setIsAuthenticated(true)
  }

  return (
    <div>
      <Menu inverted fixed='top'>
        <Container>
          <Menu.Item name='Ana Sayfa' as={Link} to="/" />
          <Menu.Menu position="right">
           
            <Menu.Item name='Favoriler' as={Link} to="/favorites" />

            {cartItems.length > 0 && <CartSummary />}
            {isAuthenticated ? <SignedIn signOut={handleSignOut} /> : <SignedOut signIn={handleSignIn} />}
          </Menu.Menu>
        </Container>

      </Menu>
    </div>
  )
}
