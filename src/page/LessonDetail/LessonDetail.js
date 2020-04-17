import React from 'react';
import { useHistory } from 'react-router-dom';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import LessonDetailStyles from './LessonDetail.module.scss';
// import Korea from '../Homepage/images/ko.png';
// import Paris from '../Homepage/images/pa.png';
// import Russia from '../Homepage/images/ru.png';
import hh from "./Imgs/hh.mp4";
import ww from "./Imgs/ww.mp4";
import uu from "./Imgs/uu.mp4";
const styles = { ...LessonDetailStyles };

function LessonDetail() {
  let history = useHistory();

  return (
    <div className={styles.lessonDetail}>
      <Carousel
        addArrowClickHandler
      >
        <video controls autoPlay controlsList="nodownload" className={styles.video} >
          <source src={hh} type="video/mp4" />
        </video>
        <video controls autoPlay controlsList="nodownload" className={styles.video}>
          <source src={ww} type="video/mp4" />
        </video>
        <video controls autoPlay controlsList="nodownload" className={styles.video}>
          <source src={uu} type="video/mp4" />
        </video>
      </Carousel>

      <div className={styles.footer}>
        <div className={styles.box}>
          <div className={styles.left} onClick={() => history.push({ pathname: '/schedule' })}>
            <span className={styles.top}>CNY 180</span>
            <span className={styles.bottom}>GROUP</span>
          </div>
          <div className={styles.right} onClick={() => history.push({ pathname: '/schedule' })}>
            <span className={styles.top}>CNY 200</span>
            <span className={styles.bottom}>PRIVATE</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LessonDetail
