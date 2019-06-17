import React, { Component } from 'react'

import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image
} from 'react-native'

type Props = {
  title: String
  style: Object
}

export default class Column extends Component<Props> {
  render() {
    return (
      <View style={StyleSheet.flatten([this.props.style, styles.container])}>
        <View style={styles.titleBox}>
          <Text style={styles.title}>{this.props.title}</Text>
        </View>
        <View style={styles.content}>{this.props.children}</View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: 250,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    alignSelf: 'stretch'
  },
  titleBox: {
    alignSelf: 'stretch',
    alignItems: 'flex-start',
    paddingLeft: 24
  },
  title: {
    color: '#909399',
    fontWeight: '400'
  },
  content: {
    width: 250,
    flexDirection: 'column',
    alignSelf: 'stretch',
    marginTop: 10
  }
})
