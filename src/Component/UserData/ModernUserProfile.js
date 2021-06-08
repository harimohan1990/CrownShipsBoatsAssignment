import React, { Component } from 'react'
import axios from 'axios';
import '../UserData/common.css'
export default class ModernUserProfile extends Component {
    constructor(props){
        super(props)

        this.state={
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
      )
            
        
    }
}
