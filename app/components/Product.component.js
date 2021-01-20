import React, { Component } from 'react';
import { View, Text, Image,Alert, Modal, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Rating, AirbnbRating } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import themes from '../styles/theme.style';
import { colors } from 'material-ui/styles';

const Product = (props) => {
    const [modalVisible, setModalVisible] = React.useState(false);
    addToCart = () => {
        props.addItemsToCart(props.item)
        Alert.alert(" ",'Item is added successfully');
    };

    const showDescription = () => {
        setModalVisible(true);
    }

    const hideDescription = () => {
        setModalVisible(false);

    }

    const { product } = props;
    return (
        <ScrollView>


            <View style={styles.container}>
                <TouchableOpacity onPress={showDescription}>
                    <Image source={product.picture} style={{ width: 150, height: 150 }} />
                </TouchableOpacity>
                <View style={styles.productDes}>
                    <Text style={{ fontSize: hp('2%') }}>{product.title}</Text>
                    <Rating
                        ratingCount={5}
                        startingValue={product.ratings}
                        type="star"
                        readonly={true}
                        imageSize={20}
                    /><Text>{product.reviews} +reviews </Text>
                    <Text style={{ fontSize: hp('3%'), color: colors.red500 }}>${(product.cost).toFixed(2)}</Text>
                    <Text>{product.qty}</Text>
                    <TouchableOpacity onPress={addToCart} style={styles.addBtn}>
                        <Text style={styles.text}>Add to cart</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(false);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Image source={product.picture} style={{ width: 150, height: 150 }} />
                            <Text style={{ fontWeight: "bold", color: "black" }} numberOfLines={3}>About the Product:</Text>
                            <Text style={{ marginLeft: 10, color: "white", fontSize: hp('2%') }} numberOfLines={6}>{product.about}</Text>
                            <Text style={{ fontWeight: "bold", color: "black" }} >Benefits </Text>
                            <Text style={{ marginLeft: 10, color: "white", fontSize: hp('2%') }} numberOfLines={6}>{product.benefits} </Text>
                            <Text style={{ fontWeight: "bold", color: "black" }} >Storage and Uses</Text>
                            <Text style={{ marginLeft: 10, color: "white", fontSize: hp('2%') }} numberOfLines={6}>{product.storage} </Text>
                            <Text style={{ fontWeight: "bold", color: "black" }} >Product Seller </Text>
                            <Text style={{ marginLeft: 10, color: "white", fontSize: hp('2%') }} numberOfLines={10}>{product.productInfo} </Text>
                            <TouchableOpacity
                                style={{ ...styles.openButton }}
                                onPress={hideDescription} >
                                <Text style={styles.textStyle}>OK</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        margin: 1,
        justifyContent: 'center'
    },
    productDes: {
        alignItems: 'center',
        marginTop: 10,
        justifyContent: 'center'
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
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",

    },
    modalView: {
        marginTop: 5,
        backgroundColor: colors.blueGrey200,
        borderRadius: 10,
        height: hp('95%'),
        width: wp('95%'),
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: themes.BACKGROUND_COLOR,
        borderRadius: 10,
        padding: 10,
        elevation: 5,
        marginTop: 20,
        width: wp('50%')
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
});

export default Product;
