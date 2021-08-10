import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { useState } from "react";
import {
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { ProfilePicture } from "../components/profile";
import { Text, View } from "../components/Themed";
import Colors from "../constants/Colors";

export default function Post() {
  const navigation = useNavigation();
  const [tweetText, setTweetText] = useState("");
  const handlePostTweet = () => {
    console.log(tweetText);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <AntDesign
          onPress={() => navigation.goBack()}
          name="close"
          size={24}
          color={Colors.light.tint}
        />
        <TouchableOpacity
          disabled={!tweetText}
          onPress={handlePostTweet}
          activeOpacity={0.8}
          style={styles.touchable}>
          <Text style={{ color: "white", fontWeight: "bold" }}>Tweet</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.post}>
        <ProfilePicture imageUri="https://user.oc-static.com/files/6001_7000/6410.jpg" />
        <TextInput
          multiline={true}
          value={tweetText}
          onChangeText={setTweetText}
          style={{ marginLeft: 14, fontSize: 18, flex: 1 }}
          placeholder="What's happening?"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    paddingTop: Platform.OS === "android" ? 28 : 0,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  header: {
    width: "100%",
    paddingVertical: 8,
    paddingHorizontal: 14,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  touchable: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: Colors.light.tint,
  },
  post: {
    flex: 1,
    width: "100%",
    padding: 10,
    paddingTop: 18,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
  },
});
