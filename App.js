import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
// import { AppLoading } from "rr"; //correct way
import AppLoading from "expo-app-loading";
import React, { useState } from "react";
import * as Font from "expo-font";
import ordersReducer from "./store/reducers/order";

import productReducer from "./store/reducers/products";
import {
  configureStore,
  createReducer,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import ShopNavigator from "./navigation/ShopNavigator";
import { composeWithDevTools } from "redux-devtools-extension";
import cartReducer from "./store/reducers/cart";

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    orders: ordersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};
export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={() => {}}
      />
    );
  }
  return (
    // <View style={styles.container}>
    //   <Text>fadsfaa</Text>
    // </View>
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
