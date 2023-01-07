import React, { Component } from 'react';

export class FetchData extends Component {
  static displayName = FetchData.name;

  constructor(props) {
    super(props);
    this.state = { cityDangers: [], loading: true };
  }

  componentDidMount() {
    this.populateCityDangerrData();
  }

  static renderCityDangersTable(cityDangers) {
    return (
      <table className="table table-striped" aria-labelledby="tableLabel">
        <thead>
          <tr>
            {/* PartitionKey */}
            <th>Type</th> 
            {/* Rowkey */}
            <th>Location</th>
            <th>Status</th>
            <th>Summary</th>
            <th>Owner</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {cityDangers.map(cityDanger =>
            <tr>
              <td>{cityDanger.partitionKey}</td>
              <td>{cityDanger.rowKey}</td>
              <td>{cityDanger.status}</td>              
              <td>{cityDanger.summary}</td>
              <td>{cityDanger.owner}</td>
              <td>{cityDanger.timestamp}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : FetchData.renderCityDangersTable(this.state.cityDangers);

    return (
      <div>
        <h1 id="tableLabel">CityDangerr cityDanger</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }

  async populateCityDangerrData() {
    const response = await fetch('citydangers');
    const data = await response.json();
    this.setState({ cityDangers: data, loading: false });
  }
}
