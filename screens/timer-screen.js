import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableHighlight, Picker } from 'react-native';
import { Timer } from 'react-native-stopwatch-timer'
import Card from '../components/card'

const fastingTimes = [
  { label: "30s Test", value: 30000},
  { label: "12h", value: 4.32e+7 },
  { label: "13h", value: 4.68e+7 },
  { label: "14h", value: 5.04e+7 },
  { label: "15h", value: 5.4e+7 },
  { label: "16h", value: 5.76e+7 },
  { label: "17h", value: 6.12e+7 },
  { label: "18h", value: 6.48e+7 },
  { label: "19h", value: 6.84e+7 },
  { label: "20h", value: 7.2e+7 },
  { label: "21h", value: 7.56e+7 },
  { label: "22h", value: 7.92e+7 },
  { label: "23h", value: 8.28e+7 },
  { label: "Go full 24h !", value: 8.64e+7 }
]

let motivationalText = "You got this"
const motivationMessage = [
  "Periodic fasting can help clear up the mind and strengthen the body and the spirit", "When you fast, insulin levels drop and human growth hormone increases. Your cells also initiate important cellular repair processes and change which genes they express.", "Studies show that intermittent fasting can improve numerous risk factors for heart disease such as blood pressure, cholesterol levels, triglycerides and inflammatory markers.", "Intermittent fasting may have important benefits for brain health. It may increase growth of new neurons and protect the brain from damage."
]

export default class FastingTimer extends Component {
  state = {
    selectedTimeIdx: 4,
    isRunning: false,
    timerReset: false
  }

  startTimer = () => {
    this.setState({isRunning: true, timerReset: false});
  }
  
  resetTimer = () => {
    this.setState({isRunning: false, timerReset: true})
  }
  
  getRandomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
    
  render() {
    const { isRunning, timerReset, selectedTimeIdx } = this.state
    const selectedDuration = fastingTimes[selectedTimeIdx]['value']
    const selectedDurationLabel = fastingTimes[selectedTimeIdx]['label']
      
    const randomNum = this.getRandomNum(0, motivationMessage.length)
    const randomMessage = motivationMessage[randomNum]
  
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
    
    let resetButton = (
      <TouchableHighlight onPress={this.resetTimer}>
        <Text style={styles.stopButton}>Time to nomnom</Text>
      </TouchableHighlight>
    )

    const pickerOptions = fastingTimes.map((timeObj, idx) => {
      return <Picker.Item key={idx} label={timeObj.label} value={timeObj.value} />
    })
    
    return (
      <View style={styles.container}>
        <Text>IFasting Friend</Text>
        <Card>
          <Text>{randomMessage}</Text>
        </Card>
        <Picker
          prompt="Choose your Fasting time"
          mode="dialog"
          style={styles.picker}
          onValueChange={(val, idx) => this.setState({selectedTimeIdx: idx})}
          selectedValue={selectedDuration}
        >
          {pickerOptions}
        </Picker>
        <Timer
          totalDuration={selectedDuration}
          start={isRunning}
          reset={timerReset}
        />
        {startButton}
        {resetButton}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  picker: {
    height: 50,
    width: 200,
    backgroundColor: '#29A1C9',
    margin: 10,
  },
  container: {
     alignItems: 'center',
     backgroundColor: '#DFD9D9',
     flex: 1,
     justifyContent: 'center'
  },
  startButton: {
    fontSize: 30,
    color: 'white',
    backgroundColor: 'green',
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
});

AppRegistry.registerComponent('FastingTimer', () => FastingTimer);
