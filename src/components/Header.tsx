import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function Header() {
  const { totalItems } = useCart()

  return (
    <header className="site-header">
      <Link to="/" className="brand">
        Kiosco El Rápido
      </Link>
      <nav className="site-nav">
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          Inicio
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          Productos
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          Carrito ({totalItems})
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
