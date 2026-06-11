import {Link} from "react-router-dom"
import React, { Component } from "react";
import "../App.css";

class Homepage extends React.Component {

render() {
    return(
        <div>

            <h1>Home Page</h1>
        <Link to={"/form"}>
        <button type="button">FormPage</button>
        </Link>

        <Link to={"/table"}>
          <button type="button">View</button>
          </Link>

        </div>
    )
}
    
}

export default Homepage