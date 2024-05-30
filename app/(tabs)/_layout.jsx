import { View, Text, Image } from "react-native";
import React from "react";
import { icons } from "../../constants";
import { Tabs } from "expo-router";

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View>
      <Image 
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="h-6 w-6"
       />
    </View>
  );
};

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen 
        name="home"
        options={{
          title: 'Home',
          headerShown: 'false',
          tabBarIcon: ({ color, focused}) => (
            <TabIcon 
              icon={icons.home}
              color={color}
              name="Home"
              focused={focused}
            />
          )
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
