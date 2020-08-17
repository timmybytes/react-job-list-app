import React, { Component } from "react";
import Table from "./Table";
import Form from "./Form";

class App extends Component {
  state = {
    characters: [],
  };

  handleSubmit = (character) => {
    this.setState({ characters: [...this.state.characters, character] });
  };

  removeCharacter = (index) => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      }),
    });
  };

  render() {
    const { characters } = this.state;

    return (
      <div className="container">
        <div className="brand-tilt">
          <h1 className="brand-h1 text-center">Job List App</h1>
        </div>
        <div className="container-small">
          <a
            style={{ "text-decoration": "none" }}
            className="vertical-center"
            href="https://timmybytes.com/pages/work"
          >
            <h3 className="brand-h3">
              <i class="fas fa-arrow-alt-circle-left"></i> Back to timmybytes.com
            </h3>
          </a>
        </div>
        <Table characterData={characters} removeCharacter={this.removeCharacter} />
        <Form handleSubmit={this.handleSubmit} />
        <br />
        <p className="text-center">
          <a href="https://github.com/timmybytes/react-job-list-app">View project on Github</a>
        </p>
        <p className="text-center">
          Inspired by{" "}
          <a href="https://www.taniarascia.com/getting-started-with-react/">
            Tania Rascia's tutorial
          </a>{" "}
        </p>
      </div>
    );
  }
}

export default App;
