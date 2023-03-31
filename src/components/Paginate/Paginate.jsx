import style from './Paginate.module.css'

const Paginate = ({countriesPage, allCountries, paginate }) => {
    // Crear un array vacio para guardar los numeros de las paginas.
    const pageNumber = []

    // Recorrer los paises, donde debe ser menor o igual a la cantidad de paises dividido por la cantidad de paises por pagina. Math.ceil redondea hacia arriba.
    for (let i=1; i<=Math.ceil(allCountries/countriesPage); i++) {
        // Agregamos los numeros de las paginas al array vacio.
        pageNumber.push(i)
    }

  return (
    <nav className= {style.paginate}>
            <ul className= {style.paginate__ul}>
                {
                    pageNumber && 
                    pageNumber.map(number => (
                    // Agregamos un evento onClick para que al hacer click en el número de la página, se cambie el estado de la página actual.
                    <li className= {style.paginate__li} key={number}>
                        <a onClick={() => paginate(number)} >
                            {number}
                        </a>
                    </li>
                    
                ))}
            </ul>
        </nav>
  )
}

export default Paginate