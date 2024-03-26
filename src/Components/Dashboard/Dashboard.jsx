import React from 'react'
import styles from "./Dashboard.module.css"
import SideBar from '../SideBar/SideBar';
import Image2 from "../../Images/card1.png"
import Image3 from "../../Images/crdicn.png"
import Dashtable from './Dashtable';
import Image1 from "../../Images/btnimg.png"
import Image4 from "../../Images/graphline.png"
import ThIcon from "../../Images/thicn1.png"
import ThIcon2 from "../../Images/thicn2.png"
import ThIcon3 from "../../Images/thicn3.png"
import DashSilder from './DashSilder';
import { Link } from 'react-router-dom';
import ThreadsSlider from './ThreadsSlider';
const Dashboard = () => {
  return (
    <div className={styles.dashMain}>
        <SideBar/>

        <div className={styles.dashContainer}>
            <div className={styles.leftSectionMain}>
                <div className={styles.buttonImageMain}>
                    <img src={Image1} alt="" className={styles.btnImg} />
                    <div className={styles.button}>
                        <button className={styles.imgBtn}>
                        DISCOVER
                        </button>
                    </div>
                </div>

                <div className={styles.tableMain}>
                    <Dashtable/>
                </div>
            </div>
            <div className={styles.rightSectionMain}>
        <div className={styles.cardMain}>
        <div className={styles.card1Main}>

            <Link to="/conference">
                <img src={Image2} alt="" className={styles.card1Img} />
            </Link>
            </div>
           

            <div className={styles.card2Main}>
<DashSilder/>
                {/* <div className={styles.iconMain}>
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
                </div> */}
            </div>
        </div>
        <div className={styles.threadsMain}>
            <ThreadsSlider/>
            {/* <div className={styles.threadHeading}>
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
            <div className={styles.thLine}></div> */}
        </div>
            </div>
        </div>
      
    </div>
  )
}

export default Dashboard
