import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import queryFetchSong from '../queries/fetchSongs';
import queryDeleteSong from '../queries/deleteSong';

class SongList extends Component {
    isLoading() {
        return this.props.data.loading;
    }

    renderSongs() {
        if(this.props.data.error != undefined) {
            return <div>an error occured, try reloading</div>
        }

        return this.props.data.songs.map(song => {
            return (
                <li key={song.id} className="collection-item">
                    { song.title }
                </li>
            );
        });
    }

    render() {
        if(this.isLoading()) {
            return (
                <div>
                    Loading Songs...
                </div>
            )
        } else {
            return (
                <div>
                    <ul className="collection">
                        {this.renderSongs()}
                    </ul>
                    <Link
                        to="songs/new"
                        className="btn-floating btn-large red right"
                    >
                        <i className="material-icons">add</i>
                    </Link>
                </div>
            )
        }
    }
}

export default graphql(queryDeleteSong) (
    graphql(queryFetchSong)(SongList)
);
