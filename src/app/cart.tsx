import { View, Text, Platform, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { useCart } from "@/providers/cartContext";
import CartListItem from "@/components/cartListItem";

const cartScreen = () => {
  const { items } = useCart();

  return (
    <View>
      <FlatList
        data={items}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
      />

      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
};

export default cartScreen;
