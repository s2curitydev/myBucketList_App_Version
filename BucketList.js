import React from "react";
import main from "./assets/main.png";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";

const BucketList = ({ list }) => {
  const my_lists = list;

  return (
    <ScrollView style={styles.container}>
      <StatusBar style="black" />
      <View style={styles.lists}>
        {my_lists.map((list, index) => {
          // 콘솔을 확인해봅시다 :)
          console.log(list);
          return (
            <View style={styles.listView} key={index}>
              <Text style={styles.listsText} key={index}>
                {list}
              </Text>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default BucketList;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#eee",
    height: 500,
  },
  listView: {
    height: 50,
    borderColor: "#fff",
    borderWidth: 1,
    backgroundColor: "skyblue",
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  listsText: {
    alignSelf: "center",
    justifyContent: "center",
  },
});
