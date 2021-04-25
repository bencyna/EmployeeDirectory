import React from "react";

function SearchResults(props) {
  const searchingFor = props.results.filter((employee) =>
    employee.name.first.includes(props.search)
  );
  return (
    <div className="employee container">
      <header className="headings row">
        <button className="name btn btn-light name col-sm-2"></button>
        <button className="age btn btn-light name col-sm-2">Name</button>
        <button className="gender btn btn-light name col-sm-2">Age</button>
        <button className="email btn btn-light name col-sm-3">Email</button>
        <button className="location btn btn-light name col-sm-3">
          Location
        </button>
      </header>
      {searchingFor.map((result) => (
        <div className="row" key={result.login.uuid}>
          <div
            className="picture col-sm-2 list-group-item list-group-item-action"
            key={result.picture.thumbnail}
          >
            <img alt="employee" src={result.picture.thumbnail} />
          </div>
          <div
            className="name col-sm-2 list-group-item list-group-item-action"
            key={result.name.first + result.name.last}
          >
            {result.name.first} {result.name.last}
          </div>
          <div
            className="age col-sm-2 list-group-item list-group-item-action"
            key={result.dob.date}
          >
            {result.dob.age}
          </div>

          <div
            className="email col-sm-3 list-group-item list-group-item-action"
            key={result.email}
          >
            {result.email}
          </div>
          <div
            className="location col-sm-3 list-group-item list-group-item-action"
            key={result.location.city + result.location.postcode}
          >
            {result.location.city}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
