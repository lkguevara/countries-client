import { Link } from 'react-router-dom'
import style from "./Nav.module.css"


const Nav = () => {
  
  return (
    <div >
      <Link to="/home">
        <button className={style.buttonNav}>Home</button>
      </Link>
      <Link to="/create">
        <button className={style.buttonNav}>Create Activity</button>
      </Link>
    </div>
  )
}

export default Nav