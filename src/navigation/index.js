import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from './../screens/HomeScreen';
import RestaurantDetailsPage from './../screens/RestaurantDetailsScreen';
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import OrderScreen from './../screens/OrderScreen/index';
import {Foundation, FontAwesome5, MaterialIcons} from '@expo/vector-icons'
import DishDetailScreen from './../screens/DishDetailScreen/index';
import BasketScreen from './../screens/BasketScreen/index';
import OrderDetails from './../screens/OrderDetails/index';

const Stack = createNativeStackNavigator()


const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeTabs} />
    </Stack.Navigator>
  )
}

const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator barStyle={{backgroundColor: 'white'}}>
      <Tab.Screen name='HomeTabs' component={HomeStackNavigator} 
        options={{
          tabBarIcon: ({color}) => (
            <Foundation name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name='Orders' 
        component={OrderStackNavigator} 
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="list-alt" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={OrderScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user-alt" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Restaurants" component={HomeScreen} />
      <HomeStack.Screen
        name="Restaurant"
        component={RestaurantDetailsPage}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen name="Dish" component={DishDetailScreen} />
      <HomeStack.Screen name="Basket" component={BasketScreen} />
    </HomeStack.Navigator>
  );
};

const OrdersStack = createNativeStackNavigator();

const OrderStackNavigator = () => {
  return (
    <OrdersStack.Navigator>
      <OrdersStack.Screen name="Orders" component={OrderScreen} />
      <OrdersStack.Screen
        name="Order"
        component={OrderDetails}
        screenOptions={{ headerShown: false }}
      />
    </OrdersStack.Navigator>
  );
};
export default RootNavigator;