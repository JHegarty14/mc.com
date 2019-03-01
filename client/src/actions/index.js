import axios from 'axios';
import { FETCH_POSTS } from './types';

const fetchPosts = () => async dispatch => {
    const res = await axios.get('/p/blog');
    
    if(!res) return null
    else dispatch({ type: FETCH_POSTS, payload: res.data })
}

export default fetchPosts;