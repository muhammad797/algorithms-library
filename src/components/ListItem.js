import React from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import {connect} from "react-redux";
import * as actions from "../actions";

class ListItem extends React.Component {

    getDescription() {
        const {expanded, algorithm} = this.props;
        if (expanded) {
            return (
                <Text style={styles.description}>{algorithm.description}</Text>
            );
        }
    }

    selectAlgorithm() {
        this.props.selectAlgorithm(this.props.algorithm.id);
    }

    render() {
        const {title} = this.props.algorithm;
        return (
            <TouchableWithoutFeedback onPress={this.selectAlgorithm.bind(this)}>
                <View style={styles.item}>
                    <Text style={styles.title}>{title}</Text>
                    {this.getDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }

}

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedAlgorithmId === ownProps.algorithm.id;
    return {expanded};
};

export default connect(mapStateToProps, actions)(ListItem);

const styles = StyleSheet.create({
    item: {
        padding: 15,
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 1,
        borderBottomColor: "#EEEEEE",
    },
    title: {
        color: "#222222",
        fontSize: 18,
    },
    description: {
        color: "#444444",
        fontSize: 14,
    }
});