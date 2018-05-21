import {combineReducers} from "redux";
import AlgorithmReducer from "./AlgorithmReducer";
import SelectionReducer from "./SelectionReducer";

export default combineReducers({
    algorithms: AlgorithmReducer,
    selectedAlgorithmId: SelectionReducer,
});