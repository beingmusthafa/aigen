import React from "react";
import { View, Text } from "react-native";
import { Link } from "expo-router";

const App = () => {
  return (
    <View className="flex h-full items-center justify-center gap-4">
      <Link href="/home" style={{ color: "blue" }}>
        Go to home
      </Link>
      <Link href="/create" style={{ color: "blue" }}>
        Go to create
      </Link>
      <Link href="/bookmark" style={{ color: "blue" }}>
        Go to bookmark
      </Link>
      <Link href="/profile" style={{ color: "blue" }}>
        Go to profile
      </Link>
      <Text className="text-2xl text-green-500">Hello Musthafa</Text>
    </View>
  );
};

export default App;
