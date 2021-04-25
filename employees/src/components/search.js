import React, { Component } from "react";
import Container from "./Container";
import API from "../utils/API";
import SearchForm from "./searchForm.js";
import SearchResults from "./searchResults";

class Search extends Component {
  state = {
    search: "",
    employees: [],
    results: [],
    error: "",
  };

  componentDidMount() {
    API.getEmployees()
      .then((res) => {
        console.log(res.data.results);
        this.setState({ results: res.data.results });
      })
      .catch((err) => console.log(err));
  }

  handleInputChange = (event) => {
    this.setState({ search: event.target.value });
  };

  handleSortFunction = (event) => {
    event.preventDeafult();
  };

  render() {
    return (
      <div>
        <p>Searching for {this.state.search}</p>
        <Container>
          <SearchForm
            handleInputChange={this.handleInputChange}
            results={this.state.results}
            search={this.state.search}
          />
          <SearchResults
            results={this.state.results}
            search={this.state.search}
          />
        </Container>
      </div>
    );
  }
}

export default Search;
