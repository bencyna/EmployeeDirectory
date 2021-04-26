import React, { Component } from "react";
import Container from "./Container";
import API from "../utils/API";
import SearchForm from "./searchForm.js";
import SearchResults from "./searchResults";

class Search extends Component {
  state = {
    search: "",
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
    let orderResults = [];
    for (let i = 0; i < this.state.results.length; i++) {
      orderResults.push(this.state.results[i].name.first);
    }

    const test_with_index = [];
    for (let i in orderResults) {
      test_with_index.push([orderResults[i], i]);
    }
    test_with_index.sort(function (left, right) {
      return left[0] < right[0] ? -1 : 1;
    });
    let indexes = [];
    orderResults = [];
    for (let j in test_with_index) {
      orderResults.push(test_with_index[j][0]);
      indexes.push(test_with_index[j][1]);
    }

    const output = indexes.map((i) => this.state.results[i]);

    this.setState({ results: output });
  };

  render() {
    return (
      <div>
        <Container>
          <SearchForm
            handleInputChange={this.handleInputChange}
            results={this.state.results}
            search={this.state.search}
          />
          <SearchResults
            results={this.state.results}
            search={this.state.search}
            sort={this.state.sort}
            handleSortFunction={this.handleSortFunction}
          />
        </Container>
      </div>
    );
  }
}

export default Search;
