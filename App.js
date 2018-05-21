import React from 'react';
import {createStackNavigator} from "react-navigation";
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducers from "./src/reducers";
import Splash from "./src/screens/Splash";
import AlgorithmsList from "./src/screens/AlgorithmsList";

export default class App extends React.Component {
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <AlgorithmsLibrary/>
            </Provider>
        );
    }
}

const AlgorithmsLibrary = createStackNavigator({
    Splash: Splash,
    AlgorithmsList: AlgorithmsList,
}, {
    headerMode: "none",
});
