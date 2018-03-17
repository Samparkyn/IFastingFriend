import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { Timer } from 'react-native-stopwatch-timer'


export default class FastingTimer extends Component {
  
    state = {
      totalDuration: 5.76e+7,
      isRunning: false,
      timerReset: false
    }
  
  startTimer = () => {
    this.setState({isRunning: true, timerReset: false});
  }
  
  resetTimer = () => {
    this.setState({isRunning: false, timerReset: true});
  }
    
  render() {
    const { isRunning, timerReset, totalDuration } = this.state
    let motivationalText = "You got this"
  
    
    let startButton
    if (!isRunning) {
      startButton = (
        <TouchableHighlight onPress={this.startTimer}>
          <Text style={styles.startButton}>Time to IFast</Text>
        </TouchableHighlight>
      )
    } else {
      startButton = (
        <Text style={styles.startButton}>{motivationalText}</Text>
      )
    }
    
    
    return (
      <View style={styles.container}>
        <Text>IFasting Friend</Text>
        <Timer
          totalDuration={totalDuration}
          start={isRunning}
          reset={timerReset}
          sytle={styles.timer}
        />
        {startButton}
        <TouchableHighlight onPress={this.resetTimer}>
          <Text style={styles.stopButton}>Time to nomnom</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  startButton: {
    fontSize: 30,
    color: 'white',
    backgroundColor: 'red',
    borderRadius: 5,
    textAlign: 'center',
    marginTop: 5,
    padding: 10,
  },
  stopButton: {
    fontSize: 30,
    color: 'black',
    backgroundColor: 'red',
    borderRadius: 5,
    textAlign: 'center',
    marginTop: 5,
    padding: 10,
  },
  timer: {
    
  },
});

AppRegistry.registerComponent('FastingTimer', () => FastingTimer);
