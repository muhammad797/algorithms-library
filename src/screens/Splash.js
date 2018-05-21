import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class Splash extends React.Component {

    constructor(props) {
        super(props);
        setTimeout(() => {
            const {navigate} = props.navigation;
            navigate("AlgorithmsList");
        }, 300);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Algorithm's Library</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
