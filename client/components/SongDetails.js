import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import fetchSongDetails from '../queries/fetchSongDetails';

class SongDetails extends Component {

    render() {
        console.log(this.props);
        return (
            <div>
                <h3>Song Details</h3>
            </div>
        );
    }

}

export default graphql(fetchSongDetails, {
    options: (props) => { return { variables: { id: props.params.id } } }
})(SongDetails);