import React from "react";
import styles from "./Conference.module.css";
import SideBar from "../SideBar/SideBar";
import Image from "../../Images/conficon.png";
import Image2 from "../../Images/inviteIcon.png";
import Image3 from "../../Images/Img1.png";
import Image4 from "../../Images/Img2.png";
import Image5 from "../../Images/Img3.png";
import Image6 from "../../Images/Img4.png";
import CallBtn1 from "../../Images/sound.png";
import CallBtn2 from "../../Images/microphone.png";
import CallBtn3 from "../../Images/callend.png";
import CallBtn4 from "../../Images/video.png";
import CallBtn5 from "../../Images/setting.png";
import Bucket from "../../Images/bucket.png";
import DownArrow from "../../Images/downarrow.png";
import ConOffcanvas from "./ConOffcanvas";
import { Link } from "react-router-dom";
const Conference = () => {
  return (
    <div className={styles.conferenceMain}>
      <SideBar />
      <div className={styles.conferenceContainerMain}>
        <div className={styles.conferenceContainer}>
          <div className={styles.leftSideMain}>
            <div className={styles.HeadingMain}>
              <div className={styles.headingImageMain}>
                <Link to="/dashboard">
                <img src={Image} alt="" className={styles.iconImg} />
                
                </Link>
              </div>
              <div className={styles.headingText}>PayPhone</div>
              <div className={styles.headingButton}>
                <button className={styles.headingbtn}>Group</button>
              </div>
            </div>
            <div className={styles.inviteMain}>
              <div className={styles.invitebtnText}>
                <div className={styles.inviteButton}>
                  <button className={styles.inviteBtn}>
                    <img src={Image2} alt="" className={styles.inviteIcon} />
                    12
                  </button>
                  <div className={styles.inviteText}>Invite</div>
                </div>
                <div className={styles.inviteTime}>12:33</div>
              </div>
            </div>
            <div className={styles.videoMain}>
              <div className={styles.videoCallMain}>
                <img src={Image3} alt="" className={styles.img1} />
                <img src={Image4} alt="" className={styles.img1} />
              </div>
              <div className={styles.videoCallMain}>
                <img src={Image5} alt="" className={styles.img1} />
                <img src={Image6} alt="" className={styles.img1} />
              </div>
            </div>

            <div className={styles.callButtons}>
              <button className={styles.callBtn1}>
                {" "}
                <img src={CallBtn1} alt="" className={styles.callIcon1} />
              </button>
              <button className={styles.callBtn1}>
                {" "}
                <img src={CallBtn2} alt="" className={styles.callIcon2} />
              </button>
              <button className={styles.callBtn2}>
                {" "}
                <img src={CallBtn3} alt="" className={styles.callIcon3} />
              </button>
              <button className={styles.callBtn1}>
                {" "}
                <img src={CallBtn4} alt="" className={styles.callIcon4} />
              </button>
              <button className={styles.callBtn1}>
                {" "}
                <img src={CallBtn5} alt="" className={styles.callIcon5} />
              </button>
            </div>
            <div className={styles.bucketMain}>
              <img src={Bucket} alt="" className={styles.bucketImg} />
            </div>
          </div>
        </div>

        <div className={styles.rightSideMain}>
          <ConOffcanvas />
        </div>
      </div>
    </div>
  );
};

export default Conference;
