import { Link } from 'react-router-dom'
import style from "./Nav.module.css"
import logo from '../../assets/logo.svg'

const Nav = () => {
  
  return (
    <>
      <div className={style.containerNav}>
        <Link to="/home">
          <button className={style.buttonNav}>Home</button>
        </Link>
        <Link to="/create">
          <button className={style.buttonNav}>Create Activity</button>
        </Link>
      </div>
      <img className={style.logoHome} src={logo} alt="earth" />
    </>
    
  )
}

export default Nav