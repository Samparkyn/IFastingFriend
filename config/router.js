import { TabNavigator } from 'react-navigation'
import FastingTimer from '../screens/timer-screen'
import Stats from '../screens/stats'

export const Navigator = TabNavigator(
  {
    FastingTimer: { screen: FastingTimer },
    Stats: { screen: Stats }
  },
  {
    tabBarPosition: 'bottom'
  }
);
