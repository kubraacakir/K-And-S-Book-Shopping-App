import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

export default function Categories() {
  return (
    <div>
      <Menu pointing vertical>
        <Menu.Item
          name='Ana Sayfa'
          as={Link}
          to="/"
        />
        
        <Menu.Item
          name='Sepet'
          as={Link}
          to="/cart"
        />
      </Menu>
    </div>
  )
}
