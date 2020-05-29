import React from "react";
import Search from "./components/search/search";
import withCovidData from "./servicesCovid/ServicesCovid";
import WithCovidList from "./components/covidList/covidList";
import Spinner from "./components/spinner/spinner";
import "./App.css";

class App extends React.Component {
  state = {
    data: [],
    term: "",
  };

  onSearchChange = (term) => {
    this.setState({ term });
  };

  search(items, term) {
    return items.filter((item) => {
      return item.Country.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  }

  render() {
    const { data, isLoading } = this.props;
    const { term } = this.state;
    const visibleItems = this.search(data, term);

    return (
      <div className="App">
        <header className="App-header">
          {isLoading && <Spinner />}
          <Search onSearchChange={this.onSearchChange} />
          <WithCovidList data={visibleItems} />
        </header>
      </div>
    );
  }
}

export default withCovidData(App);
