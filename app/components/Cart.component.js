import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	TouchableOpacity,
	Animated,
	ImageBackground
} from 'react-native';
import { Badge, Avatar } from 'react-native-elements';
import { connect } from 'react-redux';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export class Cart extends Component {
	constructor(props) {
		super(props);

		this.state = {
			opacity: new Animated.Value(1),
			cartImg: require("../assets/images/Checkout/cart-icon-2.png")
		};
	}


	UNSAFE_componentDidMount() {

	}
	UNSAFE_componentWillReceiveProps(nextProps) {
		if (nextProps.cartItems !== this.props.cartItems) {
			this.startAnimation();
		}
	}

	startAnimation() {
		Animated.timing(this.state.opacity,
			{
				toValue: 0,
				duration: 500
			}).start(() => {
				setTimeout(() => {
					this.endAnimation()
				}, 100);
			})
	}

	endAnimation() {
		Animated.timing(this.state.opacity,
			{
				toValue: 1,
				duration: 500
			}).start()
	}

	onPress = () => {
		this.props.navigation.navigate('Checkout');
	}
	render() {
		const { cartItems } = this.props;
		let animatedStyle = { opacity: this.state.opacity }
		return (

			<View >
				<ImageBackground source={this.state.cartImg} style={{ marginRight: wp('5%'), width: wp('12%'), height: hp('5%') }}>
					<Badge onPress={this.onPress} value={cartItems.length} containerStyle={{ position: 'absolute', marginLeft: wp('6%'), marginStart: hp('5%') }} />
				</ImageBackground>
			</View>


		);
	}
}

const mapStateToProps = (state) => ({
	cartItems: state.cart.cart
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	cart: {
		color: 'white',
		fontSize: 14,
		marginRight: 50
	}
})

export default connect(
	mapStateToProps
)(Cart);
