import React, { Component } from 'react';

import {
	View,
	Text,
	FlatList,
  StyleSheet,
  ScrollView,Button
} from 'react-native';

import CartItems  from './CartItems.component';
import CustomerForm from './CustomerForm.component';
import { TouchableOpacity } from 'react-native-gesture-handler';
import themes from '../styles/theme.style';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const CheckoutItems = (props) => {  
  
  	const { cartItems, navigation, cartTotal,user } = props;
    return (
      <View style={styles.container}>
            	
            		<View style={styles.annouc}>
            			<Text style={styles.anncText}>Please confirm your order and checkout your cart.</Text>
            		</View>
            		<View style={styles.ckitems}>
            		<FlatList 
                  data={cartItems}
            			renderItem={({item, index}) => <CartItems item={item} index={index} />}
            			keyExtractor={(item) => item.id}
            			ItemSeparatorComponent= {()=> <View style={{height:0.3, backgroundColor:'#34495e90'}}/> }
            		/>
            		<Text style={styles.text}>Total: $ {(cartTotal).toFixed(2)}</Text>	
            		</View>
            	{ user.length !=0 ?
              	<View style={styles.custForm}>
                  <ScrollView>
            			 <CustomerForm navigation={navigation}/>
                  </ScrollView> 
                </View> :                                  
                  <Button
                  color={themes.BACKGROUND_COLOR}
                  title="Please login to proceed checkout"
                mode="contained"                
                onPress={() => {
                  navigation.navigate('Login');
                }}/>                                
              }
       </View>
    );
  
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  custForm: {
    flex: 1
  },
  ckitems: {
    height: 300
  },
    annouc:{
      padding: 12,
      borderRadius: 5,
      backgroundColor: '#34495e90',
      margin: 10,
      justifyContent: 'center',
      alignItems: 'center'
    },
    text: {
      textAlign: 'center',
      color: 'red'
    },
    anncText:{
        textAlign: 'center',
        color: '#fff'  
    },
   
});


export default CheckoutItems;