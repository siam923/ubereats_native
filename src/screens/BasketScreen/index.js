import {View, Text, StyleSheet, FlatList} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import restaurants from '../../../assets/data/restaurants.json';
import { useState } from 'react';
const restaurant = restaurants[0]
import BasketDishItem from '../../components/BasketDiskItem';

const BasketScreen = () => {
  
  return (
    <View style={styles.page}>
      <Text style={styles.title}>{restaurant.name}</Text>

      <Text style={{fontWeight: "bold", marginTop: 20, fontSize: 19}}>Your items</Text>

      <FlatList data={restaurant.dishes} 
        renderItem={({ item }) => <BasketDishItem basketDish={item}/>} 
        
      />

      <View style={styles.seperator} />

      <View style={styles.button}>
        <Text style={styles.buttonText}>Create Order</Text>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: '100%',
    padding: 10,
  },
  row: {
    flexDirection: 'row', 
    alignItems: "center",
    marginVertical: 15,
  },
  quantity: {
    fontSize: 20,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    marginVertical: 10,
  },
  seperator: {
    height: 1,
    backgroundColor: "lightgrey",
    marginVertical: 10,
  },

  button: {
    backgroundColor: "black",
    marginTop: "auto",
    padding: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 18,
  },

  quantityContainer: {
    backgroundColor: 'lightgrey',
    paddingHorizontal: 5,
    marginRight: 10,
    paddingVertical: 2,
    borderRadius: 3,
  }
})

export default BasketScreen;
