import { View, Text, Image, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Divider }from 'react-native-elements'

const BottomTabs = ( ) => {
    const [selectedTab, setSelectedTab] = useState(null);

  return (
    <View style={styles.wrapper}>
        <Divider width={1} orientation='vertical'/>
        <View style={styles.iconBar}>
            <TouchableOpacity onPress={() => {}}>
                <Image style={styles.icons} source={require('../../assets/home-outline-icon.png')} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={styles.icons} source={require('../../assets/search-icon.png')} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={styles.icons} source={require('../../assets/reels-icon.png')} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={styles.icons} source={require('../../assets/store-icon.png')} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={[styles.icon, styles.profilePic]} source={require('../../assets/userImg.png')}/>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create ({
    icons: {
        width: 30,
        height: 30,
    },
    iconBar: {
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    wrapper: {
        position: 'absolute',
        width: '100%',
        bottom: '3%',
        zIndex: 999,
        backgroundColor: '#000',
    },
    selectedIcon: {
        tintColor: 'white',
    },
    profilePic: {
        borderRadius: 50,
        width: 30,
        height: 30,
    }
})

export default BottomTabs