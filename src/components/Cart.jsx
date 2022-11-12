import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Button, SafeAreaView, Modal } from 'react-native';
import {emitConfig} from "./Home"
import { Icon } from 'react-native-elements'

// 
const Cart = ({route, navigation}) => {

    const [amountTaken, setAmountTaken] = useState(1);
    // const [total, setTotal] = useState(0);
    // const [priceSum, setPriceSum] = useState(0);

  // const delivery = 'Not Available'

  const items =  route.params.item;

  // const tax = 15;
  console.log(items)

  // let sum = 0;

  // useEffect(() => {  

  //   // items.forEach((item) => {
  //   //  sum = sum + item.price;
  //   // });

  //   });


  //   const finalPrice = tax * sum; 

  //   // console.log(sum)
  //   setPriceSum(sum)
  //   // setTotal(finalPrice)

  return (
    <View  style={styles.container}>

    <Text style={styles.title}>{}</Text>
   {/* <View style={styles.subContainer}> */}
   
 
   {items.map((data, key) => {
       return <View style={styles.food} key={key}>
         <Image source={data.image} style = {styles.imageJS} key={data.id}/>
  

    <View style={styles.textStyle}>
        <Text style={{ color: '#2e2f30', marginBottom: 10 }}>{data.title}</Text>
        <View style={styles.priceStyle}>
          <Text style={{ color: '#2e2f30', fontSize: 12 }}>R{data.price}</Text>
        </View>
      </View>


    <View style={styles.counterStyle}>

    <Icon raised size={16} name='remove' type='material' color='#517fa4'
      onPress={()=> setAmountTaken(amountTaken - 1)}
    />
      <Text style={styles.amount}>{amountTaken}</Text>  
    <Icon raised size={16} name='add' type='material' color='#517fa4'
    onPress={()=> setAmountTaken(amountTaken + 1)}
    />
   </View>  

    </View>;
  })}

   <TouchableOpacity
   activeOpacity={0.7}
   onPress={()=>navigation.navigate('Pay')}
   style={styles.touchableOpacityStyle}>
   <Icon name="payment" type='material' size={26} color='#517fa4'/>
   <Text style={{color: 'white', fontSize: 20,  }}> Pay Now </Text>
 </TouchableOpacity>


{/* Modal Sreen */}
{/*
<Modal
transparent={true}
visible={true}
>
<View style={{width: '100vw', height: '30vh', background: 'orange', marginTop: '70vh', borderTopRightRadius: 20, borderTopLeftRadius: 20, padding:20}}>

  <Text style={styles.cartText}>Subtotal {priceSum}</Text>
  <Text style={styles.cartText}>Tax  {tax}</Text>
  <Text style={styles.cartText}>Delivery {delivery}</Text>
  <Text style={{fontSize: 24, marginTop: 20, marginBottom: 20}}>TOTAL {priceSum}</Text>
  <View style={{borderRadius:'20', height:'8vh', }}><Button title='CheckOut'/></View>
</View>
</Modal>
*/}
{/* Modal Sreen */}

    </View>
  
    )}


// define your styles
const styles = StyleSheet.create({
  container: {
      flex: 1,
      display: 'flex',
      height: '100vh',
  },
  cartText:{

    fontSize: 18,
    marginTop: 20,
    backgroundColor: 'red',

  },

  imageJS:{

    height: '10vh',
    width: '20vw', 
    marginRight: 20,
    borderRadius: '15'

    },
    food:{
      width: '100vw',
      // height: '11vh',
      flexDirection: 'row',
      marginBottom: 5,
      // justifyContent: 'space-around',
      // textAlign: 'center',
      borderWidth: 1,
      borderColor: 'grey',
      // backgroundColor: 'yellow',
     
    },
    textStyle: {
      flex: 2,
      justifyContent: 'center'
    },
    priceStyle: {
      backgroundColor: '#ddd',
      width: 40,
      alignItems: 'center',
      marginTop: 3,
      borderRadius: 3
    },

    counterStyle: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginEnd: '5vw',
      // backgroundColor: 'red'
    },
    amount:{

      fontSize: 25,
      
    },
    touchableOpacityStyle: {
      position: 'absolute',
      width: '40vw',
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20,
      right: 30,
      bottom: 30,
      justifyContent: 'space-around',
      backgroundColor: 'blue',
      flexDirection: 'row',

    },
   
});


export default Cart