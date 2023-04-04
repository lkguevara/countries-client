import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
import {  useSelector } from 'react-redux';
import style from './Create.module.css'
import {SelectionMultiple} from '../../components/SelectionMultiple/SelectionMultiple'

const Create = () => {
  // me trae el estado de countries del store
  const countries =  useSelector(state=>state.countries)
  // me trae el mapeo de los paises para el select
  let countriesNames = countries.map(country=> {return {label: country.name , value: country.id}});
  // formCompleted es para validar que el form este completo
  const [formCompleted, setFormCompleted] = useState(false)

// corresponde a los valores que se van a mostrar en el form
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
  }

  const selectHandler = (event) => {
    if (form.countryid.includes(event.target.value)) return;
    setForm({...form, countryid: [...form.countryid, event.target.value ]} )
  }


  
  return (
    <div className={style.container}>

      <div className={style.formContainer}>
        <form className={style.form}>
        {/* name */}
          <div className={style.inputName}>
              <label htmlFor='name' >Name: </label>
              <input 
                type="text" 
                name="name" 
                placeholder='Activity name...'  
              />
          </div>
          {/* country */}
          <div className={style.inputCountry}>
              <label htmlFor='countryid'>Countries: </label>
              <select name="countriesForm"  onChange={selectHandler} >
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
            form.countryid.map(country=>{
              return <SelectionMultiple
                  key = {country}
                  country ={country}
                  onDeletee = {onDeletee}
                />
            })
          }
          </div>
          {/* duration */}
          <div className={style.inputDuration}>
            <label>Duration: </label>
            <input 
              type="number" 
              name="duration"
            />
            <span> hours</span>
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
          </div>
          {/* season */}
         
          <div className={style.seasonContainer}>
            <label>Season: </label>
              <select name="season" >
                <option >Select</option>
                <option value="Summer">Summer</option>
                <option value="Autumn">Fall</option>
                <option value="Winter">Winter</option>
                <option value="Spring">Spring</option>
              </select>

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