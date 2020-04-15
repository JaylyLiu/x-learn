import React, { useState } from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import Avatar from './images/avatar.png';
import America from './images/America.png';
import China from './images/China.png';
import Japan from './images/Japan.png';
import Korea from './images/Korea.png';
import Paris from './images/Paris.png';
import Russia from './images/Russia.png';

import HomepageStyles from './Homepage.module.scss';
const styles = { ...HomepageStyles };

function Navigation() {
  const [selectedItem, setSelectedItem] = useState(0)
  return (
    <ul className={styles.navigation}>
      <li className={
        cx(styles.nav, {
          [styles.selected]: selectedItem === 0,
        })}
        onClick={() => setSelectedItem(0)}
      >Popular</li>
      <li className={
        cx(styles.nav, {
          [styles.selected]: selectedItem === 1,
        })}
        onClick={() => setSelectedItem(1)}
      >Afreca</li>
      <li className={
        cx(styles.nav, {
          [styles.selected]: selectedItem === 2,
        })}
        onClick={() => setSelectedItem(2)}
      >ASIA</li>
      <li className={
        cx(styles.nav, {
          [styles.selected]: selectedItem === 3,
        })}
        onClick={() => setSelectedItem(3)}
      >Eupope</li>
    </ul>
  )
}

function Homepage() {
  return (
    <div className={styles.homepage}>
      <div className={styles.header}>
        <div className={styles.title}>Hi, Jayly !</div>
        <div className={styles.avatar}>
          <img src={Avatar} alt="avatar" />
        </div>
      </div>
      <p className={styles.description}>Where do you want to go today ?</p>
      <Navigation />
      <ul className={styles.images}>
        <li className={styles.li}>
          <Link to="/detail">
            <img src={America} alt="America" />
          </Link>
        </li>
        <li className={styles.li}>
          <Link to="/detail">
            <img src={China} alt="China" />
          </Link>
        </li>
        <li className={styles.li}>
          <Link to="/detail">
            <img src={Japan} alt="Japan" />
          </Link>
        </li>
        <li className={styles.li}>
          <Link to="/detail">
            <img src={Korea} alt="Korea" />
          </Link>
        </li>
        <li className={styles.li}>
          <Link to="/detail">
            <img src={Paris} alt="Paris" />
          </Link>
        </li>
        <li className={styles.li}>
          <Link to="/detail">
            <img src={Russia} alt="Russia" />
          </Link>
        </li>
      </ul>

    </div>
  )
}

export default Homepage
