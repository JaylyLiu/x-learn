import React, { useState } from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import Modal from '../../components/Modal';
import Button from '../../components/Button';
import Radio, { RadioGroup } from '../../components/Radio';
import Visa from './images/Visa';
import Paypal from './images/Paypal';
import MasterCard from './images/MasterCard';
import Express from './images/Express';
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
  const [show, setShow] = useState(true);
  const [currentCountry, setCurrentCountry] = useState('');
  const [payMethod, setPayMethod] = useState(0);


  const handleCountryBeClicked = (src) => {
    setShow(true);
    setCurrentCountry(src);
  }

  const handlePayMethodChanged = (index) => {

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
        <li className={styles.li} onClick={handleCountryBeClicked.bind(Homepage, America)}>
          {/* <Link to="/detail"> */}
          <img src={America} alt="America" />
          {/* </Link> */}
        </li>
        <li className={styles.li} onClick={handleCountryBeClicked.bind(Homepage, China)}>
          {/* <Link to="/detail"> */}
          <img src={China} alt="China" />
          {/* </Link> */}
        </li>
        <li className={styles.li} onClick={handleCountryBeClicked.bind(Homepage, Japan)}>
          {/* <Link to="/detail"> */}
          <img src={Japan} alt="Japan" />
          {/* </Link> */}
        </li>
        <li className={styles.li} onClick={handleCountryBeClicked.bind(Homepage, Korea)}>
          {/* <Link to="/detail"> */}
          <img src={Korea} alt="Korea" />
          {/* </Link> */}
        </li>
        <li className={styles.li} onClick={handleCountryBeClicked.bind(Homepage, Paris)}>
          {/* <Link to="/detail"> */}
          <img src={Paris} alt="Paris" />
          {/* </Link> */}
        </li>
        <li className={styles.li} onClick={handleCountryBeClicked.bind(Homepage, Russia)}>
          {/* <Link to="/detail"> */}
          <img src={Russia} alt="Russia" />
          {/* </Link> */}
        </li>
      </ul>
      <Modal show={show} onClose={() => setShow(false)} className={styles.confirmModal}>
        <Modal.Body>
          <div className={styles.title}>Total</div>
          <div className={styles.account}>JPY 1245.20</div>
          <div className={styles.payMethods}>
            <RadioGroup
              name="searchLan"
              className={styles.radioGroup}
              onChange={handlePayMethodChanged}
              defaultValue={payMethod}>
              <Radio iistyle="primary" value="card" key={0}>
                <div className={styles.content}>
                  <span className={styles.text}>Card</span>
                  <div className={styles.visa}>
                    <Visa />
                  </div>
                  <div className={styles.masterCard}>
                    <MasterCard />
                  </div>
                  <div className={styles.express}>
                    <Express />
                  </div>
                </div>
              </Radio>
              <Radio iistyle="primary" value="paypal" key={1}>
                <div className={styles.content}>
                  <span className={styles.text}>Paypal</span>
                  <div className={styles.visa}>
                    <Paypal />
                  </div>
                </div>
              </Radio>
            </RadioGroup>
            {/* <div className={styles."}
              <Radio iistyle="primary" value={language} key={index} />
            </div> */}
          </div>
          <Button
            className={styles.confirmBtn}
            size="big"
            iistyle="main"
            onClick={() => console.log('haha')}>
            <span>Confirm</span>
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default Homepage
