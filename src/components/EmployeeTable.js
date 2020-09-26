import React from 'react';
import axios from "axios";
import EmployeeRowHeader from './EmployeeRowHeader';
import EmployeeRow from './EmployeeRow';
import EmployeeSearchBar from './EmployeeSearchBar';

class EmployeeTable extends React.Component {
    state = {
      data: [],
      filteredData: [],
      lastSorted: "",
      //0 means default order, no sort
      sortOrder: 0 
    };
    
    componentDidMount() {
      this.loadEmployees();
    }

    loadEmployees = async () => {
      try {
        let query = `https://randomuser.me/api/?results=50&nat=AU&inc=gender,name,location,email,phone,picture,birthday`; // request 100 people
        // console.log(query);
        const employees = await axios.get(query);
        // console.log(employees);
        this.setState({ data: employees.data.results, filteredData: employees.data.results });
      }
      catch( err ) {
        console.log(err);
        this.setState({ data: [], filteredData: [] });
      }
    }

    handleClickEvent = (event) => {
// default order is ascending
      let sortOrder = 1; 
      let lastSorted = '';
      switch(event.target.id) {
        case("sortName"):
        case("sortNameButton"): {
          if(this.state.lastSorted === 'sortName') {
            // reverse order in alphabet
            sortOrder = this.state.sortOrder * -1;
          }

          this.state.filteredData.sort( (a, b) => {
            // method to compare names by alphabet
            const aName = a.name.last + ", " + a.name.first;
            const bName = b.name.last + ", " + b.name.first;
            if(sortOrder === 1) {
              return aName.localeCompare(bName);
            } else {
              return bName.localeCompare(aName);
            }
          });

          lastSorted = 'sortName';
          break;
        }

        case("sortCity"):
        case("sortCityButton"): {
          if(this.state.lastSorted === 'sortCity') {
            // reverse
            sortOrder = this.state.sortOrder * -1;
          }

          this.state.filteredData.sort( (a, b) => {
            const aCity = a.location.city;
            const bCity = b.location.city;
            if(sortOrder === 1) {
              return aCity.localeCompare(bCity);
            } else {
              return bCity.localeCompare(aCity);
            }
          });

          lastSorted = 'sortCity';
          break;
        }

        

        default: {
          console.log("Unexpected. Clicked button that doesn't exist. ");
          console.log(event.target.id);
          console.log(event.target);
        }
      }
      this.setState({ ...this.state, filteredData: this.state.filteredData, lastSorted: lastSorted, sortOrder: sortOrder });
    }

    handleInputChange = (event) => {
      let value = event.target.value.trim();
      const filteredData = this.state.data.filter( (a) => {
        const aName = a.name.last + ", " + a.name.first;
        return aName.includes(value);
      });
      this.setState({ ...this.state, filteredData: filteredData });
    }

    render() {
      return (
        <div className="container">
          <EmployeeSearchBar
              handleInputChange={this.handleInputChange}
          />
          <table className="table table-striped">
            <EmployeeRowHeader 
               sort={this.handleClickEvent}
            />
            <tbody>
              <EmployeeRow
                model={this.state.filteredData}
              />
            </tbody>  
          </table>
        </div>
       );
    }
}


export default EmployeeTable;