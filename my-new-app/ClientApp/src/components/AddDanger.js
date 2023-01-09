import React, { Component } from 'react';
import axios from 'axios';

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

  incrementCounter() {
    this.setState({
      currentCount: this.state.currentCount + 1
    });
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }


  submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
		axios
			.post('https://localhost:44424/citydangers', this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
	}

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