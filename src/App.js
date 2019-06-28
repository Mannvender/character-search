import './core/css/material-kit.css';
import './App.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Router from './Router';

// components
import Home from './components/Home';
import CharacterProfile from './components/CharacterProfile';

import fetchAll from './redux/actions/fetchAllAction';
import { getCharacter } from './redux/actions/characterAction';

class App extends Component {
	componentDidMount() {
		this.props.fetchAll();
	}

	render() {
		const { characters } = this.props;
		return (
			<Router>
				<Switch>
					<Route exact path='/' render={() => <Home characters={characters} />}></Route>
					<Route exact path='/character/:characterId' render={() => <CharacterProfile characters={characters} getCharacter={this.props.getCharacter} />}></Route>
				</Switch>
			</Router>
		);
	}
}

function mapStateToProps(state) {
	return {
		characters: state.character.characters
	};
}

export default connect(mapStateToProps, { fetchAll, getCharacter })(App);
