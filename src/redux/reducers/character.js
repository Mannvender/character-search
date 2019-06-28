const initState = {
	characters: []
};

function characterReducer(state = initState, action) {
	switch (action.type) {
		case 'FETCH_ALL_CHARACTERS_FULFILLED': {
			return { ...state, characters: action.payload.data };
		}
		case 'GET_CHARACTER_FULFILLED': {
			const fetchedCharacter = action.payload.data;
			const filteredCharacters = state.characters.map(character => {
				if (character.name === fetchedCharacter.name && character.aliases === fetchedCharacter.aliases) {
					return character;
				}
				return character;
			});
			return { ...state, characters: [...filteredCharacters] };
		}
		default:
			return state;
	}
}

export default characterReducer;
