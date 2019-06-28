import axios from 'axios';
import { schemeAndAuthority } from '../../config.json';

export default () => dispatch => {
	console.log(`${schemeAndAuthority}/characters`)
	dispatch({
		payload: axios.get(`${schemeAndAuthority}/characters`),
		type: 'FETCH_ALL_CHARACTERS'
	});
};
