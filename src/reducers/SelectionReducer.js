export default (state = null, action) => {
    switch (action.type) {
        case "select_algorithm":
            return action.payload;
        default:
            return state;
    }
};