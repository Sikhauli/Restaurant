import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Button, SafeAreaView, Modal } from 'react-native';
import {emitConfig} from "./Home"
import { Icon } from 'react-native-elements'

const Cart = () => {

  return (
    <View  style={styles.container}>

      <View style={styles.container2}>
         <Text> You Have Completed The Purchase </Text> 
      </View>
   
    </View>
  
    )}


// define your styles
const styles = StyleSheet.create({
  container: {
      flex: 1,
      display: 'flex',
      height: '100vh',
      justifyContent: 'center',
      alignItems: 'center',
  },
  container2: {
    height: '50vh',
    width: '60vw',
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
},

  
   
});


export default Cart