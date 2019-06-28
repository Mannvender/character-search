const initState = {
	characters: []
};

function characterReducer(state = initState, action) {
	switch (action.type) {
		case 'FETCH_ALL_CHARACTERS_FULFILLED': {
			console.log(action.payload)
			return { ...state, characters: action.payload.data };
		}
		default:
			return state;
	}
}

export default characterReducer;
