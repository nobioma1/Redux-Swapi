import React from 'react';
import { connect } from 'react-redux';

import { CharacterList } from '../components';
import { fetchCharacters } from '../actions';

class CharacterListView extends React.Component {
  componentDidMount() {
    this.props.fetchCharacters();
  }

  render() {
    if (this.props.isFetching) {
      return (
        <div className="loading">
          <h2>Fetching Characters...</h2>
        </div>
      );
    }
    return (
      <div className="charactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = ({ charsReducer }) => ({
  characters: charsReducer.characters,
  isFetching: charsReducer.isFetching,
});

export default connect(
  mapStateToProps,
  {
    fetchCharacters,
  },
)(CharacterListView);
