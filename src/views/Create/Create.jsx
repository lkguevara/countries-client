import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
import {  useSelector,useDispatch } from 'react-redux';
import style from './Create.module.css'
import {SelectionMultiple} from '../../components/SelectionMultiple/SelectionMultiple'

//* funtion validate
const validate = (state, errorsState) => {
  const errors = {...errorsState}
    //! name
    if(!state.name) errors.name = 'The name is required'
    else errors.name = '';

    // ! Duration
    if(!state.duration) errors.duration = 'The duration is required'
    else if(!/^[0-9]{1,2}$/i.test(state.duration)) errors.duration = 'The duration is invalid'
    else errors.duration = '';

    // ! Level
    if(!state.level) errors.level = 'The level is required'
    else errors.level = '';

    // ! Season
    if(!state.season) errors.season = 'The season is required'
    else errors.season = '';

    // ! Country
    if(!state.countryId) errors.countryId = 'The country is required'
    else errors.countryId = '';

    return errors;
}

const Create = () => {
  const dispatch = useDispatch()
  const countries =  useSelector(state=>state.countries)
    .sort((a, b) => {
      if(a.name < b.name){
          return -1;
      }
      if(a.name > b.name){
          return 1;
      }
      return 0;
    });

  let countriesNames = countries.map(country=> {return {label: country.name , value: country.id}});
  // formCompleted es para validar que el form este completo
  const [formCompleted, setFormCompleted] = useState(false)

// corresponde al estado local de las props del form
  const [form, setForm] = useState({
    name:"",
    level:"",
    season:"",
    duration:"",
    countryId: []
  })

// manejo de errores
  const [errors, setErrors] = useState({
    name:"",
    level:"",
    season:"",
    duration:"",
    countryId:"",
    formCompleted:""
  })

    const  onDeletee = (country) => { 
      setForm({...form, countryId: form.countryId.filter(c=> c !== country) } )
      console.log(form.countryId)
    }
// selección de multiples paises
  const selectHandler = (e) => {
    if (form.countryId.includes(e.target.value)) return;
    setForm({...form, countryId: [...form.countryId, e.target.value ]} )
    
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })

    // validación del formulario
    setErrors(validate({
      ...form , [e.target.name]: e.target.value
    }, errors))
  }

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();


  }


  // variables 
  const season = ['Summer', 'Winter', 'Fall', 'Spring']

  
  return (
    <div className={style.container}>

      <div className={style.formContainer}>
        <form className={style.form} onSubmit ={handleSubmit}>
{/* -------------------------------------------------------------------- */}
        {/* name */}
          <div className={style.inputName}>
              <label>Name: </label>
              <input 
                className={style.input}
                type="text" 
                value={form.name}
                name="name" 
                onChange={handleChange}
                placeholder='Activity name...'  
              />
              {errors.name && <p className={style.errorText}>{errors.name}</p>}
          </div>
          
{/* -------------------------------------------------------------------- */}
          {/* country */}
          <div className={style.inputCountry}>
              <label >Country: </label>
              <select name="countryId"  onChange={selectHandler} >
                <option value="countries" disabled = "disabled" >Countries:</option>
                    { 
                      countriesNames.map(country => (
                        <option key={country.value} value={country.value}>{country.label}</option>
                    ))
                    
                  }
              </select>
          </div>

          <div className={style.selectedContainer}>
          {
            form.countryId.map(country=>{
              return <SelectionMultiple
                  key = {country}
                  country ={country}
                  onDeletee = {onDeletee}
                />
            })
          }
          
          </div>
          {!form.countryId.length && <p className={style.errorSelectText}>Select at least one country</p>}


{/* -------------------------------------------------------------------- */}
          {/* duration */}
          <div className={style.inputDuration}>
            <label>Duration: </label>
            <input 
              type="number" 
              name="duration"
              value={form.duration}
              onChange={handleChange}
              placeholder='Duration in hours...'
            />
            
            {errors.duration && <p className={style.errorText}>{errors.duration}</p>}
          </div>

{/* -------------------------------------------------------------------- */}
          {/* level */}
          <div className={style.inputLevel}>
            <label>Level: </label>

            <select name="level" onChange={handleChange}>
              <option value="level" disabled = "disabled" >Select Level:</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>

            {errors.level && <p className={style.errorText}>{errors.level}</p>}
          </div>

{/* -------------------------------------------------------------------- */}
          {/* season */}
          <div className={style.seasonContainer}>
            <label>Season: </label>
            <select name="season" onChange={handleChange}>
              <option value="season" disabled = "disabled" >Select season:</option>
              {
                season.map(s => (
                  <option key={s} value={s}>{s}</option>
                ))
              }
            </select>

          {errors.season && <p className={style.errorText}>{errors.season}</p>}
          </div>

{/* -------------------------------------------------------------------- */}

          <button 
            className={style.submitButton} 
            type='submit' 
          >
            Submit Activity
          </button>
            
        </form>
         

        </div>
    </div>
  )
}

export default Create