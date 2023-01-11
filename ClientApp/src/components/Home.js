import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <h1>Proiect DATC</h1>
        <p>Aceasta este aplicatie de tipul smart city pentru monitorizarea de probleme din oras (de genul: groapa in carosabil, cos de gunoi rasturnat, banca distrusa, fatada cu pericol de cadere a tencuielii, etc)</p> 
        <p></p>
        <p>Aceasta aplicatie are doua componente:  </p>
        <ul>
          <li> server side (API, Worker, Baza de date), </li>
          <li> dashboard (web app).</li>
          </ul> 
      </div>
    );
  }
}
