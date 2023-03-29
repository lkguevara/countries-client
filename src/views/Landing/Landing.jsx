import style from "./Landing.module.css"
import { NavLink } from 'react-router-dom'




const Landing = () => {
  return (
    <div className= {style.container}>

        <NavLink className= {style.toHome} to='/home'>
          <button className= {style.button}>GO !</button>
        </NavLink>
    </div>
  )
}

export default Landing