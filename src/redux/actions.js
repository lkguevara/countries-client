import axios from 'axios';

// types
export const IS_LOADING = 'IS_LOADING'
export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_COUNTRY = 'GET_COUNTRY';
export const GET_ACTIVITIES = 'GET_ACTIVITIES';
export const POST_ACTIVITIES = 'POST_ACTIVITIES';
export const GET_NAME_COUNTRIES = 'GET_NAME_COUNTRIES';
export const FILTER_CONTINENT = 'FILTER_CONTINENT'
export const FILTER_ACTIVITY = 'FILTER_ACTIVITY' 
export const ORDER_COUNTRY = 'ORDER_COUNTRY'
export const ORDER_POPULATION = 'ORDER_POPULATION'

// * Obtener todos los paises
export const getCountries = () => async (dispatch) => {
    dispatch({
        type: IS_LOADING
    })
    try {
        const response = await axios.get('/countries')
        dispatch({
            type: GET_COUNTRIES,
            payload: response.data
        });
    } 
    catch (error) {
        throw error
    }
}

axios.get('/countries')
.then(response => { 
    return {
        type: GET_COUNTRIES, 
        payload: response.data
    } 
    
})
.catch()




// * Obtener todas las actividades
export const getActivities = () => async (dispatch) => {
    try {
        const response = await axios.get('/activities')
        dispatch({
            type: GET_ACTIVITIES,
            payload: response.data
        });
    }
    catch (error) {
        throw error
    }
}

// * Crear actividad
export const postActivity = (payload) => async (dispatch) => {
    try {
      const response = await axios.post('/activities', payload); // en esta ruta se hace el post del payload
    //   dispatch({
    //     type: POST_ACTIVITIES,
    //     payload: response.data,
    //   });
        console.log(response)
        return response

    } catch (error) {
        console.log(error.response.data);
        return error.message;
    }
};

// * Obtener un pais por nombre
export const getNameCountries = (name) => async (dispatch) => {
    dispatch({
        type: IS_LOADING
    })
    try {
        const response = await axios.get(`/countries?name=${name}`)
        dispatch({
            type: GET_NAME_COUNTRIES,
            payload: response.data
        });
    }
    catch (error) {
        throw error
    }
}

// * Obtener un pais por id
export const getCountry = (id) => async (dispatch) => {
    dispatch({
        type: IS_LOADING
    })
    try {
      const response = await axios.get(
        `/countries/${id}`
      )
        dispatch({
            type: GET_COUNTRY,
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
export const filterActivity = (payload) => {
    return  {
        type: FILTER_ACTIVITY,
        payload
    }
}






