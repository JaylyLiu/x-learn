import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import cx from 'classnames';
import dsbridge from 'dsbridge';
import Avatar from './images/avatar.png';
import America from './images/us.png';
import China from './images/cn.png';
import Japan from './images/ja.png';
import Korea from './images/ko.png';
import Paris from './images/pa.png';
import Russia from './images/ru.png';

import HomepageStyles from './Homepage.module.scss';
const styles = { ...HomepageStyles };

function Navigation() {
  
  const [selectedItem, setSelectedItem] = useState(0);

<<<<<<< HEAD
  const openListPage = () => {
     dsbridge.call('openCountryList');
  }

=======
>>>>>>> f5eb68a02c3de5c1f81c5b3fb373fd8f7202a56e
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
  let History=useHistory();
  const [show, setShow] = useState(false);
  // const [currentCountry, setCurrentCountry] = useState('');
  // const [payMethod, setPayMethod] = useState(0);

  const openListPage = () => {
    dsbridge.call('openCountryList');
    console.log('openCountryList');
  }

<<<<<<< HEAD
  const handleCountryBeClicked = (src,country) => {
    // setShow(true);
    // setCurrentCountry(src);
    console.log("this.proos",src);
   
    // eslint-disable-next-line no-undef
    
    // eslint-disable-next-line no-undef
    History.push({ pathname: `detail/${src}`});
=======
  const handleCountryBeClicked = (src) => {
    setShow(true);
    openListPage();
    // setCurrentCountry(src);
>>>>>>> f5eb68a02c3de5c1f81c5b3fb373fd8f7202a56e
  }

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
        <li className={styles.li} onClick={handleCountryBeClicked.bind(Homepage, "America")}>
          {/* <Link to="/detail"> */}
          <img src={America} alt="America" />
          {/* </Link> */}
        </li>
        <li className={styles.li} onClick={handleCountryBeClicked.bind(Homepage, "China")}>
          {/* <Link to="/detail"> */}
          <img src={China} alt="China" />
          {/* </Link> */}
        </li>
        <li className={styles.li} onClick={handleCountryBeClicked.bind(Homepage, "Japan")}>
          {/* <Link to="/detail"> */}
          <img src={Japan} alt="Japan" />
          {/* </Link> */}
        </li>
        <li className={styles.li} onClick={handleCountryBeClicked.bind(Homepage, "Korea")}>
          {/* <Link to="/detail"> */}
          <img src={Korea} alt="Korea" />
          {/* </Link> */}
        </li>
        <li className={styles.li} onClick={handleCountryBeClicked.bind(Homepage, "Paris")}>
          {/* <Link to="/detail"> */}
          <img src={Paris} alt="Paris" />
          {/* </Link> */}
        </li>
        <li className={styles.li} onClick={handleCountryBeClicked.bind(Homepage, "Russia")}>
          {/* <Link to="/detail"> */}
          <img src={Russia} alt="Russia" />
          {/* </Link> */}
        </li>
      </ul>
    </div>
  )
}

export default Homepage;
