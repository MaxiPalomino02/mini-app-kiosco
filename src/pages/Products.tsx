import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'
import type { Category } from '../types'

const CATEGORIES: Category[] = ['bebidas', 'snacks', 'golosinas', 'varios']

const CATEGORY_LABELS: Record<Category, string> = {
  bebidas: 'Bebidas',
  snacks: 'Snacks',
  golosinas: 'Golosinas',
  varios: 'Varios',
}

function isCategory(value: string | null): value is Category {
  return value !== null && CATEGORIES.some((category) => category === value)
}

function Products() {
  const [searchParams, setSearchParams] = useSearchParams()
  const categoryParam = searchParams.get('category')
  const selectedCategory = isCategory(categoryParam) ? categoryParam : null
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products

  const selectCategory = (category: Category | null) => {
    if (category === null) {
      setSearchParams({})
    } else {
      setSearchParams({ category })
    }
  }

  return (
    <section>
      <h1>Productos</h1>

      <div className="category-filter" role="group" aria-label="Filtrar por categoría">
        <button
          type="button"
          className={selectedCategory === null ? 'filter-button active' : 'filter-button'}
          aria-pressed={selectedCategory === null}
          onClick={() => selectCategory(null)}
        >
          Todas
        </button>
        {CATEGORIES.map((category) => (
          <button
            key={category}
            type="button"
            className={
              selectedCategory === category ? 'filter-button active' : 'filter-button'
            }
            aria-pressed={selectedCategory === category}
            onClick={() => selectCategory(category)}
          >
            {CATEGORY_LABELS[category]}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default Products
