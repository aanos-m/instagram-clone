import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SignedInstack, SignedOutStack } from './navigation'
import { firebase } from './firebase'

const AuthNavigation = () => {

    const [currentUser, setCurrentUser] = useState(null)
    const userHandler = (user) => user ? setCurrentUser(user) : setCurrentUser(null)
    useEffect(
    () =>
        firebase.auth().onAuthStateChanged(user => userHandler(user)),
    [])
  return <>{ currentUser ? <SignedInstack/> : <SignedOutStack/> }</>
}

export default AuthNavigation