const initialState = [];
export const reducer = (state = initialState, action) => {
    switch(action.type){
        case "POST_SMURF":
            return [ ...state, action.payload ]
        default:
            return state;
    }
    
}