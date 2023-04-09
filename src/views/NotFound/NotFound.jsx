import React from 'react';
import styles from './NotFound.module.css';
import notFound from '../../assets/404.jpg';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (

    <div className={styles.container}>
      <img src={notFound} alt="" />
      <h1 className={styles.title}>404</h1>
      <p className={styles.text}>Oops... page not found.</p>
      <Link className={styles.linkDetail} to="/home">
          <button className={styles.buttonDetail}>Return to Home</button>
      </Link>
    </div>

  );
};

export default NotFound;
