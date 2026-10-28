import { useState } from 'react'
import { Link } from 'react-router-dom'
import CartItem from '../components/CartItem'
import { useCart } from '../context/CartContext'

function Cart() {
  const { items, totalPrice, clearCart } = useCart()
  const [checkoutMessage, setCheckoutMessage] = useState('')

  const handleCheckout = () => {
    setCheckoutMessage('¡Pedido realizado con éxito!')
    clearCart()
  }

  if (checkoutMessage) {
    return (
      <section>
        <h1>Carrito</h1>
        <p className="checkout-message">{checkoutMessage}</p>
        <Link to="/products">Seguir comprando</Link>
      </section>
    )
  }

  if (items.length === 0) {
    return (
      <section>
        <h1>Carrito</h1>
        <p>Tu carrito está vacío.</p>
        <Link to="/products">Ver catálogo</Link>
      </section>
    )
  }

  return (
    <section>
      <h1>Carrito</h1>

      <ul className="cart-list">
        {items.map((item) => (
          <li key={item.product.id}>
            <CartItem item={item} />
          </li>
        ))}
      </ul>

      <p className="cart-total">Total: ${totalPrice}</p>

      <div className="cart-actions">
        <button type="button" className="cart-clear" onClick={clearCart}>
          Vaciar carrito
        </button>
        <button type="button" className="cart-checkout" onClick={handleCheckout}>
          Finalizar pedido
        </button>
      </div>
    </section>
  )
}

export default Cart
