import React, { Component } from "react";

import { Platform, StyleSheet, Text, View, Button } from "react-native";
import { PageStyles } from "@styles/macos.style";
import Sidebar from "@components/macos/sidebar";

type Props = {};

export default class MacMainPage extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Sidebar />
        <View>
          <Text>body2</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "flex-start"
  }
});
