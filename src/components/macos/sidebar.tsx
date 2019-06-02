import React, { Component } from 'react'

import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image
} from 'react-native'

type Props = {}

export default class Sidebar extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.banner}>
          <Image
            source={require('@/assets/logo/banner@400.png')}
            style={styles.bannerImage}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: 250,
    flexDirection: 'row',
    backgroundColor: '#f5f5f5',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    alignSelf: 'stretch'
  },
  banner: {
    marginTop: 40,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bannerImage: {
    width: 1148 / 10,
    height: 400 / 10,
    resizeMode: 'stretch'
  }
})
