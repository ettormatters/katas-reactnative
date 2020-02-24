import React, { Component } from 'react'
import ReactNative, {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native'
// import Box from './box'
import Icon from 'react-native-vector-icons/Ionicons'
import colors from '@/runner/colors'

const Box = (props) => <View style={[{margin:2, width:40, height:40, backgroundColor: '#e53935'}, props.style]} />

const altboxColor = 'yellow'
const FlexSize = (props) => {
  return (
    <View style={StyleSheet.container}>
      <View style={{flex:0.1}}>
        <Box style={{flex:0.7}}/>
        <Box style={{backgroundColor: altboxColor}}/>
        <Box/>
        <Box style={{flex:0.3, backgroundColor: altboxColor}}/>
      </View>
      <View style={{flex:0.1}}> 
        <Box style={{flex: 1}}/>
        <Box style={{backgroundColor: altboxColor}}/>
        <Box/>
        <Box style={{flex:1, backgroundColor: altboxColor}}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flex :1,
    flexDirection:'row',
    backgroundColor:colors[1],
  },
});

FlexSize.displayName = 'FlexSize'
import FlexSizeTest from './FlexSize.test'
export {FlexSize, FlexSizeTest}
