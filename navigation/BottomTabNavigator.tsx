import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import HomeScreen from "../screens/Home";
import SearchScreen from "../screens/Search";
import NotificationsScreen from "../screens/Notifications";
import MessagesScreen from "../screens/Messages";
import {
  BottomTabParamList,
  HomeParamsList,
  MessagesParamsList,
  NotificationsParamsList,
  SearchParamsList,
} from "../types";
import { ProfilePicture } from "../components/profile";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="search1" size={24} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Notifications"
        component={NotificationsNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="ios-notifications-outline"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Messages"
        component={MessagesNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="mail-outline" size={24} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

const HomeStack = createStackNavigator<HomeParamsList>();
const SearchStack = createStackNavigator<SearchParamsList>();
const NotificationStack = createStackNavigator<NotificationsParamsList>();
const MessagesStack = createStackNavigator<MessagesParamsList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerRightContainerStyle: {
            marginRight: 15,
          },
          headerLeftContainerStyle: {
            marginLeft: 15,
          },
          headerTitleStyle: { alignSelf: "center" },
          headerLeft: () => (
            <ProfilePicture
              size={40}
              imageUri="https://user.oc-static.com/files/6001_7000/6410.jpg"
            />
          ),
          headerTitle: () => (
            <AntDesign name="twitter" size={24} color={Colors.light.tint} />
          ),
          headerRight: () => (
            <MaterialCommunityIcons
              name="star-four-points-outline"
              size={24}
              color={Colors.light.tint}
            />
          ),
        }}
      />
    </HomeStack.Navigator>
  );
}
function SearchNavigator() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{ headerTitle: "Search" }}
      />
    </SearchStack.Navigator>
  );
}
function NotificationsNavigator() {
  return (
    <NotificationStack.Navigator>
      <NotificationStack.Screen
        name="NotificationsScreen"
        component={NotificationsScreen}
        options={{ headerTitle: "Notifications" }}
      />
    </NotificationStack.Navigator>
  );
}
function MessagesNavigator() {
  return (
    <MessagesStack.Navigator>
      <MessagesStack.Screen
        name="MessagesScreen"
        component={MessagesScreen}
        options={{ headerTitle: "Messages" }}
      />
    </MessagesStack.Navigator>
  );
}
