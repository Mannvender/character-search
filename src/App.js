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
import { getCharacter } from './redux/actions/characterAction';

class App extends Component {
	componentDidMount() {
		fetchAll();
	}

	render() {
		const { characters } = this.props;
		console.log(characters)
		return (
			<Router>
				<Switch>
					<Route exact path='/' render={() => <Home characters={characters} />}></Route>
					<Route exact path='/character/:characterId' render={() => <CharacterProfile characters={characters} getCharacter={getCharacter} />}></Route>
				</Switch>
			</Router>
		);
	}
}

function mapStateToProps(state) {
	return {
		characters: [
			{
				'url': 'https://www.anapioficeandfire.com/api/characters/1',
				'name': '',
				'gender': 'Female',
				'culture': 'Braavosi',
				'born': '',
				'died': '',
				'titles': [
					''
				],
				'aliases': [
					'The Daughter of the Dusk'
				],
				'father': '',
				'mother': '',
				'spouse': '',
				'allegiances': [],
				'books': [
					'https://www.anapioficeandfire.com/api/books/5'
				],
				'povBooks': [],
				'tvSeries': [
					''
				],
				'playedBy': [
					''
				]
			},
			{
				'url': 'https://www.anapioficeandfire.com/api/characters/2',
				'name': 'Walder',
				'gender': 'Male',
				'culture': '',
				'born': '',
				'died': '',
				'titles': [
					''
				],
				'aliases': [
					'Hodor'
				],
				'father': '',
				'mother': '',
				'spouse': '',
				'allegiances': [
					'https://www.anapioficeandfire.com/api/houses/362'
				],
				'books': [
					'https://www.anapioficeandfire.com/api/books/1',
					'https://www.anapioficeandfire.com/api/books/2',
					'https://www.anapioficeandfire.com/api/books/3',
					'https://www.anapioficeandfire.com/api/books/5',
					'https://www.anapioficeandfire.com/api/books/8'
				],
				'povBooks': [],
				'tvSeries': [
					'Season 1',
					'Season 2',
					'Season 3',
					'Season 4',
					'Season 6'
				],
				'playedBy': [
					'Kristian Nairn'
				]
			},
			{
				'url': 'https://www.anapioficeandfire.com/api/characters/3',
				'name': '',
				'gender': 'Male',
				'culture': '',
				'born': '',
				'died': '',
				'titles': [
					''
				],
				'aliases': [
					'Lamprey'
				],
				'father': '',
				'mother': '',
				'spouse': '',
				'allegiances': [
					'https://www.anapioficeandfire.com/api/houses/15'
				],
				'books': [
					'https://www.anapioficeandfire.com/api/books/3'
				],
				'povBooks': [],
				'tvSeries': [
					''
				],
				'playedBy': [
					''
				]
			},
			{
				'url': 'https://www.anapioficeandfire.com/api/characters/4',
				'name': '',
				'gender': 'Female',
				'culture': 'Braavosi',
				'born': '',
				'died': '',
				'titles': [
					''
				],
				'aliases': [
					'The Merling Queen'
				],
				'father': '',
				'mother': '',
				'spouse': '',
				'allegiances': [],
				'books': [
					'https://www.anapioficeandfire.com/api/books/5',
					'https://www.anapioficeandfire.com/api/books/8'
				],
				'povBooks': [],
				'tvSeries': [
					''
				],
				'playedBy': [
					''
				]
			},
			{
				'url': 'https://www.anapioficeandfire.com/api/characters/5',
				'name': '',
				'gender': 'Male',
				'culture': '',
				'born': '',
				'died': '',
				'titles': [
					''
				],
				'aliases': [
					'Old Crackbones'
				],
				'father': '',
				'mother': '',
				'spouse': '',
				'allegiances': [],
				'books': [
					'https://www.anapioficeandfire.com/api/books/5'
				],
				'povBooks': [],
				'tvSeries': [
					''
				],
				'playedBy': [
					''
				]
			},
			{
				'url': 'https://www.anapioficeandfire.com/api/characters/6',
				'name': '',
				'gender': 'Female',
				'culture': 'Braavosi',
				'born': '',
				'died': '',
				'titles': [
					''
				],
				'aliases': [
					'The Poetess'
				],
				'father': '',
				'mother': '',
				'spouse': '',
				'allegiances': [],
				'books': [
					'https://www.anapioficeandfire.com/api/books/5'
				],
				'povBooks': [],
				'tvSeries': [
					''
				],
				'playedBy': [
					''
				]
			},
			{
				'url': 'https://www.anapioficeandfire.com/api/characters/7',
				'name': '',
				'gender': 'Female',
				'culture': '',
				'born': '',
				'died': '',
				'titles': [
					''
				],
				'aliases': [
					'Porridge'
				],
				'father': '',
				'mother': '',
				'spouse': '',
				'allegiances': [
					'https://www.anapioficeandfire.com/api/houses/15'
				],
				'books': [
					'https://www.anapioficeandfire.com/api/books/3'
				],
				'povBooks': [],
				'tvSeries': [
					''
				],
				'playedBy': [
					''
				]
			},
			{
				'url': 'https://www.anapioficeandfire.com/api/characters/8',
				'name': '',
				'gender': 'Male',
				'culture': '',
				'born': '',
				'died': '',
				'titles': [
					''
				],
				'aliases': [
					'Quickfinger'
				],
				'father': '',
				'mother': '',
				'spouse': '',
				'allegiances': [
					'https://www.anapioficeandfire.com/api/houses/23'
				],
				'books': [
					'https://www.anapioficeandfire.com/api/books/6'
				],
				'povBooks': [],
				'tvSeries': [
					''
				],
				'playedBy': [
					''
				]
			},
			{
				'url': 'https://www.anapioficeandfire.com/api/characters/9',
				'name': '',
				'gender': 'Female',
				'culture': '',
				'born': '',
				'died': '',
				'titles': [
					''
				],
				'aliases': [
					'the Sailor\'s Wife'
				],
				'father': '',
				'mother': '',
				'spouse': '',
				'allegiances': [],
				'books': [
					'https://www.anapioficeandfire.com/api/books/5'
				],
				'povBooks': [],
				'tvSeries': [
					''
				],
				'playedBy': [
					''
				]
			},
			{
				'url': 'https://www.anapioficeandfire.com/api/characters/10',
				'name': '',
				'gender': 'Female',
				'culture': 'Braavosi',
				'born': '',
				'died': '',
				'titles': [
					''
				],
				'aliases': [
					'The Veiled Lady'
				],
				'father': '',
				'mother': '',
				'spouse': '',
				'allegiances': [],
				'books': [
					'https://www.anapioficeandfire.com/api/books/5'
				],
				'povBooks': [],
				'tvSeries': [
					''
				],
				'playedBy': [
					''
				]
			}
		]
	};
}

export default connect(mapStateToProps, { fetchAll, getCharacter })(App);
