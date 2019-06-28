import axios from 'axios';
import { schemeAndAuthority } from '../../config.json';

export default () => dispatch => {
	dispatch({
		payload: axios.get(`${schemeAndAuthority}/characters`),
		type: 'FETCH_ALL_CHARACTERS'
	});
};
