import React, { useContext } from 'react'
import { UdemyCartContext } from '../Context/udemy-context';

export default function Cart() {
  const { cartList, updateCartList } = useContext(UdemyCartContext);

  /**
   * Emptying cart in context
   */
  function emptyCart() {
    updateCartList((previousCartItems) => {
      const localCartItems = JSON.parse(JSON.stringify(previousCartItems));
      localCartItems.cartItems = [];
      return localCartItems;
    })
  }

  return (
    <div>
      Cart Items - {cartList?.cartItems?.length > 0 ? cartList?.cartItems?.length : 0}
      {cartList?.cartItems?.length > 0 ? <button className='fim-btn secondary-btn' onClick={emptyCart}>Empty Cart</button> : null}
    </div>
  )
}
