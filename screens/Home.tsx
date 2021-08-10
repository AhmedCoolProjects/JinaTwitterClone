import * as React from "react";
import { StyleSheet } from "react-native";
import Twittes from "../components/Feeds/Twittes";
import ButtonFloat from "../components/post/ButtonFloat";
import { View } from "../components/Themed";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={{ width: "100%", paddingHorizontal: 10 }}>
        <Twittes />
      </View>
      <ButtonFloat />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
