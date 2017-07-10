import { createStore } from 'redux';
import reducer from './ducks/guestList.js';

export default createStore(reducer);