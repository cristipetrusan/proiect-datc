import React, { Component } from 'react';

export class PostDangerForm extends Component {
  static displayName = PostDangerForm.name;

  constructor(props) {
    super(props);
    this.state = {
      partitionKey: "",
      rowKey: "",
      status: "new",
      summary: "",
      owner: ""
    }
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }


  submitHandler = e => {
    e.preventDefault();
  
    fetch('https://localhost:44424/citydangers', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { partitionKey, rowKey, summary, owner } = this.state
    return (
      
      <div>
        <form onSubmit={this.submitHandler}>
          <div >
            <h1>Add here details about the problem you have found:</h1> 
            <p>Type:</p>
            <input
              type="text"
              name="partitionKey"
              value={partitionKey}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <p>Location:</p>
            <input
              type="text"
              name="rowKey"
              value={rowKey}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <p>Summary:</p>
            <input
              type="text"
              name="summary"
              value={summary}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <p>Owner:</p>
            <input
              type="text"
              name="owner"
              value={owner}
              onChange={this.changeHandler}
            />
          </div>
          <p></p>
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    );
  }
}
