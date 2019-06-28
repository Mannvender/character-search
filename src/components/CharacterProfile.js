import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import {
	Divider,
	Row
} from 'antd';

class CharacterProfile extends Component {
	componentDidMount() {
		const { match: { params: { characterId } } } = this.props;
		this.props.getCharacter(characterId);
	}
	render() {
		const { characters, match: { params: { characterId } } } = this.props;
		const characterInfo = characters.find(character => {
			const urlArr = character.url.split('/');
			const currentCharId = urlArr[urlArr.length - 1];
			return currentCharId == characterId;
		});
		return (
			<div className="container">
				<h3 className="mt-3">{characterInfo.name}</h3>
				<Divider orientation="left">Aliases</Divider>
				<Row>
					<ol>
						{characterInfo.aliases.map(book => <li key={book}>{book}</li>)}
					</ol>
				</Row>
				{characterInfo.books.length > 0 &&
					<>
						<Divider orientation="left">Books</Divider>
						<Row>
							<ol>
								{/* TODO: click to expand books, fetch book data on click, add booksInfo array with each character */}
								{characterInfo.books.map(book => <li key={book}><a target="_blank" rel="noopener noreferrer" href={book}>{book}</a></li>)}
							</ol>
						</Row>
					</>
				}
			</div>
		);
	}
}

export default withRouter(CharacterProfile);
