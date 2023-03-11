import React from 'react'

import { Offcanvas, Stack } from 'react-bootstrap'
import { useShopingCart } from '../context/ShopingCartContext'
import CartItem from './CartItem';
import formatCurrency from './formatCurrency';
import storeitems from "../data/storeitems.json"

const ShoppingCart = ({isOpen}) => {
    
    const {cartItems,closeCart} =useShopingCart();
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>
                cart
            </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
      <Stack gap={3}>
      {cartItems.map((item)=>(
            <CartItem key ={item.id} {...item}/>
        ))}
        <div className="ms-auto fw-bold fs-5">
            Total{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeitems.find((i) => i.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            )}
          </div>
      </Stack>
        </Offcanvas.Body>

    </Offcanvas>
  )
}

export default ShoppingCart