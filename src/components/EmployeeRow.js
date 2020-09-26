import React from "react";

function EmployeeRow(props) {
  return props.model.map((employee, index) => {
    const name = employee.name.last + ", " + employee.name.first;
    return (
      <tr key={index}>
        <td>
          <img
            src={employee.picture.thumbnail}
            className="rounded-circle border-white border border-gray-300"
            alt={name}
          />
        </td>
        <td className="h6 align-middle">{name}</td>
        <td class="align-middle">{employee.gender}</td>
        <td class="align-middle">{employee.phone}</td>
        <td className="text-primary align-middle">{employee.email}</td>

        <td>{employee.location.city}</td>
      </tr>
    );
  });
}

export default EmployeeRow;
