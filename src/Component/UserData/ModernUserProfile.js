import React, { Component } from 'react'
import axios from 'axios';
import '../UserData/common.css'
import CallEndIcon from '@material-ui/icons/CallEnd';
import MicIcon from '@material-ui/icons/Mic';
import VideocamIcon from '@material-ui/icons/Videocam';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import ClosedCaptionIcon from '@material-ui/icons/ClosedCaption';
import PresentToAllIcon from '@material-ui/icons/PresentToAll';
import MoreVertIcon from '@material-ui/icons/MoreVert';
 class ModernUserProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    // Promise based HTTP client for the browser and node.js
    // for installation follow this  https://www.npmjs.com/package/axios
    axios.get(`https://randomuser.me/api`)
      .then(res => {
        const data = res.data.results;
        this.setState({ data });
      })
  }
  render() {
    return (
      <React.Fragment>
      <div className="wrapper">
        <p>with axios</p>
        {this.state.data
          .map(user => (
            <div className="Inner-Container"
              key={user.email}

            >
              <div className="user-data-wrapper">
                <img src={user.picture.medium} alt="avator" />
                <p className="fname">{user.name.first}</p>
                <p className="lname">{user.name.last}</p>
              </div>
            </div>
          ))}
      </div>
      <div className="google-meet">
        <div className="Icon-left">
           <p className="Icon_left-heading">Meeting details</p>
           <KeyboardArrowDownIcon />
        </div>
      <div className="Icon-center">
      <div className="icon">
      <MicIcon/>
      </div>
     <div className="icon">
     <CallEndIcon/>
     </div>
      <div className="icon">
         <VideocamIcon/>
      </div>
     

      </div>
      <div className="Icon-right">
           <div className="Icon-right-item">
           <ClosedCaptionIcon />
           <p className="right-icon-description">Turn on captions</p>
           </div>
           <div className="Icon-right-item">
           <PresentToAllIcon/>
           <p className="right-icon-description">Present now</p>
           </div>
           <div className="Icon-right-item">
           
           <MoreVertIcon/>
           </div>
         

        </div>
    </div>
     </React.Fragment>
    )


  }
}
export default ModernUserProfile