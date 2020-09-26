import React from 'react';

function EmployeeSearchBar(props) {

    return (
        <div className="container mb-1">
          <div className="row">
            <div className="col-1 text-right">
              <label htmlFor="filter"><span className="align-bottom input-group-text"><i className="fas fa-search"></i></span></label>
            </div>
            <div className="col-11 pl-0">
              <input
                onChange={props.handleInputChange}
                name="filter"
                type="text"
                className="form-control rounded border border-info"
                placeholder="Search Employee By Name"
                id="filter"
              />
            </div>
          </div>
        </div>
    );
}

export default EmployeeSearchBar;