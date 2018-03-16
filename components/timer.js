import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { Timer } from 'react-native-stopwatch-timer'


export default class FastingTimer extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      totalDuration: 90000,
      timerStart: false,
      timerReset: false
    };
  }
  
  toggleTimer = () => {
    this.setState({timerStart: !this.state.timerStart, timerReset: false});
  }
  
  resetTimer = () => {
    this.setState({timerStart: false, timerReset: true});
  }
    
  render() {
    return (
      <View>
        <Text>This is the timer component</Text>
        <Timer
          totalDuration={this.state.totalDuration}
          msecs start={this.state.timerStart}
          reset={this.state.timerReset} />
        <TouchableHighlight onPress={this.toggleTimer}>
          <Text style={styles.font}>{!this.state.timerStart ? "Start" : "Stop"}</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.resetTimer}>
          <Text style={styles.font}>Reset</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  font: {
    fontSize: 30,
    color: 'blue',
  },
});

AppRegistry.registerComponent('FastingTimer', () => FastingTimer);
