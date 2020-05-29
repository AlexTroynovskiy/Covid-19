import React from "react";

const withCovidData = (WrappedComponent) =>
  class extends React.Component {
    state = {
      data: [],
      isLoading: false,
      hasError: false,
    };

    componentDidMount() {
      this.setState({
        isLoading: true,
      });
      fetch("https://api.covid19api.com/summary")
        .then((response) => response.json())
        .then((data) =>
          this.setState({
            data: data.Countries,
            isLoading: false,
          })
        )
        .catch((e) => {
          console.log(e);
          this.setState({ hasError: true });
        });
    }

    render() {
      const { data, isLoading, hasError } = this.state;

      return (
        <WrappedComponent
          {...this.props}
          data={data}
          isLoading={isLoading}
          hasError={hasError}
        />
      );
    }
  };

export default withCovidData;
