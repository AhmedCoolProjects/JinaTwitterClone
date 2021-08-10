import {
  AntDesign,
  EvilIcons,
  Feather,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import Colors from "../../constants/Colors";

export type FooterParams = {
  commentsCount: number;
  sharesCount: number;
  likesCount: number;
  retwittesCount: number;
};

const Footer = ({
  commentsCount,
  sharesCount,
  likesCount,
  retwittesCount,
}: FooterParams) => {
  return (
    <View style={styles.root}>
      <View style={styles.element}>
        <Ionicons
          name="md-chatbubble-outline"
          size={22}
          color={Colors.light.tabIconDefault}
        />
        <Text style={{ color: Colors.light.text }}>{commentsCount}</Text>
      </View>
      <View style={styles.element}>
        <MaterialCommunityIcons
          name="twitter-retweet"
          size={26}
          color={Colors.light.tabIconDefault}
        />
        <Text style={{ color: Colors.light.text }}>{retwittesCount}</Text>
      </View>
      <View style={styles.element}>
        <AntDesign
          name="hearto"
          size={22}
          color={Colors.light.tabIconDefault}
        />
        <Text style={{ color: Colors.light.text }}>{likesCount}</Text>
      </View>
      <View style={styles.element}>
        <Feather name="share-2" size={24} color={Colors.light.tabIconDefault} />
        <Text style={{ color: Colors.light.text }}>{sharesCount}</Text>
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 8,
  },
  element: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
