import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '', userType: 'normal' };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Validate the username and password
    if (this.state.username === 'admin' && this.state.password === 'admin') {
      this.props.handleLogin('admin');
      this.history.push('/home');
      return;
    }
    if (this.state.username === 'user' && this.state.password === 'user') {
      this.props.handleLogin('normal');
      this.history.push('/home');
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div style={{ display: "flex", flexDirection: "column" }}>
           <h2 style={{ padding: "30px 20px", textAlign: "center"}}>
              City Dangers Alert - Log in
            </h2>
        </div>
        <div style={{ paddingTop: "20px", textAlign: 'center'}}>
        <label>
          <p>Username:
          <input type="text" name="username" value={this.state.username} onChange={this.handleChange} /></p> 
        </label>
        <br />
        <label>
          <p>Password: 
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange} /></p> 
        </label>
        <br />
        <label>
          <p>User type:  
          <select name="userType" value={this.state.userType} onChange={this.handleChange} >
            <option value="normal">Normal</option>
            <option value="admin">Admin</option>
          </select></p>
        </label>
        <br />
        <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

export default Login;

