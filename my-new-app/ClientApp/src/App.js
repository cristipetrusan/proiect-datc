import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { Layout } from "./components/Layout";
import Login from "./components/Login"; // Add this line
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
    const { isLoggedIn } = this.state;

    return (
      <Layout>
        {!isLoggedIn ? (
          <Login handleLogin={this.handleLogin} />
        ) : (
          <>
            <NavMenu isLoggedIn={isLoggedIn} />
            <Routes>
              {AppRoutes.map((route, index) => {
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
