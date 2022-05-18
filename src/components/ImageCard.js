import React, { Component } from "react";

class ImageCard extends Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };

    this.imageRef = React.createRef();
  }

  // componentDidMount will be called after the component is rendered
  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 4.5);

    this.setState({ spans });
  };

  render() {
    const { tags, largeImageURL, user, views, downloads, imageSize } =
      this.props.image;

    return (
      <div className="image" style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <div className="ui card">
          <div className="image">
            <img ref={this.imageRef} alt={tags} src={largeImageURL} />
          </div>
          <div className="content">
            <p className="header">{user}</p>
            <div className="meta">
              <span className="date">{views} views</span>
            </div>
            <div className="description">{downloads} downloads</div>
          </div>
          <div className="extra content">
            <a href="#">
              <i className="image outline icon"></i>
              {imageSize} image size
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageCard;
