import React, { Component } from "react";

import { Platform, StyleSheet, Text, View, Dimensions } from "react-native";

type Props = {};

export default class Sidebar extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Text>Logo</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 250,
    flexDirection: "row",
    backgroundColor: "#f5f5f5",
    alignSelf: "stretch"
  },
  logo: {
    marginTop: 25
  }
});
