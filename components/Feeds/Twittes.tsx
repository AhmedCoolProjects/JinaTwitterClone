import React from "react";
import { View, Text, FlatList } from "react-native";
import Twitte from "../twitte";

const FakeData = {
  id: "00",
  user: {
    id: "0",
    name: "Ahmed Bargady",
    userName: "@ahmedBargady",
    imageUri: "https://user.oc-static.com/files/6001_7000/6410.jpg",
  },
  likes: 12,
  comments: 1,
  shares: 5,
  retwittes: 122,
  timestamp: "12h",
  content: "ahmed bargady twitte content",
  tags: ["one", "two", "three"],
  imageUri: "https://user.oc-static.com/files/6001_7000/6410.jpg",
};

const data = [
  FakeData,
  FakeData,
  FakeData,
  FakeData,
  FakeData,
  FakeData,
  FakeData,
  FakeData,
  FakeData,
  FakeData,
];
const Twittes = () => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <Twitte
          content={{
            content: item.content,
            userName: item.user.userName,
            name: item.user.name,
            date: item.timestamp,
            tags: item.tags,
            imageUri: item.imageUri,
          }}
          footer={{
            commentsCount: item.comments,
            sharesCount: item.shares,
            retwittesCount: item.retwittes,
            likesCount: item.likes,
          }}
          profilePicture={item.user.imageUri}
        />
      )}
    />
  );
};

export default Twittes;
