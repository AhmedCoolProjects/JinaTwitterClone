import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const ButtonFloat = () => {
  const navigation = useNavigation();
  const handleOpenPostPage = () => {
    navigation.navigate("Post");
  };
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={handleOpenPostPage}
      style={styles.root}>
      <MaterialCommunityIcons name="feather" size={24} color="white" />
    </TouchableOpacity>
  );
};

export default ButtonFloat;

const styles = StyleSheet.create({
  root: {
    backgroundColor: Colors.light.tint,
    padding: 16,
    borderRadius: 50,
    position: "absolute",
    bottom: 26,
    right: 26,
  },
});
