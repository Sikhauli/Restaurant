//import liraries
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button, SafeAreaView } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { Data } from '../Data/Data';
import {Drinks} from '../Data/Drinks';
import {Meal} from '../Data/Meal';
import { Icon } from 'react-native-elements'


const Home = ({navigation}) => {

  const [itemCount, setItemCount] = useState(0);
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(Data);

   console.log(items);

    const display1 = () =>{
        setPage(Data)
    }

    const display2 = () =>{
        setPage(Drinks)
    }

    const display3 = () =>{
        setPage(Meal)   
    }

    return (

        <View style={styles.container}>

            {/* reverse  or raised */}
        <View style={styles.topView}>
          <View style={{ width: '50vw'}}>
            <Icon 
            style={styles.profile}
            reversed size={26} name='person' type='material' color='#517fa4'
            onPress={() => navigation.navigate('Profile', {
                item: items })} />
          </View>
        
          <View style={{ width: '50vw', height: '10vh'}}>
            <Icon 
            style={styles.cart}
             name="shop" type='material' size={26} color='#517fa4'
                onPress={() => navigation.navigate('Cart', {
                item: items
            })}/>
            <View style={styles.cartCounter}>{itemCount}</View>
            </View>
        </View>
           
         
            <Text style = {styles.head} > Food Categories </Text>
           <View style = {styles.imageNav}>

            <TouchableOpacity style={styles.button} onPress={display1} >
                <Text style= {styles.textCat}>Meat</Text>
            </TouchableOpacity>
        {/* set state then call the data based on whats selected */}
            <TouchableOpacity style={styles.button} onPress={display2} >
                <Text style= {styles.textCat}>Drinks</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={display3} >
                <Text style= {styles.textCat}>Meals</Text>
            </TouchableOpacity>

            </View>


            <View style={styles.subContainer}>

                  {page.map((data, key) => {
                     return <View style={styles.food} key={key}>

                        <Text style={styles.textJS} >{data.title}</Text>
                        <Image source={data.img} style = {styles.imageJS} key={data.id}/>
                        <Text style={styles.textJS}>{data.price}</Text>
                        <Button
                          title="Add To Cart"
                          color="#cccccc"
                         
                          onPress={() => {
                            setItemCount(itemCount + 1)
                           items.push({
                                key: data.id,
                                price: data.price,
                                title: data.title,
                                image: data.img,         
                                })
                              }
                            }
                        />
                   </View>;
                   })}

            </View>


        </View>

   
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
    },
    gates: {
        width: '32vw',
        height: '10vh',
        marginLeft: '1vw',
        borderRadius:'10%',
        overflow: 'hidden'

        },
    gates1: {
        width: '32vw',
        height: '10vh',
        marginLeft: '1vw',
        borderRadius:'10%',
        overflow: 'hidden'

        },

    head: {

    //   marginTop: '5vh',
      height: '5vh',
      width: '100vw',
      textAlign: 'center',
      textTransformations:'uppercase',
      fontWeights:'bold',

    },
    imageNav: {

       height: '15vh',
       width: '100vw',
       flexDirection: 'row'

    },
    textCat:{
       textAlign: 'center',
       justifyContent: 'center',
        marginTop: '.8vh'
    },

    subContainer:{

    height: '60vh',
    width: '100vw',
    alignItems: 'center',
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginTop: '-9vh',
    marginBottom: '10vh',
   

    },
    food:{

    width: '32vw',
    marginLeft: '1vw',
    height: '21vh',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'grey',

    },

    textJS:{

     color:'white',
     flexGrow:1,
     color: 'black'

    },

    imageJS:{

    height: '12vh',
    width: '30vw'

    },
    button:{

    height: '4vh',
    width: '33vw',
    borderColor: 'grey',
    borderWidth: 1,
    marginLeft: '.1vw',
    backgroundColor: '#cccccc'
    },
    cart:{
    alignItem: 'right',
    flexDirection: 'row-reverse',
    justifyContent: 'start',
    marginLeft: '43vw',
    width: '10vw',
    },
    cartCounter:{
        color: 'red',
        size: '10',
        marginStart: '40vw',

    },
    profile:{
        alignItem: 'left',
        flexDirection: 'row-reverse',
        justifyContent: 'start',
        marginRight: '90vw',
        width: '10vw',
       
        },
    topView:{

        width: '100vw',
        // backgroundColor: 'yellow',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'end',
        marginBottom: '-5vh'


    }
});

export default Home;
