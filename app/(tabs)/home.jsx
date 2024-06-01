import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList } from "react-native-web";

const Home = () => {
  return (
    <SafeAreaView>
      <FlatList
        data={[]}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.id}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Home;
