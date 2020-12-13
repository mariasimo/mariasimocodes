import React from "react"
import styles from "./navigation.module.scss"
import { Link } from "gatsby"

const Navigation = () => {
  return (
    <nav role="navigation" aria-label="Main" className={styles.navigation}>
      <Link to="/" className={styles.logo}>
        <span>María Simó</span>
      </Link>

      <ul>
        <li>
          <Link to="/articulos">Artículos</Link>
        </li>
        <li>
          <Link to="/#proyectos">Proyectos</Link>
        </li>
        <li>
          <Link to="/sobre-mi">Sobre mí</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
