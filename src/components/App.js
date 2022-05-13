import React, { Component } from "react";
import pixabay from "../api/pixabay";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

/* This is a Parent Component */
class App extends Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await pixabay.get("/api/", {
      params: {
        key: "27369439-109e49024edf38b4bfd684f4c",
        q: term,
        lang: "en",
        image_type: "all",
        orientation: "all",
        order: "popular",
      },
    });

    this.setState({ images: response.data.hits });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
