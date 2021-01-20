import React, { Component } from 'react';

import {
	Image,
	TouchableOpacity,Text
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Logo = (props) => {

  const goHome = () => {
      props.navigation.navigate('Products');
  }
 
    return (
      
      <TouchableOpacity onPress={goHome}>
          <Image source={props.logoImage} style={{width:wp('12%'), height:hp('5%')}}/>                    
        </TouchableOpacity>
      
    );
 
}

export default Logo;