import React, { useState } from 'react';
import Carousel from '@brainhubeu/react-carousel';
import { useHistory } from 'react-router-dom'
import dsbridge from 'dsbridge';
import '@brainhubeu/react-carousel/lib/style.css';
import LessonDetailStyles from './LessonDetail.module.scss';
import "./Ld.scss";
// import Korea from '../Homepage/images/ko.png';
// import Paris from '../Homepage/images/pa.png';
// import Russia from '../Homepage/images/ru.png';
import cook from "./Imgs/cook.mp4";
import star from "./Imgs/star.svg";
import four from "./Imgs/four.png";
import Frame918 from "./Imgs/Frame918.png";
import WechatIMG43 from "./Imgs/WechatIMG43.png";
import foodIcon from "./Imgs/food.png";
import guitar from "./Imgs/guitar.png";
import Review from "./Imgs/review.png";
import WhiteArrow from './Imgs/WhiteArrow';
import WhiteHeard from './Imgs/WhiteHeard';
import WhiteShare from './Imgs/WhiteShare';
import Details from "./Details.json";


const styles = { ...LessonDetailStyles };

function LessonDetail(props) {
  let history = useHistory();
  const [isFood, useSetFood] = useState(history.location.pathname.indexOf("food") !== -1 ? true : false);

  const closeSelf = () => {
    dsbridge.call('closeSelf');
    console.log('closeSelf');
  }
  return (
    <div className={styles.lessonDetail}>
      <div className={styles.headerBox}>
        <span className={styles.left} onClick={closeSelf}>
          <WhiteArrow />
        </span>
        <span className={styles.right}>
          <span className={styles.heart}><WhiteHeard /></span>
          <span className={styles.share}><WhiteShare /></span>
        </span>
      </div>
      <Carousel addArrowClickHandler>
        <div className={styles.imgbox}>
          <img className={styles.img} src={WechatIMG43} alt="cook" />
        </div>

        <video controls
          // autoPlay 
          controlsList="nodownload" className={styles.video} >
          <source src={cook} type="video/mp4" />
        </video>
      </Carousel>
      <div className={styles.contents}>
        <header className={styles.header}>Crafting
          <img src={star} alt="star" className={styles.starimg} />
          <img src={four} alt="four" />
        </header>
        <h1>
          {!!isFood && Details[0].title}
          {!isFood && Details[1].title}
        </h1>
        <div>
          <img src={Frame918} alt="china" />
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
        <section >
          <div  style={{display:"flex",marginBottom:"6px"}}>
           <div  className={styles.subintroTitle} style={{width:"70px"}}> Language</div> 
           <div className={styles.subintroTitle} 
           style={{marginLeft:"69px"}}> TIME</div>
          </div>
         
          <div  style={{display:"flex",marginBottom:"17px"}}>
            <div className={styles.contentii} style={{marginLeft:"8px",width:"70px"}}> English</div>
            <div  className={styles.contentii} style={{marginLeft:"89px"}}> 8:00PM Every Sat</div>
            </div>
          
        </section>
        <section >
         <div style={{display:"flex" , marginBottom:"6px" }}>
           <div className={styles.subintroTitle} style={{width:"70px"}}>Group size</div>
           <div className={styles.subintroTitle} style={{marginLeft:"89px"}}> Duration</div>
         </div>
          <div style={{display:"flex"   }}>
           <div className={styles.contentii}style={{marginLeft:"8px",width:"70px"}}>1-4 </div>
           <div  className={styles.contentii} style={{marginLeft:"89px"}} > 30 minutes</div>
          </div>

        </section>
      </div>
        
      </div>
     
      
      <div className={styles.experience}>
        <h4 className={styles.title}>You will experience:</h4>
        <p className={styles.descption}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit
        </p>
      </div>
      <div className={styles.reviews}>
        <h4 className={styles.title}>Reviews:</h4>
        <p className={styles.content}>
         <img src={Review} alt="review" />
        </p>
      </div>

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
