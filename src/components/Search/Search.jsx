import style from './Search.module.css'
import { useState } from 'react';
import { useDispatch, useselector } from 'react-redux';
import {getCountries, getNameCountries} from '../../redux/actions'


const Search = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');


  const handleSearch = (e) => {
    // capturar el valor del input
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() !== '') {
      dispatch(getNameCountries(name));
      setName('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <div className={style.search}>
      <div className={style.searchBar}>
        <input
          placeholder="Search a country"
          type="search"
          onChange={handleSearch}
          onKeyDown={handleKeyDown}
          value={name}
        />
        {/* <button
          className={style.searchButton}
          type="submit"
          onClick={handleSubmit}
        >
          Buscar
        </button> */}

         {/* obtener todos los paises */}
      </div>

    </div>
  );
};

export default Search;
