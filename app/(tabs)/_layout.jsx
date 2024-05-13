import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import icons from "../../constants/icons";

const TabIcon = ({ color, icon, focused, name }) => {
  return (
    <View className="items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMethod="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text
        className={`text-xs ${focused ? "font-pbold" : "font-pregular"}`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarActiveTintColor: "#FFA001",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarStyle: {
            backgroundColor: "#161622",
            borderTopWidth: 1,
            borderTopColor: "#232533",
            height: 85,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                color={color}
                focused={focused}
                icon={icons.home}
                name={"Home"}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            title: "Create",
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                color={color}
                focused={focused}
                icon={icons.plus}
                name={"Create"}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="bookmark"
          options={{
            title: "Bookmark",
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                color={color}
                focused={focused}
                icon={icons.bookmark}
                name={"Bookmark"}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                color={color}
                focused={focused}
                icon={icons.profile}
                name={"Profile"}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
