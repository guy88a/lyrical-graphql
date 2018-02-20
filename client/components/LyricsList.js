import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

class LyricsList extends Component {
  constructor(props) {
    super(props);
  }

  onLike(id) {
    console.log("liked " + id);
  }

  renderLyrics() {
    return this.props.lyrics.map(({ id, content }) => {
      return (
        <li key={id} className="collection-item">
          {content}
          <i className="material-icons" onClick={() => this.onLike(id)}>
            thumb_up
          </i>
        </li>
      );
    });
  }

  render() {
    return <ul className="collection">{this.renderLyrics()}</ul>;
  }
}

export default LyricsList;
