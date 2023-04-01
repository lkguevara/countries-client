import style from './Filters.module.css'
import { useDispatch } from 'react-redux'
// import de las acciones del filtro u ordenamiento
import { filterContinent } from '../../redux/actions'



const Filters = () => {
  const dispatch = useDispatch();


  // handle filter continent
const handleFilterContinent = (e) => {
  e.preventDefault()
  dispatch(filterContinent(e.target.value))
  console.log(e.target.value)
}


  return (
    <div className={style.filtersBar}>
      <form className='form'>
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
        <select  name='orderBy'>
          <option value="sortType" disabled = "disabled" >Order by:</option>
          <option value="alphabetically">Alphabetically</option>
          <option value="population">Population</option>
          <option value="activity">Time activity</option>
        </select>


        <input type="radio" id='ASC' name='order' value='ASC' defaultChecked/>
        <label htmlFor='ASC'>⬆️</label>

        <input type="radio" id='DES' name='order' value='DES'/>
        <label htmlFor='DES'>⬇️</label>
      
      </form>
    </div>
  )
}

export default Filters