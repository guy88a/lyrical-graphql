import gql from 'graphql-tag'

export default gql`
    mutaion DeleteSong($id: ID) {
        deleteSong(id: $id) {
            id
        }
    }
`;