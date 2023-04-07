import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {  useSelector, useDispatch } from 'react-redux';
import {postActivity , getCountries} from '../../redux/actions'
import style from './Create.module.css'

//* funtion validate
const validate = (state, errorsState, activitiesList) => {
  const errors = {...errorsState}
    //! name
    if(!state.name) errors.name = 'The name is required'
    else if(!/^[a-zA-Z\s]/i.test(state.name)) errors.name = 'The name is invalid'
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
    //  Array.isArray para verificar si el campo countryId es un arreglo y si su longitud es mayor a cero
    if (!Array.isArray(state.countryId) || state.countryId.length === 0) {
      errors.countryId = 'Please select at least one country';
    } else {
      errors.countryId = '';
    }


    return errors;
}

const Create = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // countries de mi store
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
  

// Información que va a tener el formulario
  const [form, setForm] = useState({
    name:"",
    level:"",
    season:"",
    duration:"",
    countryId: []
  })

  // validación del formulario
  const [formCompleted, setFormCompleted] = useState(false)

  // dispatch de las actividades
  useEffect(() => {
    dispatch(getCountries())
  }, [])
  

// manejo de errores
  const [errors, setErrors] = useState({
    name:"",
    level:"",
    season:"",
    duration:"",
    countryId:"",
    formCompleted:""
  });


// manejador de cambios de los inputs
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
    // console.log(form)

    // validación del formulario
    setErrors(validate({
      ...form , [e.target.name]: e.target.value
    }, errors))
  }

  // manejador de cambios de los select
  const handleSelect = (e) => {
    setForm({
      ...form,
      countryId: [...form.countryId, e.target.value]
    })
    setErrors(validate({
      ...form , countryId: [...form.countryId, e.target.value]
    }, errors))
  }

  // eliminar un pais del select
  const  handleDelete = (country) => { 
    setForm(
      {
        ...form, 
        countryId: form.countryId.filter(c=> c !== country) 
      } 
    )
  }


  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(form)

    
    // despacho el post de la actividad
    dispatch(postActivity(form))
    alert('Activity created successfully');

    // reseteo del form
    setForm({
      name:"",
      level:"",
      season:"",
      duration:"",
      countryId: []
    });

    setFormCompleted(false)

    // redirecciono a home
    navigate('/home')
  }

  const validateForm = () => {
    (form.name && form.countryId.length >=1 && form.duration && form.season) 
    ? setFormCompleted(true) 
    : setFormCompleted(false)
  }


  // variables 
  const season = ['spring', 'summer', 'fall' ,'winter ']

  
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
                placeholder='Activity name...'  
                value={form.name}
                name="name" 
                onChange={handleChange}
              />
              {errors.name && <p className={style.errorText}>{errors.name}</p>}
          </div>
          
{/* -------------------------------------------------------------------- */}
          {/* country */}
        <div className={style.inputCountry}>

            <label>Country: </label>
            {/* muestra todos los paises a seleccionar */}
            <select name="countryId" onChange={handleSelect}>
              <option disabled="disabled" selected defaultValue>
                Select one or more countries:
              </option>
              {countries.map((country) => (
                <option key={country.id} value={country.id} name="country">
                  {country.name}
                </option>
              ))}
            </select>

            {/*Muestra los paises seleccionados  */}
            <div className={style.selectedContainer}>
              {form.countryId.map((country => (
                <div className={style.selectCountry}>
                  <span>{country}</span>
                  <button type="button" onClick={() => handleDelete(country)}>X</button>
                </div>
              )))}
            </div>
            
            {errors.countryId && <p className={style.errorText}>{errors.countryId}</p>}
        </div>


{/* -------------------------------------------------------------------- */}
          {/* duration */}
          <div className={style.inputDuration}>
            <label>Duration: </label>
            <input 
              type="number" 
              name="duration"
              placeholder='Duration in hours...'
              value={form.duration}
              onChange={handleChange}
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
            <select name="season" onChange={handleChange} required>
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

          <p className={style.confirmButton} onClick={validateForm}>Compelete all camps !</p>
          {errors.formCompleted && <p className={style.errorText}>{errors.formCompleted}</p>}

          <button type='submit' className={style.submitButton} disabled={!formCompleted}>Submit Activity</button>
            
        </form>
         

        </div>
    </div>
  )
}

export default Create