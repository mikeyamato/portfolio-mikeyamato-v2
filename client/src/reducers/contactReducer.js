const initialState = {
	// isAuthenticated: false, 
	user: {}  // this user object will be used below
}

// every reducer exports a function
export default function(state = initialState, action){
	switch(action.type){  // actions need to include a type to test against
		default: 
			return state;  // return the state as-is
	}
}