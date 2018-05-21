import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {connect} from "react-redux";
import ListItem from "../components/ListItem";

class AlgorithmsList extends React.Component {

    renderListItem(item) {
        return (
            <ListItem algorithm={item.item}
                      id={item.item.id}/>
        );
    }

    keyExtractor = (item, index) => item.id;

    render() {
        return (
            <View style={styles.container}>
                <FlatList data={this.props.algorithms}
                          renderItem={this.renderListItem.bind(this)}
                          keyExtractor={this.keyExtractor}
                />
            </View>
        );
    }

}

const mapStateToProps = state => {
    return {algorithms: state.algorithms};
};

export default connect(mapStateToProps)(AlgorithmsList);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: "column",
    },
});
