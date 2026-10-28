import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section>
      <h1>404 – Página no encontrada</h1>
      <p>La página que buscás no existe.</p>
      <Link to="/">Volver a Inicio</Link>
    </section>
  )
}

export default NotFound
