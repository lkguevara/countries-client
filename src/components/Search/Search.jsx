import style from './Search.module.css'

const Search = () => {
  return (
    <div className={style.searchBar}>
        <input placeholder="Search a country by name ..." type='search' />
        <button className={style.searchButton}>
            Buscar
        </button>  
    </div>
  )
}

export default Search