import Colors from "../constants/Colors";
import { Platform } from "react-native";

import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

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
          options={{ title: "All Products" }}
        />
      </productsNavigator.Navigator>
    </NavigationContainer>
  );
};

export default mainNavigator;
