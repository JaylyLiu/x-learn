import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import LessonDetailStyles from './LessonDetail.module.scss';
import "./Ld.scss";
// import Korea from '../Homepage/images/ko.png';
// import Paris from '../Homepage/images/pa.png';
// import Russia from '../Homepage/images/ru.png';
import cook from "./Imgs/cook.mp4";
import WechatIMG43 from "./Imgs/WechatIMG43.png";

const styles = {...LessonDetailStyles};

function LessonDetail() {
  
  return (
    <div className={styles.lessonDetail}>
      LessonDetail
      
<Carousel
 addArrowClickHandler
>  
<div className={styles.imgbox}>
  <img className={styles.img} src={WechatIMG43} alt="cook"/>
  </div> 
 
      <video controls 
        // autoPlay 
      controlsList="nodownload" className={styles.video} >
      <source src={cook} type="video/mp4" />
        </video>
    </Carousel>
    <div className={styles.contents}>
      <header>Crafting</header>
      <h1>Let’s build a guitar ourselves!!! </h1>
     </div>
    </div>
  )
}

export default LessonDetail
