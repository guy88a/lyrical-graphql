import React, {Component} from 'react';
import gql from 'graphql-tag';

class CreateSong extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: ""
        }
    }

    render() {
        return (
            <div>
                <h3>Create a New Song</h3>
                <form>
                    <label>Song Title</label>
                    <input onChange={ event => this.setState({title: event.target.value}) } value={this.state.title} />
                </form>
            </div>
        );
    }

}

const mutation = gql`
    mutation {
        addSong(title: ) {
            id
            title
        }
    }
`;

export default CreateSong;