import style from "./Landing.module.css"
import { NavLink } from 'react-router-dom'




const Landing = () => {
  return (
    <div className= {style.container}>

      <h1 className= {style.title}>Welcome to countries API</h1>

        <NavLink className= {style.toHome} to='/home'>
          <button className= {style.buttonLanding}>Let's Start !</button>
        </NavLink>
    </div>
  )
}

export default Landing