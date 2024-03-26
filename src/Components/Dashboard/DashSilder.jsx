import React from "react";
import Slider from "react-slick";
import Image3 from "../../Images/crdicn.png";
import styles from "./Dashboard.module.css";
import "./DashSlider.css"
import Image4 from "../../Images/graphline.png"


const DashSilder = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
                <div className={styles.iconMain}>
                <img src={Image3} alt="" className={styles.cardIcon} />

                </div>
                <div className={styles.text1}>
                10922 10
                </div>
                <div className={styles.text2}>
                + 5.8%
                </div>
                <div className={styles.graphImage}>
                    <img src={Image4} alt="" className={styles.graphlineImg} />
                </div>
        </div>
        <div>
                <div className={styles.iconMain}>
                <img src={Image3} alt="" className={styles.cardIcon} />

                </div>
                <div className={styles.text1}>
                10922 10
                </div>
                <div className={styles.text2}>
                + 5.8%
                </div>
                <div className={styles.graphImage}>
                    <img src={Image4} alt="" className={styles.graphlineImg} />
                </div>
        </div>
       

      </Slider>
    </div>
  )
}

export default DashSilder
