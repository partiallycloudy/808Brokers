import React from 'react'
import Slider from "react-slick";
import styles from "./Dashboard.module.css";
import "./DashSlider.css"
import ThIcon from "../../Images/thicn1.png"
import ThIcon2 from "../../Images/thicn2.png"
import ThIcon3 from "../../Images/thicn3.png"
const ThreadsSlider = () => {
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
        <div className={styles.threadHeading}>
            Threads
            </div>
            <div className={styles.threadsCardMain}>
                <div className={styles.threadsIcon}>
                    <img src={ThIcon} alt="" className={styles.thIcn} />
                </div>
                <div className={styles.ThTextMain}>
                    <div className={styles.ThHeading}>
                    Problem Solver
                    </div>
                    <div className={styles.thheading2Main}>
                        <div className={styles.thHeading2}>
                        Producer
                        </div>
                        <div className={styles.thHeading2}>
                        16 hr ago
                        </div>
                    </div>
                    <div className={styles.thText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat erat sit amet purus lacinia facilisis. Suspendisse eget molestie ligula. Vestibulum vehicula hendrerit velit,
                    </div>
                </div>
            </div>
            <div className={styles.thLine}></div>
            <div className={styles.threadsCardMain}>
                <div className={styles.threadsIcon}>
                    <img src={ThIcon2} alt="" className={styles.thIcn} />
                </div>
                <div className={styles.ThTextMain}>
                    <div className={styles.ThHeading}>
                    Block Party
                    </div>
                    <div className={styles.thheading2Main}>
                        <div className={styles.thHeading2}>
                        Engineer
                        </div>
                        <div className={styles.thHeading2}>
                        1 day ago
                        </div>
                    </div>
                    <div className={styles.thText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat erat sit amet purus lacinia facilisis. Suspendisse eget molestie ligula. Vestibulum vehicula hendrerit velit,
                    </div>
                </div>
            </div>
            <div className={styles.thLine}></div>
            <div className={styles.threadsCardMain}>
                <div className={styles.threadsIcon}>
                    <img src={ThIcon3} alt="" className={styles.thIcn} />
                </div>
                <div className={styles.ThTextMain}>
                    <div className={styles.ThHeading}>
                    Lil Hash
                    </div>
                    <div className={styles.thheading2Main}>
                        <div className={styles.thHeading2}>
                        Manager
                        </div>
                        <div className={styles.thHeading2}>
                        1 day ago
                        </div>
                    </div>
                    <div className={styles.thText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat erat sit amet purus lacinia facilisis. Suspendisse eget molestie ligula. Vestibulum vehicula hendrerit velit,
                    </div>
                </div>
            </div>
            <div className={styles.thLine}></div> 
        </div>
        <div>
        <div className={styles.threadsCardMain}>
                <div className={styles.threadsIcon}>
                    <img src={ThIcon2} alt="" className={styles.thIcn} />
                </div>
                <div className={styles.ThTextMain}>
                    <div className={styles.ThHeading}>
                    Block Party
                    </div>
                    <div className={styles.thheading2Main}>
                        <div className={styles.thHeading2}>
                        Engineer
                        </div>
                        <div className={styles.thHeading2}>
                        1 day ago
                        </div>
                    </div>
                    <div className={styles.thText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat erat sit amet purus lacinia facilisis. Suspendisse eget molestie ligula. Vestibulum vehicula hendrerit velit,
                    </div>
                </div>
            </div>
            <div className={styles.thLine}></div>
            <div className={styles.threadsCardMain}>
                <div className={styles.threadsIcon}>
                    <img src={ThIcon3} alt="" className={styles.thIcn} />
                </div>
                <div className={styles.ThTextMain}>
                    <div className={styles.ThHeading}>
                    Lil Hash
                    </div>
                    <div className={styles.thheading2Main}>
                        <div className={styles.thHeading2}>
                        Manager
                        </div>
                        <div className={styles.thHeading2}>
                        1 day ago
                        </div>
                    </div>
                    <div className={styles.thText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat erat sit amet purus lacinia facilisis. Suspendisse eget molestie ligula. Vestibulum vehicula hendrerit velit,
                    </div>
                </div>
            </div>
            <div className={styles.thLine}></div>  
        </div>
       

      </Slider>
    </div>
  )
}

export default ThreadsSlider
