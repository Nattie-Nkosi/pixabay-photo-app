import React, { Component } from "react";

class ImageCard extends Component {
  render() {
    const { tags, largeImageURL } = this.props.image;

    return (
      <div>
        <img alt={tags} src={largeImageURL} />
      </div>
    );
  }
}

export default ImageCard;
