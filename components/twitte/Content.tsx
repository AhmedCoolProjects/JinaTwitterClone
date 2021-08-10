import React from "react";
import { Image, StyleSheet } from "react-native";
import { View, Text } from "react-native";
import Colors from "../../constants/Colors";

export type ContentParams = {
  name: string;
  userName: string;
  date: string;
  content: string;
  tags?: string[];
  imageUri?: string;
};

const Content = ({
  name,
  userName,
  date,
  content,
  tags,
  imageUri,
}: ContentParams) => {
  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Text style={{ fontWeight: "bold", fontSize: 15 }}>{name}</Text>
        <Text style={{ marginLeft: 2, color: "grey" }}>{userName}</Text>
        <Text style={{ marginLeft: 4, color: "grey" }}>{date}</Text>
      </View>
      <View style={styles.tagsContainer}>
        {tags?.map((tag) => (
          <Text style={styles.tags} key={tag}>
            @{tag}
          </Text>
        ))}
      </View>
      <Text style={{ paddingLeft: 6 }}>{content}</Text>
      {imageUri && <Image style={styles.image} source={{ uri: imageUri }} />}
    </View>
  );
};

export default Content;

const styles = StyleSheet.create({
  root: {
    position: "relative",
    width: "100%",
  },
  tags: {
    color: Colors.light.tint,
    fontWeight: "bold",
    marginLeft: 2,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  tagsContainer: {
    display: "flex",
    flexDirection: "row",
  },
  image: {
    width: "100%",
    minHeight: 200,
    marginTop: 8,
    borderRadius: 10,
    resizeMode: "contain",
  },
});
