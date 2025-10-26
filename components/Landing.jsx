import { Link } from 'react-router-dom'

function Landing() {
  return (
    <div className="container">
      <header className="hero">
        <div className="wave"></div>
        <div className="decor-circle decor-circle1"></div>
        <div className="decor-circle decor-circle2"></div>
        <h1>Ticket Management App</h1>
        <p>Manage your tickets efficiently and effectively.</p>
        <Link to="/auth/login" className="btn">Login</Link>
        <Link to="/auth/signup" className="btn">Get Started</Link>
      </header>
      <main>
        <section className="features">
          <div className="card">Feature 1</div>
          <div className="card">Feature 2</div>
        </section>
      </main>
      <footer>© 2025 Ticket App</footer>
    </div>
  )
}

export default Landing