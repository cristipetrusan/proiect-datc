import React, { Component } from 'react';

export class AdminFetchData extends Component {
  static displayName = AdminFetchData.name;

  constructor(props) {
    super(props);
    this.state = { cityDangers: [], loading: true };
  }

  componentDidMount() {
    this.populateCityDangerrData();
  }

  // deleteSelectedRows() {
  //   const checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
  //   const checkedIds = Array.from(checkboxes).map(checkbox => checkbox.value);
  //   console.log(checkedIds);
  //   // Here, you can send a request to the server to delete the rows with the checked IDs.
  // }

  async deleteSelectedRows() {
    const checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
    const checkedIds = Array.from(checkboxes).map(checkbox => checkbox.value);
    console.log(checkedIds);
    for (const id of checkedIds) {
      const cityDanger = this.state.cityDangers.find(c => c.partitionKey === id);
      const type = cityDanger.partitionKey;
      const location = cityDanger.rowKey;
      const response = await fetch(`citydangers/${type}/${location}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        console.log('Rows deleted successfully');
      } else {
        console.error('Error deleting rows');
      }
    }
  }

  static renderCityDangersTable(cityDangers) {
    return (
      <div>
      <table className="table table-striped" aria-labelledby="tableLabel">
        <thead>
          <tr>
            <th></th>
            {/* PartitionKey */}
            <th>Type</th> 
            {/* Rowkey */}
            <th>Location</th>
            <th>Status</th>
            <th>Summary</th>
            <th>Owner</th>
          </tr>
        </thead>
        <tbody>
          {cityDangers.map(cityDanger =>
            <tr>
              <td><input type="checkbox" value={cityDanger.partitionKey} /></td> 
              <td>{cityDanger.partitionKey}</td>
              <td>{cityDanger.rowKey}</td>
              <td>{cityDanger.status}</td>              
              <td>{cityDanger.summary}</td>
              <td>{cityDanger.owner}</td>
            </tr>
          )}
        </tbody>
      </table>
    
      </div>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : AdminFetchData.renderCityDangersTable(this.state.cityDangers);
    return (
      <div>
        <h1 id="tableLabel">CityDangerr cityDanger</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
        <button onClick={() => this.deleteSelectedRows()}>Delete Selected Rows</button>
      </div>
    );
  }

  async populateCityDangerrData() {
    const response = await fetch('citydangers');
    const data = await response.json();
    this.setState({ cityDangers: data, loading: false });
  }
}
