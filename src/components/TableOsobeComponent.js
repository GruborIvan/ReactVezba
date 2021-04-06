import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return { persons: state.persons };
};

const Table = ({ persons }) => {
  return (
    <div>
      <p> Lista osoba: </p>
      <table className="ui single line table">
        <thead>
          <tr>
            <th> ID </th>
            <th>Ime</th>
            <th>Prezime</th>
            <th>Godiste</th>
            <th>Pol osobe</th>
          </tr>
        </thead>

        <tbody>
          {persons.map((osoba) => {
            return (
              <tr key={osoba.id}>
                <td>{osoba.id}</td>
                <td>{osoba.ime}</td>
                <td>{osoba.prezime}</td>
                <td>{osoba.godiste}</td>
                <td>{osoba.pol}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const TableOsobeComponent = connect(mapStateToProps)(Table);

export default TableOsobeComponent;
