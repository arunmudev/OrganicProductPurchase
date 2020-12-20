import React from 'react';
import { ScrollView, TextInput, Text, ImageBackground, StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';
import firebase from '@react-native-firebase/auth';
import { InputValidation } from '../validation/InputValidation';
import { colors } from 'material-ui/styles';
import themes from '../styles/theme.style';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const UserRegistration = ({ navigation }) => {
  const [email, setEmail] = React.useState('');
  const [emailErr, setEmailErr] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [phoneNumberErr, setPhoneNumberErr] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordErr, setPasswordErr] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [confirmPasswordErr, setConfirmPasswordErr] = React.useState('');  
  const image = require('../assets/images/Signup/loginBackground2.jpg');
  

  const formValidate = () => {
    let formValidations = [];
    formValidations = InputValidation(
      email,
      phoneNumber,
      password,
      confirmPassword,
    );

    const emailErrmsg = formValidations.find((obj) => obj.fieldName == 'Email');
    emailErrmsg != undefined
      ? setEmailErr(emailErrmsg.messages[0])
      : setEmailErr('');

    const phoneNumberErrmsg = formValidations.find(
      (obj) => obj.fieldName == 'Phonenumber',
    );
    phoneNumberErrmsg != undefined
      ? setPhoneNumberErr(phoneNumberErrmsg.messages[0])
      : setPhoneNumberErr('');

    const passwordErrmsg = formValidations.find(
      (obj) => obj.fieldName == 'Password',
    );
    passwordErrmsg != undefined
      ? setPasswordErr(passwordErrmsg.messages[0])
      : setPasswordErr('');

    const confirmPasswordErrmsg = formValidations.find(
      (obj) => obj.fieldName == 'Confirmpassword',
    );
    confirmPasswordErrmsg != undefined
      ? setConfirmPasswordErr(confirmPasswordErrmsg.messages[0])
      : setConfirmPasswordErr('');
    if (password == confirmPassword) {
      (formValidations.length == 0)
        ? registerUser()
        : console.log("");
    } else {
      setConfirmPasswordErr("Those passwords didn't match. Try again");
    }
  };

  const registerUser = async () => {
    firebase().createUserWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate("Products");
      }).catch(function (error) {
        setEmailErr(error.message);
      });
  };

  const passwordValidation = () => {
    password != confirmPassword
      ? setConfirmPasswordErr("Those passwords didn't match. Try again")
      : setConfirmPasswordErr('');
  };

  return (
    <ScrollView>
      <ImageBackground source={image} style={style.imageBackground}>
        <View style={style.textView}>
          <TextInput
            keyboardType="email-address"
            dense={true}
            mode="flat"
            placeholder="Email"
            placeholderTextColor={colors.darkBlack}
            autoFocus={true}
            style={style.TextInput}
            value={email}
            onChangeText={(email) => {
              setEmail(email);
            }}
          />
          <Text style={style.errorText}>{emailErr}</Text>

          <TextInput
            keyboardType="number-pad"
            dense={true}
            mode="flat"
            placeholder="Phone number"
            placeholderTextColor={colors.darkBlack}
            style={style.TextInput}
            value={phoneNumber}
            onChangeText={(phoneNumber) => {
              setPhoneNumber(phoneNumber);
            }}
            maxLength={10}
          />
          <Text style={style.errorText}>{phoneNumberErr}</Text>

          <TextInput
            dense={true}
            mode="outlined"
            placeholder="Password"
            placeholderTextColor={colors.darkBlack}
            style={style.TextInput}
            value={password}
            onChangeText={(password) => {
              setPassword(password);
            }}
            secureTextEntry={true}
          />
          <Text style={style.errorText}>{passwordErr}</Text>

          <TextInput
            dense={true}
            mode="outlined"
            placeholder="Confirm Password"
            placeholderTextColor={colors.darkBlack}
            style={style.TextInput}
            value={confirmPassword}
            onChangeText={(confirmPassword) => {
              setConfirmPassword(confirmPassword);
            }}
            onBlur={passwordValidation}
            secureTextEntry={true}
          />
          <Text style={style.errorText}>{confirmPasswordErr}</Text>
          <View style={style.loginButton}>
            <Button
              mode="contained"
              style={style.button}
              onPress={formValidate}>
              Sign up
          </Button>
          </View>
        </View>
      </ImageBackground>

    </ScrollView>
  );
};
export default UserRegistration;

const style = StyleSheet.create({
  imageBackground: {
    height: hp('93%'), width: wp('100%'), flex: 1, justifyContent: 'center'
  },
  imageSrc: {
    width: null, height: null, flex: 1, resizeMode: 'center'
  },
  textView: {
    flex: 1, alignSelf: 'center', justifyContent: 'center', marginTop: hp('20%'),
  },
  TextInput: {
    marginTop: hp('2%'),
    backgroundColor: colors.white,
    height: hp('5%'),
    width: wp('80%'),
  },
  errorText: {
    color: 'red',
  },
  loginButton: {
    flex: 1, flexDirection: "row", justifyContent: 'flex-start'
  },
  button: {
    height: hp('5%'),
    width: wp('80%'),
    marginTop: hp('1%'),
    backgroundColor: themes.BACKGROUND_COLOR
  },
  section: {
    flexDirection: "row",
    alignItems: 'center',
  },
});
