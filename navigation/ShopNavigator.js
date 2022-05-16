import Colors from "../constants/Colors";
import { Platform } from "react-native";

import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/UI/HeaderButton";
import CartScreen from "../screens/shop/CartScreen";
const productsNavigator = createNativeStackNavigator();

const mainNavigator = () => {
  return (
    <NavigationContainer>
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
                    iconName={
                      Platform.OS === "android" ? "md-cart" : "ios-cart"
                    }
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
              title: "Cart",

              // headerBackTitle: title,
            };
          }}
        />
      </productsNavigator.Navigator>
    </NavigationContainer>
  );
};

export default mainNavigator;
