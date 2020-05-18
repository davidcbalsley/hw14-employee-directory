import React from "react";
import Wrapper from "./components/Wrapper";
import API from "./utils/API";

class App extends React.Component {
  state = {
    employees: []
  };

  componentDidMount() {
    this.getEmployees();
  }

  getEmployees = () => {
    // getManyEmployees(20)
    API.getEmployees()
      .then(res => this.setState({ employees: res.data.results }))
      .catch(err => console.log(err));
  }

  render() {

    return(
      <Wrapper>

        <h3>Nothing yet, but please check again soon!</h3>;
      </Wrapper>
    );
  };
}

export default App;
