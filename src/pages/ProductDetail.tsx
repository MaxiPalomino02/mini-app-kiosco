import { useState } from 'react'
import type { ChangeEvent } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { products } from '../data/products'

function ProductDetail() {
  const { id } = useParams<{ id: string }>()
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)

  const productId = Number(id)
  const product = Number.isNaN(productId)
    ? undefined
    : products.find((item) => item.id === productId)

  if (!product) {
    return (
      <section>
        <h1>Producto no encontrado</h1>
        <Link to="/products">Volver al catálogo</Link>
      </section>
    )
  }

  const outOfStock = product.stock === 0

  const handleQuantityChange = (event: ChangeEvent<HTMLInputElement>) => {
    const nextQuantity = Math.trunc(Number(event.target.value))

    if (Number.isNaN(nextQuantity)) {
      setQuantity(1)
      return
    }

    setQuantity(Math.min(Math.max(nextQuantity, 1), product.stock))
  }

  return (
    <section className="product-detail">
      <h1>{product.name}</h1>
      <p className="product-detail-category">{product.category}</p>
      <p className="product-detail-price">${product.price}</p>
      <p>Stock: {product.stock}</p>
      <p>{product.description}</p>

      <div className="product-detail-actions">
        <label htmlFor="quantity">Cantidad</label>
        <input
          id="quantity"
          type="number"
          min={1}
          max={product.stock}
          value={quantity}
          onChange={handleQuantityChange}
          disabled={outOfStock}
        />
        <button
          type="button"
          className="product-card-button"
          onClick={() => addToCart(product, quantity)}
          disabled={outOfStock}
        >
          Agregar al carrito
        </button>
      </div>

      <Link to="/products">Volver al catálogo</Link>
    </section>
  )
}

export default ProductDetail
