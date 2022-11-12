{/*
import { View, Text, StyleSheet, ScrollView, Linking, TouchableOpacity, Button } from 'react-native'
import React, { useState } from 'react'
import { auth, db } from "../../config/firebase";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from "firebase/firestore"
import {TextInput} from 'react-native-paper';

const SignUpScreen = ({ navigation }) => {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');

  const onCreateAccountPressed = () => {
    console.warn('onCreateAccountPressed');

  }

  const onSignInGoogle = () => {
    console.warn('onSignInGoogle');
  }

  const onSignInPressed = () => {
    console.warn('Sign in');

  }


  const handleSignUp = () => {
    if (email === '') {
      //email empty
      //setErrMsg('Email is required to register');
      alert('Email is required to register');
    } else {
      if (password === '') {
        //new password empty
        //setErrMsg('Password is required to register');
        alert('Wrong password')
      } else {
        if (confirmpassword === '') {
          //confirm password empty
          alert('Wrong Password')
          //setErrMsg('Confirm password is required to register');
        } else {
          createUserWithEmailAndPassword(auth, email, password).then(
            userCredentials => {
            const collectionRef = collection(db, "profiles");
            const profile = {
              firstname: firstname,
              lastname: lastname,
              email: email,
            };

            addDoc(collectionRef, profile).then(() => {
              alert("Registered successfully");
              navigation.navigate('Login')
            }).catch((err) => {
              console.log(err);
            })
          }).catch(error => alert(error.message))
        }
      }
    }

  }

  return (

    <View style={styles.root}>
      <View>
        <Text style={{ color: '#20DC49', fontSize: 30, fontWeight: 'bold', marginTop: '5vh' }}>Sign Up</Text>
      </View>
      <View>
        <Text style={styles.title1}>GetEatCheap</Text>
      </View>
      <View style={{ alignItems: 'center', flexDirection: 'row', marginTop: 20 }}>
        <View style={styles.line1}></View>
        <Text style={{ color: '#20DC49', marginLeft: 10, marginRight: 10, fontSize: 10 }}>Or continue with</Text>
        <View style={styles.line2}></View>
      </View>

      <View style={{ marginTop: 30 }}>
      

        <TextInput style={styles.inputText} onChangeText={value => setEmail(value)}  placeholder='Email' />
        </View>
        <View>
        <TextInput style={styles.inputText} onChangeText={value => setFirstName(value)}  placeholder='FirstName' />
        </View>
        <View>
        <TextInput style={styles.inputText} onChangeText={value => setLastName(value)}  placeholder='LastName' />
        </View>
        <View>
        <TextInput style={styles.inputText}  onChangeText={value => setPassword(value)}  secureTextEntry placeholder='Password' />
        </View>
        <View>
        <TextInput style={styles.inputText}  onChangeText={value => setConfirmPassword(value)}   placeholder='Verify Password'  secureTextEntry/>

      </View>
   
      <View>
        <Button title='Create Account' onPress={handleSignUp} />
      </View>
      
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <Text style={{ color: '#fff' }}>Have an account?</Text>
        <TouchableOpacity style={{ color: '#20DC49' }}
          onPress={() => navigation.navigate('Login')}>SignIn
        </TouchableOpacity>
      </View>


    </View>

  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#1D2D44',
    alignItems: 'center',
    height: '100%'
  },
  title1: {
    fontSize: 25,
    //fontWeight: 'bold',
    color: '#20DC49',
    margin: 10,
    marginTop: 25,

  },
  title2: {
    fontSize: 15,
    color: '#50E683',
    margin: 10,
  },
  line1: {
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    width: 160,
    marginLeft: -35

  },
  line2: {
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    width: 160,
    marginRight: -35
  },
  inputText:{
    width: '60vw',
    height: '5vh',
    paddingLeft: '3vw',
    marginBottom: '2vh'

  }

});

export default SignUpScreen

*/}


import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity  } from 'react-native';
import { auth } from '../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc, getFirestore } from "firebase/firestore";

