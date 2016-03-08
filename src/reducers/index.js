/** state tree
	{
       test: ''
	}
**/

import { combineReducers } from 'redux';
import {  } from '../actions/actionTypes';

/** reducers **/
function test(state='', action) {
  return state;
}

const rootRuducer = combineReducers({
	test
});

export default rootRuducer;