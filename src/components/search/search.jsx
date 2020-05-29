import React from "react";
import "./search.css";
import "../covidList/covidList";

export default class Search extends React.Component {
  state = {
    term: "",
  };

  onSearchChange = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onSearchChange(term);
  };
  render() {
    return (
      <div className="boxSearch">
        <input
          type="text"
          className="searchInput"
          placeholder="Find country"
          value={this.state.term}
          onChange={this.onSearchChange}
        />
      </div>
    );
  }
}
