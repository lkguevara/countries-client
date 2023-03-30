import style from './Home.module.css'
import Search from '../../components/Search/Search'
import Filters from '../../components/Filters/Filters'
const Home = () => {
  return (
    <div className={style.containerHome}>
      <Filters />
      <Search />
    </div>
  )
}

export default Home