const Register = ({navigation}) => {
    //states for error
    const [errMsg, setErrMsg] = useState('');

    //states for new user
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [bio] = useState('');

    const db = getFirestore();


    //function to register new user with email and password
    const registerWithEmail = async() => {
        console.log(email);
        //check if inputs are empty
        if (email === '') {
            //email empty
            setErrMsg('Email is required to register');
            alert('Email is required to register');
        } else {
            if (password === '') {
                //new password empty
                setErrMsg('Password is required to register');
            } else {
                if (confirmPassword === '') {
                    //confirm password empty
                    setErrMsg('Confirm password is required to register');
                } else {
                    if (password !== confirmPassword) {
                        //pasword does not match
                        setErrMsg('Passwords entered does not match');
                    } else {
                        //good to go
                        await createUserWithEmailAndPassword(auth, email, password).then(
                            userCridential => {
                                setErrMsg('');
                                const collectionRef = collection(db, "profiles");
                                const profile = {
                                  FirstName: FirstName,
                                  LastName: LastName,
                                  email: email,
                                 
                                };
        
                                addDoc(collectionRef, profile).then(() => {
                                    alert("Registered successfully");
                                    navigation.navigate('Home')
                                }).catch((err) => {
                                    console.log(err);
                                })
                            }
                        ).catch(
                            err => {
                                setErrMsg(err.message);
                            }
                        )
                    }
                }
            }
        }
    }
  return (
    <View style={{backgroundColor:"milk",alignContent: 'center', justifyContent: 'center', alignItems: 'center',}}>
    <View style={styles.container}>
        <View style={styles.content}>
        <View><Text style={styles.head}>Register</Text></View>
        {errMsg !== '' ? (<View><Text style={styles.badErr}>{errMsg}</Text></View>) : (<View><Text style={styles.goodErr}></Text></View>) }
        <View >
            <View>
                <TextInput style={styles.input} onChangeText={value => setEmail(value)}  placeholder='Email' />
            </View>
            <View>
                <TextInput style={styles.input} onChangeText={value => setFirstName(value)}  placeholder='FirstName' />
            </View>
            <View>
                <TextInput style={styles.input} onChangeText={value => setLastName(value)}  placeholder='LastName' />
            </View>
            <View>
                <TextInput style={styles.input}  onChangeText={value => setPassword(value)}  secureTextEntry placeholder='Password' />
            </View>
            <View>
                <TextInput style={styles.input}  onChangeText={value => setConfirmPassword(value)}   placeholder='Confirm Password'  secureTextEntry/>
            </View>
            <View style={styles.lgn} >
            <TouchableOpacity style={styles.btn } color="#000" title='Register' onPress={registerWithEmail} >
            <Text style={{color:'white'}}>Register</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.acc} >
                <Text color="white" onPress={() => navigation.navigate('Login')}>Already registered <Text style={styles.in} >login</Text></Text>
            </View>
        </View>
        </View>
    </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100,
        marginLeft: '20vw',
        marginRight: '20vw',
        backgroundColor: "#ccc",
        height: 500,
        width: '80vw',
        borderRadius: 20,
    },
    head:{
        fontSize: 30,
        fontWeight: '700',
    },
    badErr: {
        backgroundColor: '#FF0000',
        color: '#FFFFFF',
    },
    goodErr: {
        backgroundColor: '#00FF00',
        color: '#FFFFFF',
    },
    content:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ccc',
    },
    input:{
        borderWidth:  1,
        backgroundColor: '#fff',
        marginTop: 20,
        width:200,
        borderColor:'#96DED1',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        borderRadius: 10,
        color:'#A09999',
        paddingLeft: 20,
    },
    btn:{
        borderRadius:35,
        borderRadius: 10,
        width:189,
        height:46,
        color:'white',
        backgroundColor:'#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    lgn:{
        marginTop: 20,
        color: "#000"
    },
    acc:{
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff'
    },
    in:{
        color:'#000',
        textDecorationLine: 'underline',
    },
})

export default Register