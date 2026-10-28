import type { ChangeEvent } from 'react'
import { useCart } from '../context/CartContext'
import type { CartItem as CartItemType } from '../types'

interface CartItemProps {
  item: CartItemType
}

function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart()
  const { product, quantity } = item
  const subtotal = product.price * quantity
  const inputId = `quantity-${product.id}`

  const handleQuantityChange = (event: ChangeEvent<HTMLInputElement>) => {
    const nextQuantity = Math.trunc(Number(event.target.value))

    if (Number.isNaN(nextQuantity)) {
      return
    }

    updateQuantity(product.id, Math.min(Math.max(nextQuantity, 1), product.stock))
  }

  return (
    <article className="cart-item">
      <div className="cart-item-info">
        <h2>{product.name}</h2>
        <p>Precio unitario: ${product.price}</p>
      </div>

      <div className="cart-item-quantity">
        <label htmlFor={inputId}>Cantidad</label>
        <input
          id={inputId}
          type="number"
          min={1}
          max={product.stock}
          value={quantity}
          onChange={handleQuantityChange}
        />
      </div>

      <p className="cart-item-subtotal">Subtotal: ${subtotal}</p>

      <button
        type="button"
        className="cart-item-remove"
        onClick={() => removeFromCart(product.id)}
      >
        Eliminar
      </button>
    </article>
  )
}

export default CartItem
