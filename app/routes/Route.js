import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Products from '../pages/Products';
import Checkout from '../pages/Checkout';
import Receipt from '../pages/Receipt';

import themes from '../styles/theme.style';
import {NavigationContainer} from '@react-navigation/native';
import Logo from '../components/Logo.component';
import Cart from '../components/Cart.component';
import Welcome from '../pages/Welcome';
import Login from '../pages/Login';
import Signup from '../pages/Signup';

export default function Route(){
	const stack =createStackNavigator();
	return(
		<NavigationContainer>
			<stack.Navigator initialRouteName="Welcome" screenOptions={{
				headerStyle: {
					  		backgroundColor: themes.BACKGROUND_COLOR,
					  		
					  	},
						  headerTintColor: '#fff',
						  headerTitle: 'Organic Product Purchase',
						  headerShown : true
					  }
			}>
				<stack.Screen name="Products" component={Products} options={({ navigation }) => ({title: 'Products',
					headerRight: () => ( <Cart navigation={navigation}/>
						)
  				})}/>
				<stack.Screen name="Checkout" component={Checkout} options={({ navigation }) => ({title: 'Products',headerLeft: () => (<Logo navigation={navigation}/>)					
						
  				})}/>
				<stack.Screen name="Receipt" component={Receipt} options={({ navigation }) => ({title: 'Products',headerLeft: () => (<Logo navigation={navigation}/>),					
  				})}/>
				  <stack.Screen name="Welcome" component={Welcome} />
        <stack.Screen name="Login" component={Login} />
        <stack.Screen name="Signup" component={Signup} />          
			</stack.Navigator>
		</NavigationContainer>
	);
} 