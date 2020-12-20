import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { colors } from "material-ui/styles";
import { ScrollView } from 'react-native-gesture-handler';
import { getCarouselItems } from '../CarouselItems';
import themes from '../styles/theme.style';

const Welcome = ({ navigation }) => {

  const [activeSlide, setActiveSlide] = React.useState(0);
  const carouselItems = getCarouselItems();

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

        <TouchableOpacity onPress={() => navigation.navigate('Signup')} style={styles.signup}>
          <Text style={styles.signText}> Sign up </Text>
        </TouchableOpacity>

        <View style={styles.loginContainer}>
          
          <Text style={styles.loginTextOne}>Existing User?</Text>
          
          <TouchableOpacity onPress={() => { navigation.navigate('Login') }}>
            <Text style={styles.loginTextTwo}> Login </Text>
          </TouchableOpacity>
          
        </View>

      </ScrollView>
    </View>
  );
};
export default Welcome;

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
  loginTextOne: { fontSize: hp('2%') },
  loginTextTwo: {
    flex: 1, color: themes.BACKGROUND_COLOR, fontSize: hp('2%')
  }
});