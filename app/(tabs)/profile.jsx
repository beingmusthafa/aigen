import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Profile = () => {
  return (
    <View style={styles.container}>
      <Link href="/" style={{ color: "blue" }}>
        Go to Home
      </Link>
      <Text>Profile</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Profile;
