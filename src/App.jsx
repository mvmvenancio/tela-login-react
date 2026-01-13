import { useEffect, useState } from "react"
import { FaLock, FaMoon, FaSun, FaUser } from "react-icons/fa"
import "./App.css"

function App() {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    document.body.className = dark ? "dark" : "light"
  }, [dark])

  return (
    <div className={`app-container ${dark ? "dark" : "light"}`}>
      
      <button className="theme-toggle" onClick={() => setDark(!dark)}>
        {dark ? <FaSun /> : <FaMoon />}
      </button>

      <form className="login-box">
        <h1>Login</h1><br></br>

        <div className="input-field">
          <input type="email" placeholder="Email" />
          <FaUser className="icon" />
        </div>

        <div className="input-field">
          <input type="password" placeholder="Senha" />
          <FaLock className="icon" />
        </div>

        <button type="submit">Entrar</button>
      </form>
    </div>
  )
}

export default App
