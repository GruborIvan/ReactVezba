import React from "react";
import { useSelector } from "react-redux";

const TableOsobeComponent = () => {

  const sveOsobe = useSelector(state => state.persons);

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
          {sveOsobe.map((osoba) => {
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

export default TableOsobeComponent;
