import React, { Component } from 'react';
import {View,Text,Image,StyleSheet,TouchableOpacity} from 'react-native';
import { Rating, AirbnbRating } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import themes from '../styles/theme.style';
import { colors } from 'material-ui/styles';

const Product = (props) => {
    addToCart = () => {
        props.addItemsToCart(props.item)
    }
    
    const { product } = props;
        return (
        <View style={styles.container}>
            <Image source={product.picture} style={{width:150,height:150}}/>
            <View style={styles.productDes}>
                <Text style={{fontSize:hp('2%')}}>{product.title}</Text>
                <Rating 
                    ratingCount={5}
                    startingValue={product.ratings}
                    type="star"
                    readonly={true}
                    imageSize={20}
                /><Text>{product.reviews} +reviews </Text>
                <Text style={{fontSize:hp('3%'),color:colors.red500}}>${(product.cost).toFixed(2)}</Text>
                <Text>{product.qty}</Text>
                <TouchableOpacity onPress={addToCart} style={styles.addBtn}>
                    <Text style={styles.text}>Add to cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    );    
}

const styles = StyleSheet.create({
    container:{
        flex: 1,                
        alignItems: 'center',
        margin: 1,        
        justifyContent : 'center'
    },
    productDes: {    
        alignItems: 'center',
        marginTop: 10,
        justifyContent : 'center'
    },
    addBtn: {
        borderRadius: 30,
        margin: 10,
        backgroundColor: themes.BUTTON_COLOR
    },
    text: {
        color: '#fff',
        fontSize: 16,
        padding: 10
    }
});

export default Product;
