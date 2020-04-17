import React, {useEffect} from 'react';
import dsbridge from 'dsbridge';
import Lesson1 from './Lesson1.png';
import Lesson2 from './Lesson2.png';
import LessonStyles from './LessonList.module.scss';
const styles = { ...LessonStyles };

function LessonList() {
  useEffect(() => {
    initialFun();
  }, [])
  
  const initialFun = () => {
    dsbridge.call('hideBottomBar');
    console.log('hideBottomBar');
  }
  return (
    <div className={styles.lessonList}>
      {initialFun()}
      <div className={styles.header}>
        <div className={styles.text1}>Upcoming</div>
        <div className={styles.text2}>Completed</div>
      </div>
      <div className={styles.images}>
        <img src={Lesson1} alt="Lesson1" />
        <img src={Lesson2} alt="Lesson2" />
      </div>
    </div>
  )
}

export default LessonList
