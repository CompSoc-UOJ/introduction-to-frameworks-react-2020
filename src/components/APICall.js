import React, { Component } from 'react';

class APICall extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount(){

    fetch('https://jsonplaceholder.typicode.com/users',
    //process.env.REACT_APP_BASE_URL + "users", Here we can use constant BASE URL
    //                                          for API URLs (define in .env file)
    )
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })
      })
  }
  render() {

    var { isLoaded, items } = this.state;

    if(!isLoaded) {
      return <div>Loading....</div>;
    }
    else {
      return (
        <div className="App">      
            <h1 align="center" style={{color : "Red"}} >Details</h1>
            <ul>
              {items.map (item => (
                <li key = {item.id}>
                  Name : {item.name} | Email : {item.email}
                </li>
              ))};
            </ul>
        </div>
      );
    }
  }
  
}

export default APICall;
