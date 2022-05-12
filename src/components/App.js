import React, { Component } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

/* This is a Parent Component */
class App extends Component {
  onSearchSubmit(term) {
    axios.get("https://pixabay.com/api/", {
      params: {
        key: "27369439-109e49024edf38b4bfd684f4c",
        q: term,
        lang: "en",
        image_type: "all",
        orientation: "all",
        order: "popular",
      },
    });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
