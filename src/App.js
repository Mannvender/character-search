import './core/css/material-kit.css';
import './App.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Router from './Router';

// components
import Home from './components/Home';
import CharacterProfile from './components/CharacterProfile';

import { message } from 'antd';

import fetchAll from './redux/actions/fetchAllAction';

class App extends Component {
	componentDidMount() {
		fetchAll();
	}

	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/" component={Home}></Route>
					<Route exact path="/character/:characterId" component={CharacterProfile}></Route>
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

export default connect(mapStateToProps, { fetchAll })(App);
