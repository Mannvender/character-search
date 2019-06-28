const initState = {
	characters: []
};

function characterReducer(state = initState, action) {
	switch (action.type) {
		case 'FETCH_ALL_CHARACTERS_FULFILLED': {
			console.log(action.payload)
			return { ...state, characters: action.payload.data };
		}
		case 'GET_CHARACTER_FULFILLED': {
			console.log(action.payload)
			const fetchedCharacter = action.payload.data;
			const filteredCharacters = state.characters.filter(character =>
				character.name !== fetchedCharacter.name &&
				character.aliases !== fetchedCharacter.aliases);

			return { ...state, characters: [...filteredCharacters, fetchedCharacter] };
		}
		default:
			return state;
	}
}

export default characterReducer;
