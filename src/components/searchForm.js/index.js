import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.names array
function SearchForm(props) {
  const searchingFor = props.results.filter(
    (employee) =>
      employee.name.first.toLowerCase() === props.search.toLowerCase()
  );
  return (
    <form className="search">
      <div className="form-group searchBar">
        <label htmlFor="employee">Employee:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          employee="employee"
          list="employees"
          type="text"
          className="form-control"
          placeholder="Look for an employee"
          id="employee"
        />
        <datalist id="employees">
          {searchingFor.map((employee) => (
            <div key={employee.name.first}>
              hi
              <option value={employee} key={employee} />
            </div>
          ))}
        </datalist>
        <button type="submit" onClick={props.handleFormSubmit} className="btn">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
