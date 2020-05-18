import React from "react";
import Wrapper from "./components/Wrapper";
import List from "./components/List";
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
        <List employees={this.state.employees} />
      </Wrapper>
    );
  };
}

export default App;
