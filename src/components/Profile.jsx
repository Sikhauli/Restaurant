import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, TextInput,Button,TouchableOpacity,Image } from 'react-native'
// import Icon from 'react-native-vector-icons/FontAwesome';
import { auth } from '../config/firebase';
import { signOut } from 'firebase/auth';
import { getDocs, collection, query, where,  addDoc, getFirestore } from 'firebase/firestore';
import { Icon } from 'react-native-elements'

// import * as ImagePicker from 'expo-image-picker';
// import {getStorage, ref, uploadBytes,getDownloadURL} from 'firebase/storage'
// import { getFirestore } from "firebase/firestore";

const db = getFirestore();

const Profile =()=>{
  const [email, setEmail] = useState('');

  const [profile, setProfile] = useState({});

  const productsCollection = collection(db, 'profiles')

    const getProfile = async() =>{
        const q = query(productsCollection, where('email', '==', auth.currentUser.email));
        const querySnapShots = await getDocs(q);
    
        let tmpProfile = [];
    
        querySnapShots.forEach(
        (profile) => {
            console.log(profile.data());
        //   tmpProfile.push({...profile.data(), id: profile.id});
          tmpProfile = profile.data();
          console.log(tmpProfile);
        }
        );
    
        setProfile(tmpProfile);
    }

      console.log(profile)

    useEffect(()=>{
        // console.log( auth.currentUser.email);
        getProfile();
      },[])
      //=================================================================================================
  useEffect(()=>{
    if (auth.currentUser) {
      setEmail(auth.currentUser.email);
    } else {
      navigation.navigate('Login');
    }
  }, []);
  const logout = async() => {
    await signOut(auth).then(
      ()=> {
        navigation.navigate('Splash');
      }
    )
  }


    return(
        <View style={styles.container}>
            <View style={styles.nav}>                
                <Text style={styles.text1Profile}>Profile</Text>
            </View>
            <View>
                <TouchableOpacity>
                    <View style={styles.profilePicTab}>
                        <Icon style={styles.userIcon} name="person" size={100} color="#fff"/>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{alignSelf:'center',marginTop:-75}}>
            </View>
            <View>
                <View style={styles.inputs}>
                    <Text style={styles.textProfile}> {profile.FirstName} </Text>
                </View>
                <View style={styles.inputs}>
                    <Text style={styles.textProfile}> {profile.LastName} </Text>
                </View>
               <View style={styles.inputs}>
                    <Text style={styles.textProfile}>{profile.email}</Text>
               </View>
                
            </View>
            <View style={styles.btnHistory}>
                <TouchableOpacity style={styles.historyBtn}  onPress={()=>navigation.navigate('Home')}>Back Home</TouchableOpacity>
            </View>
        </View>
    )
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        /*flex: 1,
        justifyContent: "center",*/
        height:'100%',
        // backgroundColor:'#1D2D44',
       
    },
    nav:{
        display:'flex',
        // alignItems:'center',
        marginBottom:2,
        flexDirection:'row',
        height:'50%',
        width:'100%',
        backgroundColor: '#ccc'
    },
    logout:{
        color:'#000',
        marginLeft: "32vw",
        fontSize:12,
        marginBottom:70,
        fontSize: 16,
    },
    textStyle:{
        height:20,
        width:50,
        fontSize:100,
        color: 'lime',
        marginTop: '50%',
        marginLeft:'50%',
    },
    // textProfile:{
    //     fontSize:40,
    //     color:'#20DC49',
    //     marginLeft:-220,
    //     marginTop:50,
    // },
    listIcon:{
        marginBottom:70,
    },
    profilePicTab:{
        /*height:'70%',*/
        marginTop:20,
        width: 150,
        height: 150,
        borderRadius: '50%',
        backgroundColor: '#000',
        borderColor: '#20DC49',
        borderWidth: 2,
        marginLeft:'35%',
        marginTop:-250
    },
    userIcon:{
        // marginLeft:'1vw',
        // marginTop: '1vh'
    },
    inputs:{
        flexDirection:'row',
        marginTop:30,
        height:'25%',
        width:'70%',
        backgroundColor:'#fff',
        marginLeft:'20%',
        borderColor:'black',
        borderWidth:2,
        alignItems:'center',
        borderRadius:15,
    },
    editIcon:{
        color:'black',
    },
    historyBtn:{
        borderWidth: 2,
        borderColor:'transparent',
        backgroundColor:'#20DC49',
        width:'40%',
        height:50,
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 15,
        marginTop:100,
        marginLeft:'30%',
    },

    textProfile:{

        paddingLeft: 5,
        width: '100%',
        height: "5vh",
        fontSize: 26,
        fontFamily: "sans-serif",
        // backgroundColor: 'red'

    },
    text1Profile:{

      marginLeft: "40vw",
      // width: "15%",
      textAlign: 'center',
      height: "5vh",
      fontSize: 25,
    //   fontFamily: "sans-serif",
      // backgroundColor: 'red'

    }
    
})