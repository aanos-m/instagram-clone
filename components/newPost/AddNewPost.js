import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import FormikPostUploader from './FormikPostUploader'

const Header = () => (
  <View style={styles.headerContainer}>
      <TouchableOpacity>
        <Image source={{uri: 'https://img.icons8.com/ios-glyphs/90/ffffff/back.png'}}
        style={{width: 30, height: 30}}/>
      </TouchableOpacity>
      <Text style={styles.headerText}>New Post</Text>
      <Text/>
  </View>
)
const AddNewPost = () => {
  return (
    <View style={styles.container}>
      <Header/>
      <FormikPostUploader/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10 
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 20,
    marginRight: 25,
  }
})

export default AddNewPost