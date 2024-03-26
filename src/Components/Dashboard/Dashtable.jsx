import React from 'react'
import "./Dashtable.css"
import Table from 'react-bootstrap/Table';
import Image from "../../Images/tblheadicon.png";
import Image2 from "../../Images/folder.png";
import Image3 from "../../Images/star.png";
const Dashtable = () => {
  return (
    <div>
        <Table responsive>
        {/* <div className="tablemainhead"> */}

      <thead>
        <tr className='tablemainhead'>
            <th>File Name</th>
            <th>Modified</th>
            <th>Who can edit</th>
            <th><img src={Image} alt="" className="tableheadIcon" /></th>
        </tr>
      
      </thead>
      {/* </div> */}

      {/* <div className="tableline"></div> */}

      <tbody>

        <tr>
            <td>
              <div className="mainfolder">
                <div className="foldertext">
                <img src={Image2} alt="" className="fileIcon" />
              Project 1
                </div>
                <div className="folderstar">
                <img src={Image3} alt="" className="starIcon" />
                </div>
           

              </div>
             </td>
            <td className="datediv">12/02/24 09:23pm</td>
            <td className="textdiv">Only you</td>
            <td></td>
        
        </tr>
        <tr>
            <td>
              <div className="mainfolder">
                <div className="foldertext">
                <img src={Image2} alt="" className="fileIcon" />
                Shared Folder
                </div>
                <div className="folderstar">
                <img src={Image3} alt="" className="starIcon" />
                </div>
           

              </div>
             </td>
            <td>12/02/24 09:23pm</td>
            <td>Only you</td>
            <td></td>
        
        </tr>
        <tr>
            <td>
              <div className="mainfolder">
                <div className="foldertext">
                <img src={Image2} alt="" className="fileIcon" />
                Movies
                </div>
                <div className="folderstar">
                <img src={Image3} alt="" className="starIcon" />
                </div>
           

              </div>
             </td>
            <td>12/02/24 09:23pm</td>
            <td>Shared</td>
            <td></td>
        
        </tr>
        <tr>
            <td>
              <div className="mainfolder">
                <div className="foldertext">
                <img src={Image2} alt="" className="fileIcon" />
                Music
                </div>
                <div className="folderstar">
                <img src={Image3} alt="" className="starIcon" />
                </div>
           

              </div>
             </td>
            <td>12/02/24 09:23pm</td>
            <td>Shared</td>
            <td></td>
        
        </tr>
        <tr>
            <td>
              <div className="mainfolder">
                <div className="foldertext">
                <img src={Image2} alt="" className="fileIcon" />
                Logic Pro
                </div>
                <div className="folderstar">
                <img src={Image3} alt="" className="starIcon" />
                </div>
           

              </div>
             </td>
            <td>12/02/24 09:23pm</td>
            <td>Shared</td>
            <td></td>
        
        </tr>
        <tr>
            <td>
              <div className="mainfolder">
                <div className="foldertext">
                <img src={Image2} alt="" className="fileIcon" />
                Fruity Loops
                </div>
                <div className="folderstar">
                <img src={Image3} alt="" className="starIcon" />
                </div>
           

              </div>
             </td>
            <td>12/02/24 09:23pm</td>
            <td>Shared</td>
            <td></td>
        
        </tr>
        <tr>
            <td>
              <div className="mainfolder">
                <div className="foldertext">
                <img src={Image2} alt="" className="fileIcon" />
                NFL
                </div>
                <div className="folderstar">
                <img src={Image3} alt="" className="starIcon" />
                </div>
           

              </div>
             </td>
            <td>12/02/24 09:23pm</td>
            <td>Shared</td>
            <td></td>
        
        </tr>
        <tr>
            <td>
              <div className="mainfolder">
                <div className="foldertext">
                <img src={Image2} alt="" className="fileIcon" />
                NBA
                </div>
                <div className="folderstar">
                <img src={Image3} alt="" className="starIcon" />
                </div>
           

              </div>
             </td>
            <td>12/02/24 09:23pm</td>
            <td>Shared</td>
            <td></td>
        
        </tr>
        <tr>
            <td>
              <div className="mainfolder">
                <div className="foldertext">
                <img src={Image2} alt="" className="fileIcon" />
                Baseball
                </div>
                <div className="folderstar">
                <img src={Image3} alt="" className="starIcon" />
                </div>
           

              </div>
             </td>
            <td>12/02/24 09:23pm</td>
            <td>Shared</td>
            <td></td>
        
        </tr>
        <tr>
            <td>
              <div className="mainfolder">
                <div className="foldertext">
                <img src={Image2} alt="" className="fileIcon" />
                College Notes
                </div>
                <div className="folderstar">
                <img src={Image3} alt="" className="starIcon" />
                </div>
           

              </div>
             </td>
            <td>12/02/24 09:23pm</td>
            <td>Shared</td>
            <td></td>
        
        </tr>
        <tr>
            <td>
              <div className="mainfolder">
                <div className="foldertext">
                <img src={Image2} alt="" className="fileIcon" />
                Tutorials
                </div>
                <div className="folderstar">
                <img src={Image3} alt="" className="starIcon" />
                </div>
           

              </div>
             </td>
            <td>12/02/24 09:23pm</td>
            <td>Shared</td>
            <td></td>
        
        </tr>
        <tr>
            <td>
              <div className="mainfolder">
                <div className="foldertext">
                <img src={Image2} alt="" className="fileIcon" />
                TikTok
                </div>
                <div className="folderstar">
                <img src={Image3} alt="" className="starIcon" />
                </div>
           

              </div>
             </td>
            <td>12/02/24 09:23pm</td>
            <td>Shared</td>
            <td></td>
        
        </tr>
        <tr>
            <td>
              <div className="mainfolder">
                <div className="foldertext">
                <img src={Image2} alt="" className="fileIcon" />
                Instagram
                </div>
                <div className="folderstar">
                <img src={Image3} alt="" className="starIcon" />
                </div>
           

              </div>
             </td>
            <td>12/02/24 09:23pm</td>
            <td>Shared</td>
            <td></td>
        
        </tr>
        <tr>
            <td>
              <div className="mainfolder">
                <div className="foldertext">
                <img src={Image2} alt="" className="fileIcon" />
                Snapchat
                </div>
                <div className="folderstar">
                <img src={Image3} alt="" className="starIcon" />
                </div>
           

              </div>
             </td>
            <td>12/02/24 09:23pm</td>
            <td>Shared</td>
            <td></td>
        
        </tr>
       
      </tbody>
    </Table>
    </div>
  )
}

export default Dashtable
