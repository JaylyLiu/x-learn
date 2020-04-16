import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import ScheduleStyles from './Schedule.module.scss';
import Button from '../../components/Button';
import BlackArrow from './BlackArrow';
import SelectedIcon from './SelectedIcon';
const styles = { ...ScheduleStyles };
function Schedule() {

  const [selectedItem, setSelectedItem] = useState(0);

  const handleChangeTime = (item) => {
    setSelectedItem(item);
  }

  const submit = () => {

  }

  return (
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
        onClick={submit}>
        <span>Confirm</span>
      </Button>
    </div>
  )
}

export default Schedule
