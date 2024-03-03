import { View, Text } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";

const ProductDetailScreen = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Stack.Screen options={{ title: "Detail: " + id }} />
      <Text>ProductDetailsScreen</Text>
    </View>
  );
};

export default ProductDetailScreen;
