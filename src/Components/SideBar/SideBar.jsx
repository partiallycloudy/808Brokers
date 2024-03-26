import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Offcanvas from 'react-bootstrap/Offcanvas';
import styles from "./SideBar.module.css";
import Image1 from "../../Images/homeicon.png";
import Image2 from "../../Images/cardicon.png";
import { Link } from 'react-router-dom';
// import { FiMenu } from "react-icons/fi";
const SideBar = () => {
    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
  return (
    <div className={styles.sidebarMain}>
        {/* <div>
      <Button variant="primary" onClick={handleShow}>
      <FiMenu  size={27}  className={styles.icon}/>
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </div> */}

        <div className={styles.sidebarContiner}>
            <div className={styles.homeIconMain}>
              <Link to="/dashboard">
              <img src={Image1} alt="" className={styles.homeImg} />
              
              </Link>

            </div>
            <div className={styles.cardIconMain}>
                <img src={Image2} alt="" className={styles.cardImg} />

            </div>
        </div>
      
    </div>
  )
}

export default SideBar
