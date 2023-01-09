
import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import {normalUserRoutes, adminUserRoutes } from "./AppRoutes";
import { Layout } from "./components/Layout";
import Login from "./components/Login";
import NavMenu from "./components/NavMenu"; 
import "./custom.css";

export class App extends Component {
  state = {
    isLoggedIn: false,
    userType: null
  }

  handleLogin = (userType) => {
    this.setState({ isLoggedIn: true, userType });
  }

  render() {
    const { isLoggedIn, userType } = this.state;
    let routes;
    if (userType === 'admin') {
      routes = adminUserRoutes;
    } else if (userType === 'normal') {
      routes = normalUserRoutes;
    }
    return (
      <Layout>
        {!isLoggedIn ? (
          <Login handleLogin={this.handleLogin} />
        ) : (
          <>
            <NavMenu isLoggedIn={isLoggedIn} />
            <Routes>
              {routes.map((route, index) => {
                const { element, ...rest } = route;
                return <Route key={index} {...rest} element={element} />;
              })}
            </Routes>
          </>
        )}
      </Layout>
    );
  }
}

export default App;
