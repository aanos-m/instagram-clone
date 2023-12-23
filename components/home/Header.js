import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { firebase } from '../../firebase'


const signOut = async () => {
    try {
        firebase.auth().signOut()
        console.log('user signed out')
    } catch (error) {
        console.log(error)
    }
}

const Header = ( {navigation} ) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={signOut}>
            <Image 
                style={styles.logo} 
                source={require('../../assets/header-logo.png')}
            />  
        </TouchableOpacity>

        <View style={styles.iconContainer}>
            <TouchableOpacity onPress={() => navigation.push('NewPostScreen')}>
                <Image style={styles.icon} source={require('../../assets/plus-icon.png')}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={styles.icon} source={require('../../assets/heart-icon.png')}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.unreadBadge}> 
                    <Text style={styles.unreadBadgeText}>11</Text>
                </View>
                <Image style={styles.icon} source={require('../../assets/message-icon.png')}/>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 20,
    },
    logo: {
        width: 100,
        height: 50,
        resizeMode: 'contain',
    },
    iconContainer: {
        flexDirection: 'row',
    },
    icon: {
        height: 30,
        width: 30,
        marginLeft: 10,
        resizeMode: 'contain'
    },
    unreadBadge: {
        backgroundColor: 'red',
        position: 'absolute',
        left: 20,
        bottom: 18,
        width: 25,
        height: 20,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100,

    },
    unreadBadgeText: {
        color: 'white',
        fontWeight: 600,
    },

})


export default Header