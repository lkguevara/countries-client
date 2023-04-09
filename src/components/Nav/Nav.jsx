import { Link } from 'react-router-dom'
import style from "./Nav.module.css"
import logo from '../../assets/logo-2.svg'
import { useDispatch } from 'react-redux';
import { getCountries } from '../../redux/actions';

const Nav = () => {
  const dispatch = useDispatch();

  function handleCountries(e) {
    e.preventDefault();
    dispatch(getCountries());
  }

  return (
    <>
      <div className={style.containerNav}>
        <Link to="/home">
          <button className={style.buttonNav}>Home</button>
        </Link>
        <Link to="/create">
          <button className={style.buttonNav}>Create Activity</button>
        </Link>
        <div className={style.getCountries}>
          <button className={style.buttonNav} onClick={handleCountries}>
            Get all countries
          </button>
        </div>
      </div>
      <img className={style.logoHome} src={logo} alt="earth" />
    </>
    
  )
}

export default Nav