import React from "react";
import { FlatList, Button, Alert } from "react-native";
import ProductItem from "../../components/shop/ProductItem";
import { useSelector, useDispatch } from "react-redux";
import Colors from "../../constants/Colors";
import * as productsActions from "../../store/actions/products";
const UserProductsScreen = (props) => {
  const userProducts = useSelector((state) => state.products.userProducts);
  const editProductHandler = (id) => {
    props.navigation.navigate("EditProducts", { productId: id });
  };

  const deleteHandler = (id) => {
    Alert.alert("Are you sure you want to delete this item?", [
      { text: "No", style: "default" },
      {
        text: "Yes",
        style: "Destructive",
        onPress: () => {
          dispatch(productsActions.deleteProduct(id));
        },
      },
    ]);
  };
  const dispatch = useDispatch();
  return (
    <FlatList
      data={userProducts}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onSelect={() => {}}
        >
          <Button
            color={Colors.primary}
            title="Edit"
            onPress={() => {
              editProductHandler(itemData.item.id);
            }}
          />
          <Button
            color={Colors.primary}
            title="Delete"
            onPress={() => {
              deleteHandler.bind(this, itemData.item.id);
            }}
          />
        </ProductItem>
      )}
    />
  );
};

export default UserProductsScreen;
