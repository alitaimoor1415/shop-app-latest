import React from "react";
import { View, Text, FlatList } from "react-native";
import { useSelector } from "react-redux";
const OrderScreen = (props) => {
  const orders = useSelector((state) => state.orders.orders);
  return (
    <FlatList
      data={orders}
      keyExtractor={(items) => items.id}
      renderItem={(itemData) => <Text>{itemData.item.totalAmount}</Text>}
    />
  );
};

export default OrderScreen;
