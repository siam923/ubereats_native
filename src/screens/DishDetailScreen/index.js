import {View, Text, StyleSheet, Pressable} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import restaurants from '../../../assets/data/restaurants.json';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
const dish = restaurants[0].dishes[0]

const DishDetailScreen = () => {
  const [quantity, setquantity] = useState(1);
  const navigation = useNavigation()

  const onMinus = () => {
    if (quantity > 1){
      setquantity(quantity - 1)
    }
  };
   
  const onPlus = () => {
    setquantity(quantity + 1)
  }

  const getTotal = () => {
    return (dish.price * quantity).toFixed(2);
  }

  return (
    <View style={styles.page}>
      <Text style={styles.title}>{dish.name}</Text>
      <Text style={styles.description}>{dish.description}</Text>

      <View style={styles.seperator} />

      <View style={styles.row}>
        <AntDesign name="minuscircleo" size={60} color={"black"} onPress={onMinus}/>
        <Text style={styles.quantity}>{quantity}</Text>
        <AntDesign name="pluscircleo" size={60} color={"black"} onPress={onPlus}/>
      </View>

      <Pressable onPress={() => navigation.navigate("Basket")} style={styles.button}>
        <Text style={styles.buttonText}>Add {quantity} to basket &#8226; ${getTotal()}</Text>
      </Pressable>
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
    justifyContent: "center",
    marginTop: 50,
  },
  quantity: {
    fontSize: 20,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "600",
    marginVertical: 10,
  },
  seperator: {
    height: 1,
    backgroundColor: "lightgrey",
    marginVertical: 10,
  },
  description: {
    color: 'gray',
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
  }
})

export default DishDetailScreen;
