import React, { Component } from 'react';

import CharacterCard from './Home/CharacterCard';

// Ant Design React Components
import {
	Input,
	Row
} from 'antd';
const { Search } = Input;

// FIXME: remove this variable
const errorMessage = 'Alpha Numeric Characters Only, Please Search Again';

class Home extends Component {
	state = {
		bookmarks: [],
		errorMessage: null,
		searchQuery: null
	}

	componentDidMount() {
		const bookmarks = localStorage.getItem('character-bookmarks');
		if (Boolean(bookmarks) === false) {
			localStorage.setItem('character-bookmarks', JSON.stringify([]));
		}
		this.setState({ bookmarks: JSON.parse(bookmarks) });
	}

	getFilteredCharacters = () => {
		let { characters } = this.props;
		if (Boolean(characters) === false) return [];
		const { bookmarks, searchQuery } = this.state;
		if (searchQuery) {
			const searchRegex = new RegExp(searchQuery, 'i');
			characters = characters.filter(character => searchRegex.test(character.name) || searchRegex.test(character.aliases));
		}
		characters.map(character => {
			const characterUrlArr = character.url.split('/');
			const characterId = characterUrlArr[characterUrlArr.length - 1];
			if (bookmarks.indexOf(characterId) > -1) character.isBookmarked = true;
			else character.isBookmarked = false;
			return character;
		});
		return characters;
	}

	handleSearch = searchQuery => {
		if (this.isAlphaNumeric(searchQuery)) {
			this.setState({ errorMessage: null });
			this.setState({ searchQuery });
		} else {
			this.setState({ errorMessage, searchQuery: null });
		}
	}

	isAlphaNumeric = str => {
		let code, i, len;
		for (i = 0, len = str.length; i < len; i++) {
			code = str.charCodeAt(i);
			if (!(code > 47 && code < 58) && // numeric (0-9)
				!(code > 64 && code < 91) && // upper alpha (A-Z)
				!(code > 96 && code < 123)) { // lower alpha (a-z)
				return false;
			}
		}
		return true;
	};

	updateBookmarks = updateBookmarks => this.setState({ bookmarks: updateBookmarks });

	render() {
		const { bookmarks, errorMessage, searchQuery } = this.state;
		const characters = this.getFilteredCharacters();
		return (
			<div className='container'>
				<Row className='my-3'>
					<Search placeholder="search name or aliases" enterButton="Search" size="large" onSearch={this.handleSearch} allowClear />
					<small className='text-danger'>{errorMessage}</small>
					{searchQuery && <small className='text-info'>Showing Search Results Of: {searchQuery}</small>}
				</Row>
				<Row>
					{characters.length === 0 && 'No Characters to show'}
					{characters.map(character => <CharacterCard bookmarks={bookmarks} character={character} key={character.aliases} updateBookmarks={this.updateBookmarks} />)}
				</Row>
			</div>
		);
	}
}

export default Home;
