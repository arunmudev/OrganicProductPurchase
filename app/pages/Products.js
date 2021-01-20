import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
} from 'react-native';
import { connect } from 'react-redux';

import Product from '../components/Product.component';
import { addToCart } from '../redux/actions/cartActions';
import{fetchProducts} from '../redux/actions/productAction';
import{ emptyCart } from '../redux/actions/cartActions';
import {fetchUser} from '../redux/actions/userAction';
 
class Products extends Component {

  constructor(props) {
    super(props);
  }

  UNSAFE_componentWillMount = () => {
   // this.props.emptyCart();
    this.props.fetchProducts();
  }

  addItemsToCart = (product) => {
    this.props.addToCart(product);
  }

  render() {
    const { products, navigation } = this.props;
    return (
      <View style={styles.container}>

        <View style={styles.body}>
          <FlatList
            data={products}
            numColumns={2}
            renderItem={({ item }) =>
              <Product item={item} addItemsToCart={this.addItemsToCart} product={item} />
            }
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => <View style={{ height: 0.4, backgroundColor: '#34495e90' }} />} />
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : "white"
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    
  }
});
const mapStateToProps = (state) => ({
  products: state.products.items  
})

export default connect(mapStateToProps, { addToCart, fetchProducts,emptyCart })(Products);

