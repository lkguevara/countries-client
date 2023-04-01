import style from './Filters.module.css'
import { useDispatch } from 'react-redux'
// import de las acciones del filtro u ordenamiento
import { filterContinent, orderCountry, orderPopulation } from '../../redux/actions'



const Filters = ({setCurrentPage, setOrder}) => {
  const dispatch = useDispatch();


//* handle filter continent
  const handleFilterContinent = (e) => {
    dispatch(filterContinent(e.target.value))
    console.log(e.target.value)
  }

// *handle order country
  const handleOrderCountries = (e) => {
    dispatch(orderCountry(e.target.value))
    console.log(e.target.value)
    // setear la pagina en 1
    setCurrentPage(1) 
    setOrder(`order = ${e.target.value}`)
  }

// *handle order country
  const handleOrderPopulation = (e) => {
    dispatch(orderPopulation(e.target.value))
    console.log(e.target.value)
    // setear la pagina en 1
    setCurrentPage(1) 
    setOrder(`order = ${e.target.value}`)
  }



  return (
    <div className={style.filtersBar}>
      <form className={style.form}>
      {/* filtro por continente */}
        <select name="continent" onChange = {handleFilterContinent} >
          <option value="sortType" disabled = "disabled" >Sort continent:</option>
          <option value="all" >All Continents</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Antarctic">Antarctic</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>

      {/* ordenamiento asc - desc */}
        <select name='orderName' onChange = {handleOrderCountries}>
          <option value="default" >Sort Alphabetically</option>
          <option value="asc">Alphabetically ⬆️</option>
          <option value="desc">Alphabetically ⬇️</option>
        </select>

        <select name='orderPopulation' onChange = { handleOrderPopulation }>
          <option value="default" >Sort Population</option>
          <option value="asc">Population ⬆️</option>
          <option value="desc">Population ⬇️</option>
        </select>

        <select name='orderActivity'>
          <option value="default" disabled = "disabled" >Sort Activity</option>
          <option value="asc">▶️3 horas</option>
          <option value="desc">◀️3 horas</option>
        </select>


      
      </form>
    </div>
  )
}

export default Filters