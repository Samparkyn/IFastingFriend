import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableHighlight, Picker } from 'react-native';
import { Timer } from 'react-native-stopwatch-timer'

export default class FastingTimer extends Component {
  
    state = {
      totalDuration: 5.76e+7,
      isRunning: false,
      timerReset: false,
      timeSelected: 'time'
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
        <Picker
          prompt="Choose your Fasting time"
          mode="dialog"
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) => this.setState({timeSelected: itemValue})}
          selectedValue={this.state.timeSelected}>
          <Picker.Item label="12h" value="12" />
          <Picker.Item label="13h" value="13" />
          <Picker.Item label="14h" value="14" />
          <Picker.Item label="15h" value="15" />
          <Picker.Item label="16h" value="16" />
          <Picker.Item label="17h" value="17" />
          <Picker.Item label="18h" value="18" />
          <Picker.Item label="19h" value="19" />
          <Picker.Item label="20h" value="20" />
          <Picker.Item label="21h" value="21" />
          <Picker.Item label="22h" value="22" />
          <Picker.Item label="23h" value="23" />
        </Picker>
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
  picker: {
    height: 100,
    width: 200,
    backgroundColor: '#29A1C9'
  },
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
