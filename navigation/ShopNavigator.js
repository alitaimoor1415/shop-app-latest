import Colors from "../constants/Colors";
import { Platform } from "react-native";
import React from "react";
import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/UI/HeaderButton";
import CartScreen from "../screens/shop/CartScreen";
import OrderScreen from "../screens/shop/OrdersScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Order from "../models/order";
import { Ionicons } from "@expo/vector-icons";
import UserProductsScreen from "../screens/user/UserProductScreen";
const productsNavigator = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <productsNavigator.Navigator
      initialRouteName="Overview"
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === "android" ? Colors.primary : "",
        },
        headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
      }}
    >
      <productsNavigator.Screen
        name="Overview"
        component={ProductsOverviewScreen}
        options={({ navigation, route }) => {
          return {
            title: "All Products",
            headerRight: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  title="Cart"
                  iconName={Platform.OS === "android" ? "md-cart" : "ios-cart"}
                  onPress={() => {
                    navigation.navigate("Cart");
                  }}
                />
              </HeaderButtons>
            ),
          };
        }}
      />
      <productsNavigator.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={({ route }) => {
          const title = route.params.productTitle;
          console.log(title);
          return {
            title: title,

            // headerBackTitle: title,
          };
        }}
      />
      <productsNavigator.Screen
        name="Cart"
        component={CartScreen}
        options={({ route }) => {
          // const title = route.params.productTitle;
          // console.log(title);
          return {
            title: "Your Cart",

            // headerBackTitle: title,
          };
        }}
      />
    </productsNavigator.Navigator>
  );
};

const ordersNavigator = createNativeStackNavigator();
const GetOrderNavigator = () => {
  return (
    <ordersNavigator.Navigator
      initialRouteName="Overview"
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === "android" ? Colors.primary : "",
        },

        headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
      }}
    >
      <productsNavigator.Screen
        name="Orders"
        component={OrderScreen}
        options={({ route }) => {
          // const title = route.params.productTitle;
          // console.log(title);
          return {
            title: "Your Orders",
            // headerBackTitle: title,
          };
        }}
      />
    </ordersNavigator.Navigator>
  );
};

const adminNavigator = createNativeStackNavigator();
const GetAdminNavigator = () => {
  return (
    <adminNavigator.Navigator
      initialRouteName="Overview"
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === "android" ? Colors.primary : "",
        },

        headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
      }}
    >
      <adminNavigator.Screen
        name="UserProducts"
        component={UserProductsScreen}
        options={({ route }) => {
          // const title = route.params.productTitle;
          // console.log(title);
          return {
            title: "Your Products",
            // headerBackTitle: title,
          };
        }}
      />
    </adminNavigator.Navigator>
  );
};
const shopNavigator = createDrawerNavigator();
const MainNavigatorDrawer = () => {
  return (
    <NavigationContainer>
      <shopNavigator.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: Platform.OS === "android" ? Colors.primary : "",
          },

          headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
        }}
      >
        <shopNavigator.Screen
          name="Products"
          component={MainNavigator}
          options={{
            drawerIcon: ({ focused }) => (
              <Ionicons
                name={Platform.OS === "android" ? "md-cart" : "ios-cart"}
                size={23}
                color={focused.tintColor}
              />
            ),
          }}
        />
        <shopNavigator.Screen
          name="Orders"
          component={GetOrderNavigator}
          options={{
            drawerIcon: ({ focused }) => (
              <Ionicons
                name={Platform.OS === "android" ? "md-list" : "ios-list"}
                size={23}
                color={focused.tintColor}
              />
            ),
          }}
        />
        <shopNavigator.Screen
          name="Admin"
          component={GetAdminNavigator}
          options={{
            drawerIcon: ({ focused }) => (
              <Ionicons
                name={Platform.OS === "android" ? "md-create" : "ios-create"}
                size={23}
                color={focused.tintColor}
              />
            ),
          }}
        />
      </shopNavigator.Navigator>
    </NavigationContainer>
  );
};
export default MainNavigatorDrawer;
