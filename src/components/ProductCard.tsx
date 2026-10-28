import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import type { Product } from '../types'

interface ProductCardProps {
  product: Product
}

function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart()
  const outOfStock = product.stock === 0

  return (
    <article className="product-card">
      <Link to={`/products/${product.id}`} className="product-card-link">
        <span className="product-card-image" aria-hidden="true">
          {product.image ?? '🛒'}
        </span>
        <h2 className="product-card-name">{product.name}</h2>
        <p className="product-card-category">{product.category}</p>
        <p className="product-card-price">${product.price}</p>
      </Link>
      <button
        type="button"
        className="product-card-button"
        onClick={() => addToCart(product, 1)}
        disabled={outOfStock}
      >
        Agregar al carrito
      </button>
    </article>
  )
}

export default ProductCard
