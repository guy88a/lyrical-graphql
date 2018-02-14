import React, { Component } from "react";
import { graphql } from "react-apollo";
import fetchSongDetails from "../queries/fetchSongDetails";
import { Link } from "react-router";

class SongDetails extends Component {
  render() {
    console.log(this.props);
    const { song } = this.props.data;

    if (!song) {
      return null;
    }

    return (
      <div>
        <Link to="/">Back</Link>
        <h3>{song.title}</h3>
      </div>
    );
  }
}

export default graphql(fetchSongDetails, {
  options: props => {
    return { variables: { id: props.params.id } };
  }
})(SongDetails);
