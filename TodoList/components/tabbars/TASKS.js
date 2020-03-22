import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'

import CheckBox from 'react-native-check-box'

export default class TASKS extends Component {
    
    constructor(props){
        super(props);
        this.state={
            isChecked: false
        }
    }

    render () {
        return (
        <View >
            <CheckBox
                style={{flex: 1, padding: 35}}
                isChecked={this.state.isChecked}                
                onClick={() => {
                    this.setState({
                        isChecked: !this.state.isChecked
                    })
                }}
                leftText={"checkBox"}
            >
            </CheckBox>
            <CheckBox
                style={{flex: 1, padding: 35}}
                onClick={() => {
                    this.setState({
                        isChecked: !this.state.isChecked
                    })
                }}
                isChecked={this.state.isChecked}
                leftText={"checkBox"}
            >
            </CheckBox>
        </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instruction: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});