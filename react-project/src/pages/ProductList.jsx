import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button, Icon, Menu, Table } from 'semantic-ui-react'
import ProductService from "../services/productService"
import useCart from '../hooks/useCart'

export default function ProductList() {

  const { handleAddToCart, handleRemoveFromCart } = useCart()
  const [products, setProducts] = useState([])

  useEffect(()=>{
    let productService = new ProductService()
    productService.getAll().then(result=>setProducts(result.data))
  },[]) 

  return (
    <div>
      <Table celled selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell></Table.HeaderCell>
            <Table.HeaderCell>Ürün Adı</Table.HeaderCell>
            <Table.HeaderCell>Ürün Fiyatı</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {
            products.map((product) => (
              <Table.Row key={product.id}>
                <Table.Cell><Link to={`/products/${product.id}`}>{product.name}</Link></Table.Cell>
                <Table.Cell>{product.price}</Table.Cell>
                <Table.Cell><Button color='green' onClick={()=>handleAddToCart(product)}>Add</Button><Button color='red' onClick={() => handleRemoveFromCart(product) }>Remove</Button></Table.Cell>
              </Table.Row>
            ))
          }
        </Table.Body>
        <Table.Footer >
          <Table.Row >
            <Table.HeaderCell colSpan='4'>
              <Menu floated='right' pagination>
                <Menu.Item as='a' icon>
                  <Icon name='chevron left' />
                </Menu.Item>
                <Menu.Item as='a'>1</Menu.Item>
                <Menu.Item as='a'>2</Menu.Item>
                <Menu.Item as='a'>3</Menu.Item>
                <Menu.Item as='a'>4</Menu.Item>
                <Menu.Item as='a' icon>
                  <Icon name='chevron right' />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  )
}
