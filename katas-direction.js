import React, { Component } from 'react';
import ReactNative, {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native'
//import Box from './box'
import Icon from 'react-native-vector-icons/Ionicons'
import colors from '@/runner/colors'

const Box = (props) => <View style={[{margin:2, width:40, height:40, backgroundColor: '#e53935'}, props.style]} />

const Direction = (props) => {
  return (
    <View style={styles.container}>
      <Box/>
      <Box/>
      <Box/>
      <View style={{flexDirection: 'row'}}>
        <Box/>
        <Box/>
        <Box/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor : color[3],
  },
  text : {
    color : 'white',
    textAlign : 'center'
  }
});

Direction.displayName = 'Direction'
import DirectionTest from './Direction.test'
export {Direction, DirectionTest}
