import React from 'react';
import { TextInput, ActivityIndicator, StyleSheet, Text, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import { Image, View } from 'react-native';
import { Button } from 'react-native-paper';
import firebase from '@react-native-firebase/auth';
import { LoginInputValidation } from '../validation/InputValidation';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { colors } from 'material-ui/styles';
import themes from '../styles/theme.style';
import { ScrollView } from 'react-native-gesture-handler';
import {addUser} from '../redux/actions/userAction';
import { connect } from 'react-redux';
import { Dispatch } from 'react-redux';

const SignIn = ({ navigation,cartItems,loginClick }) => {

  const [username, setUsername] = React.useState('');
  const [usernameErr, setUsernameErr] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [indicatiorStatus, setIndicatiorStatus] = React.useState(false);
  const [passwordErr, setPasswordErr] = React.useState('');
  const image = require('../assets/images/Login/loginBackground2.jpg');

  const avatarImage = require('../assets/images/Login/avatar1.png');

  function formValidate() {
    let formValidations = [];
    formValidations = LoginInputValidation(
      username,
      password
    );

    const usernameErrmsg = formValidations.find(
      (obj) => obj.fieldName == 'Username',
    );
    usernameErrmsg != undefined
      ? setUsernameErr(usernameErrmsg.messages[0])
      : setUsernameErr('');

    const passwordErrmsg = formValidations.find(
      (obj) => obj.fieldName == 'Password',
    );
    passwordErrmsg != undefined
      ? setPasswordErr(passwordErrmsg.messages[0])
      : setPasswordErr('');

    if (formValidations.length == 0) {
      dashboard();
    }

  }

  const dashboard = () => {
    setIndicatiorStatus(true);
    firebase().signInWithEmailAndPassword(username, password).then(async () => { 
      loginClick(username);
      setIndicatiorStatus(false);      
      cartItems.length!=0 ? navigation.navigate('Checkout') : navigation.navigate('Products');
    }).catch(function (error) {
      setIndicatiorStatus(false);
      setUsernameErr(error.userInfo['message'].split('.')[0]);
    })
  };

  const passwordReset = () => {
    username != '' ?
      firebase().sendPasswordResetEmail(username)
        .then(() => {
          alert('Password reset email has been sent successfully');
        }).catch((error) => {
          setUsernameErr(error.message);
        }) : alert('Please Enter Username to reset the password');
  }

  return (
    <ScrollView>
      <ImageBackground source={image} style={styles.imageBackground}>
        <Image source={avatarImage} style={styles.imageSrc} />
        {
          indicatiorStatus ?
            <View style={styles.activityViewContainer}>
              <ActivityIndicator color={themes.BACKGROUND_COLOR} size={60} animating={indicatiorStatus} hidesWhenStopped={false}>
              </ActivityIndicator>
            </View> :
            <View style={styles.textView}>

              <TextInput
                dense={true}
                mode="flat"
                autoCapitalize='none'
                placeholder="Username"
                placeholderTextColor={colors.darkBlack}
                style={styles.TextInput}
                value={username}
                onChangeText={(username) => {
                  setUsername(username);
                }}

                autoFocus={true}
              />
              <Text style={styles.errorText}>{usernameErr}</Text>
              <TextInput
                mode="flat"
                autoCapitalize='none'
                placeholder="Password"
                placeholderTextColor={colors.darkBlack}
                style={styles.TextInput}
                value={password}
                onChangeText={(password) => {
                  setPassword(password);
                }}

                secureTextEntry={true}
              />
              <Text style={styles.errorText}>{passwordErr}</Text>

              <Button
                mode="contained"
                style={styles.button}
                onPress={formValidate}>
                Login
          </Button>

              <View style={styles.loginContainer}>         
                <TouchableOpacity onPress={passwordReset}>
                  <Text style={styles.loginTextTwo}> Forgot password? </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { navigation.navigate('Signup') }}>
            <Text style={styles.account}>Create an account</Text>
          </TouchableOpacity>
              </View>
              
            </View>

        }
      </ImageBackground>

    </ScrollView>
  );
};

const mapStateToProps = (state) => ({
  cartItems : state.cart.cart  
})

const mapDispatchToProps = dispatch => {
  return {
    loginClick : (username) => {
      dispatch(addUser(username));
    }
  };
} 

export default connect(mapStateToProps,mapDispatchToProps)(SignIn);


const styles = StyleSheet.create({

  imageBackground: {
    height: hp('93%'), width: wp('100%'), flex: 1, justifyContent: 'center'
  },
  imageSrc: {
    width: wp('20%'), height: hp('10%'), marginLeft: wp('38%'), marginTop: hp('30%')
  },
  textView: {
    flex: 1, alignSelf: 'center', marginTop: hp('0%')
  },
  TextInput: {
    marginTop: hp('2%'),
    backgroundColor: colors.white,
    height: hp('5%'),
    width: wp('80%'),
  },
  errorText: {
    fontSize: hp('1.6%'),
    color: 'red',
  },

  button: {
    height: hp('5%'),
    width: wp('80%'),
    marginTop: hp('1%'),
    backgroundColor: themes.BACKGROUND_COLOR
  },
  loginContainer: {
    flex: 1, flexDirection: "row", alignSelf: "center", marginTop: hp('2%')
  },
  loginTextOne: { fontSize: hp('2%') },
  loginTextTwo: {
    flex: 1, color: themes.BACKGROUND_COLOR, fontSize: hp('2%')
  },
  activityViewContainer: {
    flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: hp('0%')
  },
  account : {
    fontSize:hp('2%'), color : colors.blue300
  }

});

