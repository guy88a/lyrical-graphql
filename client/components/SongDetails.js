import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router";
import CreateLyrics from '../components/CreateLyrics';
import fetchSongDetails from "../queries/fetchSongDetails";

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
        <CreateLyrics songId={song.id} />
      </div>
    );
  }
}

export default graphql(fetchSongDetails, {
  options: props => {
    return { variables: { id: props.params.id } };
  }
})(SongDetails);
