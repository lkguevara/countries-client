import style from './Home.module.css'
import logo from '../../assets/logo.svg'

const Home = () => {
  return (
    <div className={style.container}>
        <img src={logo} alt="earth" width='400px' />
        <h1>Home</h1>
    </div>
  )
}

export default Home