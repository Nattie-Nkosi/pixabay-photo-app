import React, { Component } from "react";
import { Link } from "react-router-dom";

class ImageCard extends Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };

    this.imageRef = React.createRef();
  }

  // componentDidMount is will be called after the component is rendered
  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 10);

    this.setState({ spans });
  };

  render() {
    const { tags, largeImageURL } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <Link to="/">
          <img ref={this.imageRef} alt={tags} src={largeImageURL} />
        </Link>
      </div>
    );
  }
}

export default ImageCard;
