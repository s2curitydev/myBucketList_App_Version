import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function DetailsPage({ navigation, route }) {
  useEffect(() => {
    navigation.setOptions({
      title: "소개 페이지",
    });
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.title}>상세페이지</Text>
    </View>
  );
}
