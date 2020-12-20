import React, { Component } from 'react';

import {
	Image,
	TouchableOpacity
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const logoImage = require("../assets/images/Checkout/cart-icon-2.png");

const Logo = (props) => {

  const goHome = () => {
      props.navigation.navigate('Products');
  }
 
    return (
      <TouchableOpacity onPress={goHome}>
          <Image source={logoImage} style={{width:wp('12%'), height:hp('5%')}}/>
      </TouchableOpacity>
    );
 
}

export default Logo;