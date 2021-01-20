import React from 'react';
import { View, Text, Image,ActivityIndicator, StyleSheet, TouchableOpacity, Button, Alert } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { colors } from "material-ui/styles";
import { ScrollView } from 'react-native-gesture-handler';
import { getCarouselItems } from '../CarouselItems';
import themes from '../styles/theme.style';
import { connect } from 'react-redux';

const Welcome = ({ navigation, user }) => {

  const [activeSlide, setActiveSlide] = React.useState(0);
  const carouselItems = getCarouselItems();
  const [indicatiorStatus, setIndicatiorStatus] = React.useState(false);

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.renderStyle}>
        <Image source={item.image} style={styles.image} resizeMethod="auto" resizeMode="stretch" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView>
      {
          indicatiorStatus ?
            <View style={styles.activityViewContainer}>
              <ActivityIndicator color={themes.BACKGROUND_COLOR} size={60} animating={indicatiorStatus} hidesWhenStopped={false}>
              </ActivityIndicator>
            </View> : 
        <View>
        <Text style={styles.headerText}>
          World's Largest online organic product market</Text>                           
        <Carousel
          data={carouselItems}
          renderItem={renderItem}
          sliderWidth={wp('100%')}
          itemWidth={wp('100%')}
          startAutoplay={true}
          autoplay={true}
          onSnapToItem={(index) => setActiveSlide(index)}
          enableSnap={true}
          loop={true}
        />      
        <Pagination
          dotsLength={5}
          activeDotIndex={activeSlide}
          dotStyle={{
            backgroundColor: colors.purple800,
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
        <Button
          color={themes.BACKGROUND_COLOR}
          title="Skip Sign in"
          mode="contained"
          onPress={() => {            
              setIndicatiorStatus(true);
              navigation.navigate('Products');  
              setIndicatiorStatus(false);                        
          }} />
        <View style={styles.loginContainer}>
          <Text style={styles.loginTextOne}>Sign in for the best Experience</Text>
          <TouchableOpacity onPress={() => {
            user.length != 0 ? Alert.alert("", "User Already logged in",
              [{ text: 'OK', onPress: () => navigation.navigate('Products') }]) : navigation.navigate('Login')
          }}>
            <Text style={styles.loginTextTwo}> Sign in </Text>
          </TouchableOpacity>
        </View>   
        </View>
}   
      </ScrollView>
    </View>
  );
};

const mapStateToProps = state => ({
  user: state.user.user
})

export default connect(mapStateToProps)(Welcome);

const styles = StyleSheet.create({
  container: {
    height: hp('100%'), backgroundColor: colors.white
  },
  headerText: {
    fontSize: hp('2%'), marginTop: hp('5%'), color: colors.grey500, alignSelf: 'center', textAlignVertical: 'center'
  },
  image: {
    width: wp('100%'), height: hp('50%')
  },
  signup: {
    backgroundColor: themes.BACKGROUND_COLOR, width: wp('80%'), height: hp('6%'), borderRadius: 8, alignSelf: "center"
  },
  signText: {
    flex: 1, color: 'white', alignSelf: 'center', textAlignVertical: 'center', fontSize: hp('2.5%'), fontWeight: "400"
  },
  renderStyle: {
    marginTop: hp('5%'),
    height: hp('50%'),
    width: wp('50%'),
  },
  loginContainer: {
    flex: 1, flexDirection: "row", alignSelf: "center", marginTop: 10
  },
  activityViewContainer: {
    flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: hp('0%')
  },
  loginTextOne: { fontSize: hp('2%') },
  loginTextTwo: {
    flex: 1, color: themes.BACKGROUND_COLOR, fontSize: hp('2%')
  }
});