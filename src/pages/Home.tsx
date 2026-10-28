import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="home">
      <h1>Bienvenido a Kiosco El Rápido</h1>
      <p>Encontrá bebidas, snacks, golosinas y más.</p>
      <Link to="/products" className="home-cta">
        Ver productos
      </Link>
    </section>
  )
}

export default Home
