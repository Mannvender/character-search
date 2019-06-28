import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {
	Card,
	Icon
} from 'antd';

class CharacterCard extends Component {
	getCharacterId = () => {
		const { character } = this.props;
		const characterUrlArr = character.url.split('/');
		return characterUrlArr[characterUrlArr.length - 1];
	}

	handleBookmarkBtnClick = () => {
		const { updateBookmarks } = this.props;
		let { bookmarks } = this.props;
		const characterId = this.getCharacterId();
		if (this.isCharacterBookmarked(bookmarks)) {
			bookmarks = bookmarks.filter(id => id !== characterId);
		} else {
			bookmarks.push(characterId);
		}
		localStorage.setItem('character-bookmarks', JSON.stringify(bookmarks));
		updateBookmarks(bookmarks);
	}

	isCharacterBookmarked = bookmarks => {
		const characterId = this.getCharacterId();
		return bookmarks.indexOf(characterId) > -1;
	}

	render() {
		const { character } = this.props;
		const characterId = this.getCharacterId();
		return (
			<div>
				<Card className="my-3"
					actions={[<Icon onClick={this.handleBookmarkBtnClick} type="book" theme={character.isBookmarked ? 'filled' : undefined} />]}
				>
					<Link to={`/character/${characterId}`}>
						<p>Name: {character.name}</p>
						<p>Aliases: {character.aliases}</p>
					</Link>
				</Card>
			</div>
		);
	}
}

export default CharacterCard;
