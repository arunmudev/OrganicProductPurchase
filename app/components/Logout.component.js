import React, { Component } from 'react';

import {
	Image,
	TouchableOpacity,Text,View, Alert
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { connect } from 'react-redux';
import { removeUser } from '../redux/actions/userAction';
import { emptyCart } from '../redux/actions/cartActions';

const Logout = ({navigation,logoutClick,user}) => {

 
    return (   
      <View>
        { user.length !=0 ?
      <TouchableOpacity onPress={() =>{
        logoutClick();
        Alert.alert("","User logged out successfully!");
        navigation.navigate('Welcome');
      }}>            
        <Text style={{marginRight:10,fontSize:hp('2%')}}>Log out</Text>        
        </TouchableOpacity>   : null  
    }
    </View>
    );
 
}

const mapStateToProps = state => ({
    user : state.user.user
})

const mapDispatchToProps = dispatch => {
    return {
        logoutClick : () => {
            dispatch(removeUser());
            dispatch(emptyCart());
        }
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Logout);