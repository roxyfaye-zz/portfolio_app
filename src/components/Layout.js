import React, {Component} from 'react';

import { NavLink } from 'react-router-dom';



export default class BaseLayout extends Component {
  render(){
  
    let titleStyle = {
      "fontFamily": 'Syncopate',
      "fontSize": "15rem"
    }
    let subtitleStyle = {
      "fontFamily": 'Cinzel',
      "fontSize": "4rem"
    }
    let headerStyle = {
      "textAlign": "center",
      "height": "500px",
      "color": "#3A2111",
      "backgroundImage": "url(images/orchid.jpg)",
      "backgroundSize": "cover",
      "backgroundPosition": "center",
      "boxShadow":"rgba(0, 0, 0, 0.22) -2px 9px 5px 0px",
      "textShadow": "1px 1px 2px black",
      "fontFamily": "BioRhyme+Expanded",
}
    let navTitle = {
      "fontFamily": "Syncopate",
      "fontSize": "180%"
    }
    return (
      <div className="container-fluid nav">
        <nav className="row navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <ul className="nav navbar-nav">
                <li style={navTitle}>
                  <NavLink activeClassName="selected" className="nav-link" exact to="/">About</NavLink>
                </li>
                <li>
                  <NavLink activeClassName="selected" className="nav-link" to="/Resume">Resume</NavLink>
                </li>
                <li>
                  <NavLink activeClassName="selected" className="nav-link" to="/Find">Find Me</NavLink>
                </li>
                <li>
                  <NavLink activeClassName="selected" className="nav-link" to="/Portfolio">Portfolio</NavLink>
                </li>
                <li>
                  <NavLink  activeClassName="selected" to="">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="col-lg-12 header"
            style={headerStyle}>
            <div className="header-title">
              <div
                className="name"
                style={titleStyle}>
                Roxy Faye
              </div>
              <div className="subtitle" style={subtitleStyle}>
                web dev/ yogi/ fish whisperer
              </div>
            </div>
          </div>
        </nav>
        {/*
          PASS IN CHILDREN
          */}
        {this.props.children}
        <footer className="col-lg-11">
          <span className="footer-title">Roxy Faye </span>
          <span>
            1537A Chance Drive, Charleston, SC, 29404 | (931) 349-5225
          </span>
        </footer>
      </div>
    );
  }
}
