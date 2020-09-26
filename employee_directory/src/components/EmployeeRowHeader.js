import React from 'react';

function EmployeeRowHeader(props) {
    return (
      <thead className=" text-white bg-info">
        <tr className="border">
            <th scope="col">Picture</th>
            <th scope="col">Name <button id="sortNameButton" onClick={props.sort}><i id="sortName" className="fas fa-sort-alpha-down"></i></button></th>
            <th scope="col">Gender</th>
            <th scope="col">Phone </th>
            <th scope="col">Email </th>
            
            <th scope="col">City <button id="sortCityButton" onClick={props.sort}><i id="sortCity" className="fas fa-sort-alpha-down"></i></button></th>
        </tr>
      </thead>
    );
}

export default EmployeeRowHeader;
