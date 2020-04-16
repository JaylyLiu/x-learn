import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import cx from 'classnames';
import ScheduleStyles from './Schedule.module.scss';
import Button from '../../components/Button';
import BlackArrow from './BlackArrow';
import SelectedIcon from './SelectedIcon';
import Modal from '../../components/Modal';
import Radio, { RadioGroup } from '../../components/Radio';
import Visa from './images/Visa';
import Paypal from './images/Paypal';
import MasterCard from './images/MasterCard';
import Express from './images/Express';


const styles = { ...ScheduleStyles };

function Schedule(props) {
  const [show, setShow] = useState(false);
  const [payMethod, setPayMethod] = useState(-1);
  const [selectedItem, setSelectedItem] = useState(-1);
  let history = useHistory();

  const handleChangeTime = (item) => {
    setSelectedItem(item);
  }

  const submit = () => {
    setShow(true);
  }

  const paySubmit = () => {
    setShow(false);
    console.log(props)
    history.push({ pathname: '/lessonlist' });
  }

  const handlePayMethodChanged = (index) => {
    let pay_index = Number(index.target.value);
    console.log(pay_index)
    setPayMethod(index);
  }

  return (
    <>
      <div className={styles.schedule}>
        <div className={styles.header}>
          <Link to="/detail">
            <BlackArrow />
          </Link>
          <span className={styles.text}>Schedule</span>
          <div className={styles.right} />
        </div>

        <div className={styles.lists}>
          <div
            className={cx(styles.box, {
              [styles.selected]: selectedItem === 0,
            })}
            onClick={handleChangeTime.bind(Schedule, 0)}>
            <div className={styles.left}>
              <div className={styles.time}>2020.4.18 Saturday</div>
              <div className={styles.slot}>8:00PM-11:00PM</div>
            </div>
            {selectedItem === 0 && <SelectedIcon />}
          </div>

          <div
            className={cx(styles.box, {
              [styles.selected]: selectedItem === 1,
            })}
            onClick={handleChangeTime.bind(Schedule, 1)}>
            <div className={styles.left}>
              <div className={styles.time}>2020.4.18 Saturday</div>
              <div className={styles.slot}>8:00PM-11:00PM</div>
            </div>
            {selectedItem === 1 && <SelectedIcon />}
          </div>

          <div
            className={cx(styles.box, {
              [styles.selected]: selectedItem === 2,
            })}
            onClick={handleChangeTime.bind(Schedule, 2)}>
            <div className={styles.left}>
              <div className={styles.time}>2020.4.18 Saturday</div>
              <div className={styles.slot}>8:00PM-11:00PM</div>
            </div>
            {selectedItem === 2 && <SelectedIcon />}
          </div>

          <div
            className={cx(styles.box, {
              [styles.selected]: selectedItem === 3,
            })}
            onClick={handleChangeTime.bind(Schedule, 3)}>
            <div className={styles.left}>
              <div className={styles.time}>2020.4.18 Saturday</div>
              <div className={styles.slot}>8:00PM-11:00PM</div>
            </div>
            {selectedItem === 3 && <SelectedIcon />}
          </div>
        </div>

        <Button
          className={styles.confirmBtn}
          size="big"
          iistyle="main"
          disabled={selectedItem === -1}
          onClick={submit}>
          <span>Confirm</span>
        </Button>
      </div>
      <Modal show={show} onClose={() => setShow(false)} className={styles.confirmModal}>
        <Modal.Body>
          <div className={styles.title}>Total</div>
          <div className={styles.account}>JPY 1245.20</div>
          <div className={styles.payMethods}>
            <RadioGroup
              name="searchLan"
              className={styles.radioGroup}
              onChange={handlePayMethodChanged}
              defaultValue={toString(payMethod)}>
              <Radio iistyle="primary" value="0" key={0}>
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
              <Radio iistyle="primary" value="1" key={1}>
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
            disabled={payMethod === -1}
            onClick={paySubmit}>
            <span>Confirm</span>
          </Button>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Schedule
