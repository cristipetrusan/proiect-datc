import React, { Component } from 'react';

export class FetchData extends Component {
  static displayName = FetchData.name;

  constructor(props) {
    super(props);
    this.state = { forecasts: [], loading: true };
  }

  componentDidMount() {
    this.populateWeatherData();
  }

  static renderForecastsTable(forecasts) {
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
          {forecasts.map(forecast =>
            <tr>
              <td>{forecast.partitionKey}</td>
              <td>{forecast.rowKey}</td>
              <td>{forecast.status}</td>              
              <td>{forecast.summary}</td>
              <td>{forecast.owner}</td>
              <td>{forecast.timestamp}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : FetchData.renderForecastsTable(this.state.forecasts);

    return (
      <div>
        <h1 id="tableLabel">Weather forecast</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }

  async populateWeatherData() {
    const response = await fetch('citydangers');
    const data = await response.json();
    this.setState({ forecasts: data, loading: false });
  }
}
