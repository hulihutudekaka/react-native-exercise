/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import TabNavigator from 'react-native-tab-navigator'
import TASKS from './components/tabbars/TASKS.js'
import DONE from './components/tabbars/DONE.js'

export default class APP extends Component {

    constructor(props){
      super(props)
      this.state = {
        selectedTab: 'TASKS',
        isChecked: false
      }
    }

    render () {
        return (
            <View style={style.all}>
              <View style={style.container}>
                <Text style={{fontSize: 26, color: 'white'}}>  Todo List</Text>
              </View>

              <TabNavigator tabBarStyle={{backgroundColor: 'blue'}}>
                  <TabNavigator.Item
                    selected={this.state.selectedTab === 'TASKS'}
                    title="TASKS"
                    titleStyle={{fontSize: 18}}
                    onPress={() => this.setState({ selectedTab: 'TASKS'})}
                  >
                  <TASKS></TASKS>
                  </TabNavigator.Item>
                  
                  <TabNavigator.Item
                    selected={this.state.selectedTab === 'DONE'}
                    title="DONE"
                    titleStyle={{fontSize: 18}}
                    onPress={() => this.setState({ selectedTab: 'DONE'})}
                  >
                  <DONE></DONE>
                  </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
}

const style = StyleSheet.create({
  container: {  
    height: 87,
  },
  all: {
    //flex: 1,
    backgroundColor: 'blue',
  }
});
