<<<<<<< HEAD
import React ,{ useState } from 'react';
import Carousel from '@brainhubeu/react-carousel';
import { useHistory } from 'react-router-dom'
=======
import React from 'react';
import { useHistory } from 'react-router-dom';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
>>>>>>> f5eb68a02c3de5c1f81c5b3fb373fd8f7202a56e
import '@brainhubeu/react-carousel/lib/style.css';
import LessonDetailStyles from './LessonDetail.module.scss';
import "./Ld.scss";
// import Korea from '../Homepage/images/ko.png';
// import Paris from '../Homepage/images/pa.png';
// import Russia from '../Homepage/images/ru.png';
<<<<<<< HEAD
import cook from "./Imgs/cook.mp4";
import star from "./Imgs/star.svg";
import four from "./Imgs/four.png";
import Frame918 from "./Imgs/Frame918.png";
import WechatIMG43 from "./Imgs/WechatIMG43.png";
import foodIcon from "./Imgs/food.png";
import guitar from "./Imgs/guitar.png";
import Details from "./Details.json";

const styles = {...LessonDetailStyles};

function LessonDetail(props) {
  let  History=useHistory();
  const [isFood,useSetFood]=useState(History.location.pathname.indexOf("food")!==-1?true:false);
  return (
    <div className={styles.lessonDetail}>
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
      <header className={styles.header}>Crafting
      <img  src={star} alt="star" className={styles.starimg}/>
      <img  src={four} alt="four"/>
      </header>
      <h1>
        {!!isFood&&Details[0].title}
        {!isFood&&Details[1].title}
      </h1>
      <div>
        <img src={Frame918} alt="china"/>
      </div>
      {!!isFood&&<div className={styles.flexbox}>
        <img src={foodIcon} alt="china" width="48"/>
        Jackson Willian
      </div>}
      {!isFood&&<div className={styles.flexbox}>
        <img src={guitar} alt="china" width="48"/>
        Lina Manson
      </div>}
      <div className={styles.introbox}>
        <section className={styles.subintrobox}>
          <div className={styles.subintroTitle}>Language</div>
          <div className={styles.subintroTitle}>TIME</div>
        </section>
        <section className={styles.subintrobox}>
         <div  className={styles.subintroTitle}>Group size</div>
          <div className={styles.subintroTitle}>Duration</div>
        </section>
      </div>
     </div>
=======
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
>>>>>>> f5eb68a02c3de5c1f81c5b3fb373fd8f7202a56e
    </div>
  )
}

export default LessonDetail
