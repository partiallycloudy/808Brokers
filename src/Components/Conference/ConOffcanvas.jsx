import React from "react";
import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import styles from "./Conference.module.css";
import DownArrow from "../../Images/downarrow.png";
import Note from "../../Images/note.png";
import Plus from "../../Images/plus.png";
import { FiMenu } from "react-icons/fi";
import "./Conference.css";
const ConOffcanvas = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button variant="primary" className="canvusBtn d-xl-none" onClick={handleShow}>
        <FiMenu />
      </Button>

      {/* <Alert variant="info" className="d-none d-lg-block">
        Resize your browser to show the responsive offcanvas toggle.
      </Alert> */}

      <Offcanvas show={show} onHide={handleClose} responsive="xl" placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className={styles.rightContainer}>
            <div className={styles.headingMain}>
              <div className={styles.rightHeading}>Bulletin</div>
              <div className={styles.rightHeading2}>Chat</div>
              <div className={styles.rightHeading2}>Participants</div>
            </div>
            <div className={styles.pollHeadingmain}>
              <div className={styles.pollHeading}>Poll</div>
              <img src={DownArrow} alt="" className={styles.pollIcon} />
            </div>
            <div className={styles.pollText}>Pass/Fail</div>
            <div className={styles.perButtonmain}>
              <button className={styles.perbtn}>
                <div className={styles.perText}></div>
                <div className={styles.perText}>Piano</div>
                <div className={styles.perText}>94</div>
              </button>
            </div>
            <div className={styles.perButtonmain2}>
              <button className={styles.perbtn2}>
                <div className={styles.perText}></div>
                <div className={styles.perText}>Drums</div>
                <div className={styles.perText2}>64</div>
              </button>
            </div>
            <div className={styles.perButtonmain2}>
              <button className={styles.perbtn3}>
                <div className={styles.perText}></div>
                <div className={styles.perText}>808</div>
                <div className={styles.perText2}>71</div>
              </button>
            </div>
            <div className={styles.totalText}>32 votes total</div>
            <div className={styles.noteImage}>
              <img src={Note} alt="" className={styles.noteImg} />
            </div>
            <div className={styles.plusImage}>
              <img src={Plus} alt="" className={styles.plusImg} />
            </div>

            <div className={styles.pollHeadingmain}>
              <div className={styles.pollHeading}>Notes</div>
              <img src={DownArrow} alt="" className={styles.pollIcon} />
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default ConOffcanvas;
