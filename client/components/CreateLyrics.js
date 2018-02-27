import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import queryAddLyric from "../queries/addLyric";
import queryFetchSongs from "../queries/fetchSongs";

class CreateLyrics extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  onSubmitHandler(event) {
    event.preventDefault();

    this.props
      .mutate({
        variables: {
          content: this.state.content,
          songId: this.props.songId
        }
      })
      .then(() => {
        this.setState({ content: "" });
      });
  }

  onChangeHandler(event) {
    this.setState({ content: event.target.value });
  }

  render() {
    return (
      <form onSubmit={this.onSubmitHandler.bind(this)}>
        <label>Add a Lyric</label>
        <input
          onChange={this.onChangeHandler.bind(this)}
          value={this.state.content}
        />
      </form>
    );
  }
}

const mutation = gql`
  mutation AddLyric($content: String, $songId: ID) {
    addLyricToSong(content: $content, songId: $songId) {
      id
      lyrics {
        id
        content
        likes
      }
    }
  }
`;

export default graphql(mutation)(CreateLyrics);
