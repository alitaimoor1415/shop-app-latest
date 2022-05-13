import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import productReducer from "./store/reducers/products";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import ShopNavigator from "./navigation/ShopNavigator";

const store = configureStore({
  reducer: {
    products: productReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default function App() {
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
