import React from "react";
import { StyleSheet, View } from "react-native";
import Colors from "../../constants/Colors";
import { ProfilePicture } from "../profile";
import Content, { ContentParams } from "./Content";
import Footer, { FooterParams } from "./Footer";

export type TwitteProps = {
  content: ContentParams;
  profilePicture: string;
  footer: FooterParams;
};

const Twitte = ({ content, profilePicture, footer }: TwitteProps) => {
  return (
    <View style={styles.root}>
      <View style={styles.leftCon}>
        <ProfilePicture imageUri={profilePicture} />
      </View>
      <View style={styles.rightCon}>
        <Content
          content={content.content}
          name={content.name}
          userName={content.userName}
          date={content.date}
          tags={content.tags}
          imageUri={content.imageUri}
        />
        <Footer
          sharesCount={footer.sharesCount}
          likesCount={footer.likesCount}
          commentsCount={footer.commentsCount}
          retwittesCount={footer.retwittesCount}
        />
      </View>
    </View>
  );
};

export default Twitte;

const styles = StyleSheet.create({
  root: {
    width: "100%",
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    borderBottomColor: Colors.light.tint,
    borderBottomWidth: 1,
    paddingBottom: 4,
  },
  leftCon: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginRight: 10,
  },
  rightCon: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flex: 1,
  },
});
