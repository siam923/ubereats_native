import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import DishDetailScreen from './src/screens/DishDetailScreen';
import RestaurantDetailsPage from './src/screens/RestaurantDetailsScreen';

export default function App() {
  return (
    <View style={styles.container}>
     {/* <RestaurantDetailsPage/> */}
     <DishDetailScreen/>
     <StatusBar style='light'/> 
    </View>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
