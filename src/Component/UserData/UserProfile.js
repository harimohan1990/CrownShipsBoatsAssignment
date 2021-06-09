import React, { Component } from 'react';


export default class UserProfile extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    //with fetch The Fetch API provides a JavaScript interface for accessing 
    //and manipulating parts of the HTTP pipeline, such as requests and responses
    fetch("https://randomuser.me/api")
      .then(response => response.json())
      .then(data => {
        this.setState({
          data: data.results
        });
      });
  }
  render() {
    return (
      <React.Fragment>
      <div className='wrapper' >
        <p>With Fetch </p>
        {this.state.data
          .map(user => (
            <div className="Inner-Container"
              key={user.email}
            >
              <div className="user-data-wrapper">
                <img src={user.picture.medium} alt="" />
                <p className="fname">{user.name.first}</p>
                <p className="lname">{user.name.last}</p>
              </div>
            </div>
          ))}
      </div>
      
      </React.Fragment>
    );
  }
}

