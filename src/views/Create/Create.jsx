import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
import {  useSelector } from 'react-redux';
import style from './Create.module.css'
import {SelectionMultiple} from '../../components/SelectionMultiple/SelectionMultiple'

// funcion validate
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


    

    return errors;
}

const Create = () => {
  // me trae el estado de countries del store
  const countries =  useSelector(state=>state.countries)
  // me trae el mapeo de los paises para el select
  let countriesNames = countries.map(country=> {return {label: country.name , value: country.id}});
  // formCompleted es para validar que el form este completo
  const [formCompleted, setFormCompleted] = useState(false)

// corresponde al estado local de las props del form
  const [form, setForm] = useState({
    name:"",
    level:"",
    season:"",
    duration:"",
    countryid: []
  })

// manejo de errores
  const [errors, setErrors] = useState({
    name:"",
    level:"",
    season:"",
    duration:"",
    countryid:"",
    formCompleted:""
  })

    const  onDeletee = (country) => { 
      setForm({...form, countryid: form.countryid.filter(c=> c !== country) } )
      console.log(form.countryid)
    }
// selección de multiples paises
  const selectHandler = (e) => {
    if (form.countryid.includes(e.target.value)) return;
    setForm({...form, countryid: [...form.countryid, e.target.value ]} )
  }

  const handleChange = (e) => {
    const property = e.target.name
    const value = e.target.value

    setForm({
      ...form,
      [property]: value
    })

    // validación del formulario

    setErrors(validate({...form , [property]: value}, errors))
    
  }

  
  return (
    <div className={style.container}>

      <div className={style.formContainer}>
        <form className={style.form} onSubmit ={''}>
        {/* name */}
          <div className={style.inputName}>
              <label htmlFor='name' >Name: </label>
              <input 
                type="text" 
                name="name" 
                placeholder='Activity name...'  
                value={form.name}
                onChange={handleChange}
              />
              <span style={{color: 'red'}}>{errors.name}</span>
          </div>
          {/* country */}
          <div className={style.inputCountry}>
              <label htmlFor='countryid'>Countries: </label>
              <select name="countriesForm"  onChange={selectHandler} >
                <option value="countries" disabled = "disabled" >Countries:</option>
                <option value="all" >select country</option>
                    { 
                      countriesNames.map(country => (
                        <option key={country.value} value={country.value}>{country.label}</option>
                    ))
                    
                  }
              </select>
              
          </div>

          <div className={style.selectedContainer}>
          {
            form.countryid.map(country=>{
              return <SelectionMultiple
                  key = {country}
                  country ={country}
                  onDeletee = {onDeletee}
                />
            })
          }
          {!form.countryid.length && <p className={style.errorSelectText}>Select at least one country</p>}
          </div>
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
            
            <span style={{color: 'red'}}>{errors.duration}</span>
          </div>
          {/* level */}
          <div className={style.inputLevel}>
            <label htmlFor='level'>Level: </label>

            <input type="radio" id='1' name='level' value='1' />
            <label htmlFor='1'>1</label>

            <input type="radio" id='2' name='level' value='2'/>
            <label htmlFor='2'>2</label>

            <input type="radio" id='3' name='level' value='3'/>
            <label htmlFor='3'>3</label>

            <input type="radio" id='4' name='level' value='4'/>
            <label htmlFor='4'>4</label>

            <input type="radio" id='5' name='level' value='5'/>
            <label htmlFor='5'>5</label>
            <span style={{color: 'red'}}>{errors.level}</span>
          </div>
          {/* season */}
         
         
            <label>Season: </label>
          <div className={style.seasonContainer}>
            <input type="checkbox" id='summer' name='summer' value='summer'/>
            <label htmlFor='summer'>Summer</label>

            <input type="checkbox" id='winter' name='winter' value='winter'/>
            <label htmlFor='winter'>Winter</label>

            <input type="checkbox" id='spring' name='spring' value='spring'/>
            <label htmlFor='spring'>Spring</label>

            <input type="checkbox" id='fall' name='fall' value='fall'/>
            <label htmlFor='fall'>Fall</label>
            <span style={{color: 'red'}}>{errors.season}</span>
          </div>
     
          {/* submit */}
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