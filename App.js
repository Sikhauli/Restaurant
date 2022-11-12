import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from './src/components/login';
import SignUp from './src/components/signup';
import Home from './src/components/Home';
import Cart from './src/components/Cart';
import Pay from './src/components/Pay';
import Profile from './src/components/Profile'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' options={{title:'Login'}}>
          {(props) => <Login {...props} />}
        </Stack.Screen>

        <Stack.Screen name='SignUp' options={{title:'SignUp'}}>
          {(props) => <SignUp {...props} />}
        </Stack.Screen>

        <Stack.Screen name='Home' options={{title:'Home'}}>
          {(props) => <Home {...props} />}
        </Stack.Screen>

        <Stack.Screen name='Cart' options={{title:'Cart'}}>
        {(props) => <Cart {...props} />}
        </Stack.Screen>

        <Stack.Screen name='Profile' options={{title:'Profile'}}>
        {(props) => <Profile {...props} />}
        </Stack.Screen>

        <Stack.Screen name='Pay' options={{title:'Pay'}}>
        {(props) => <Pay {...props} />}
        </Stack.Screen>


      </Stack.Navigator>
    </NavigationContainer>


    // <Cart/> .  HOMEBREW_NO_INSTALL_CLEANUP

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
