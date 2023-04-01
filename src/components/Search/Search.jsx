import style from './Search.module.css'
import { useDispatch } from 'react-redux';
import {getCountries} from '../../redux/actions'


const Search = () => {
  const dispatch = useDispatch();

  function handleCountries(e) {
    e.preventDefault();
    dispatch(getCountries());
}

  return (
    <div className={style.search}>
      <div className={style.searchBar}>
          <input placeholder="Search a country" type='search' />
          <button className={style.searchButton}>
              Buscar
          </button>  
      </div>

      {/* obtener todos los paises */}
      <div className={style.getCountries}>
          <button 
            className={style.countriesButton}
            onClick={handleCountries}

          >
              Get all countries
          </button>  
      </div>
    </div>
    
  )
}




export default Search