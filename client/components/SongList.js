import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class SongList extends Component {
    isLoading() {
        return this.props.data.loading;
    }

    renderSongs() {
        if(this.props.data.error != undefined) {
            return <div>an error occured, try reloading</div>
        }

        return this.props.data.songs.map((song, i) => {
            return (
                <li key={i} data-key={i} className="collection-item">
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
                <ul className="collection">
                    {this.renderSongs()}
                </ul>
            )
        }

        
    }
}

const query = gql`
    {
        songs {
            title
        }
    }
`;

export default graphql(query)(SongList);
