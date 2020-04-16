import React from 'react';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import LessonDetailStyles from './LessonDetail.module.scss';
// import Korea from '../Homepage/images/ko.png';
// import Paris from '../Homepage/images/pa.png';
// import Russia from '../Homepage/images/ru.png';
import hh from "./Imgs/hh.mp4";
import ww from "./Imgs/ww.mp4";
import uu from "./Imgs/uu.mp4";
const styles = {...LessonDetailStyles};

function LessonDetail() {
  
  return (
    <div className={styles.lessonDetail}>
      LessonDetail
      
<Carousel
 
  
  addArrowClickHandler
>
      <video controls autoPlay controlsList="nodownload" className={styles.video} >
         <source src={hh} type="video/mp4" />
        </video>
      <video controls autoPlay controlsList="nodownload"  className={styles.video}>
        <source src={ww} type="video/mp4" />
      </video>
      <video controls autoPlay controlsList="nodownload"  className={styles.video}>
        <source src={uu} type="video/mp4" />
      </video>

</Carousel>
    </div>
  )
}

export default LessonDetail
