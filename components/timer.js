import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { Timer } from 'react-native-stopwatch-timer'


export default class FastingTimer extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      totalDuration: 90000,
      timerStart: false
    };
    // this.toggleTimer = this.toggleTimer.bind(this);
  }
  
  // toggleTimer() {
  //   this.setState({timerStart: !this.state.timerStart, timerReset: false});
  // }
    
  render() {
    return (
      <View>
        <Text>This is the timer component</Text>
        <Timer totalDuration={this.state.totalDuration} start={true} />
      </View>
    );
  }
}

AppRegistry.registerComponent('FastingTimer', () => FastingTimer);
