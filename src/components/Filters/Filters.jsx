import style from './Filters.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
// import de las acciones del filtro u ordenamiento
import { filterContinent, orderCountry, orderPopulation, filterActivity } from '../../redux/actions'
import { getActivities, getCountries } from '../../redux/actions'



const Filters = ({setCurrentPage, setOrder}) => {
  const dispatch = useDispatch();
  //* useSelector => get/countries
  const allCountries = useSelector((state) => state.countries);
  const activities = useSelector((state) => state.activities);

  // useEffect
  useEffect(() => {
    dispatch (getCountries())
    dispatch (getActivities())
  }, []);



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

// *handle filter activity
  const handleFilterActivity = (e) => {
    dispatch(filterActivity(e.target.value))
    console.log(e.target.value)
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

        <select name='filterActivity' onChange= {handleFilterActivity}>
          <option value="default" disabled = "disabled" >Sort Activity</option>
          <option value="all">All activities</option>
          {activities.map(activity => (
          <option key={activity.id} value={activity.name}>{activity.name}</option>
        ))}

        </select>


      
      </form>
    </div>
  )
}

export default Filters