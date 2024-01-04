import { Link } from "react-router-dom"
import "./navbar.css"
const Navbar = () => {
  return (
    <>
      <nav className="navigation">
        <div className="navlist">
          <Link className="btn" to="/">Home</Link>
          <Link className="btn" to="/UserInfo">UserInfo</Link>
          <Link className="btn" to="/UserOutput">UserOutput</Link>
          <Link className="btn" to="/Login">Login</Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar