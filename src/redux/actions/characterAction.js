import axios from 'axios';
import { schemeAndAuthority } from '../../config.json';

export function getCharacter(id) {
	return dispatch => {
		dispatch({
			type: 'GET_CHARACTER',
			payload: axios.get(`${schemeAndAuthority}/characters/${id}`)
		});
	};
}

