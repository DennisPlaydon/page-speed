import React, { Component } from "react";
import PageInput from "./components/PageInput";
import Title from "./components/Title";
import Score from "./components/Score";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <Title />
              </div>
              <PageInput />
              <Score />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
