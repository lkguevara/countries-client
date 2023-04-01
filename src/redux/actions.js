import axios from 'axios';

// types
export const GET_COUNTRIES = 'GET_COUNTRIES';
export const IS_LOADING = 'IS_LOADING'
export const FILTER_CONTINENT = 'FILTER_CONTINENT'
export const ORDER_ACTIVITY = 'ORDER_ACTIVITY' 
export const ORDER_COUNTRY = 'ORDER_COUNTRY'
export const ORDER_POPULATION = 'ORDER_POPULATION'

// * Obtener todos los paises
export const getCountries = () => async (dispatch) => {
    dispatch({
        type: IS_LOADING
    })
    try {
        const response = await axios.get('http://localhost:3001/countries')
        dispatch({
            type: GET_COUNTRIES,
            payload: response.data
        });
    } 
    catch (error) {
        throw error
    }
}

// * FILTROS Y ORDENAMIENTO
// * filtrar por continente
export const filterContinent = (payload)  => {
    return {
        type: FILTER_CONTINENT,
        payload
    }
}


// * ordenar pais asc y desc
export const orderCountry = (payload) => {
    return {
        type: ORDER_COUNTRY,
        payload
    }
}

// * ordenar población asc y desc
export const orderPopulation = (payload) => {
    return {
        type: ORDER_POPULATION,
        payload
    }
}
// * filtrar por actividad turistica 
export const orderActivity = (payload) => {
    return  {
        type: ORDER_ACTIVITY,
        payload
    }
}






