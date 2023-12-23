import { View, Text, TextInput, StyleSheet, Pressable, TouchableOpacity, Alert, } from 'react-native'
import React, { useState } from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik'
import Validator from 'email-validator'
import { firebase } from '../../firebase'

const LoginForm = ( {navigation} ) => {
    const loginFormSchema = Yup.object().shape({
        email: Yup.string().email().required('An email is required'),
        password: Yup.string().required().min(6, 'Your password has to be atleast 6 characters')
    })

    const onLogin = async (email, password) => {
        try{
            await firebase.auth().signInWithEmailAndPassword(email, password)
            console.log('firebase login succesful', email, password)
        } catch (error) {
            Alert.alert(error.message)
        }
    }

  return (
    <View style={styles.wrapper}>
        <Formik 
            initialValues={{email: '', password: ''}}
            onSubmit={(values) => onLogin(values.email, values.password)}  
            validationSchema={loginFormSchema}
            validateOnMount={true}  
        >
            {( {handleBlur, handleChange, handleSubmit, values, errors, isValid} ) => (
            <>
                <View style={[
                    styles.inputField, 
                    {
                        borderColor:  values.email.length < 1 || Validator.validate(values.email) ? '#ccc' : 'red'
                    }
                    ]}>
                    <TextInput 
                        placeholder='Phone number, username, or email' 
                        placeholderTextColor='#444'
                        autoCapitalize='none'
                        keyboardType='email-address'
                        textContentType='emailAddress'
                        autoFocus={true}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                    />
                </View>
                <View style={[
                    styles.inputField, 
                    {
                        borderColor:  1 > values.password.length || values.password.length >= 6 ? '#ccc' : 'red'
                    }
                    ]}>
                    <TextInput
                        placeholder='Password' 
                        placeholderTextColor='#444'
                        autoCapitalize='none'
                        autoCorrect={false}
                        secureTextEntry={true}
                        textContentType='password'
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                    />
                </View>
                <View style={{alignItems: 'flex-end', marginBottom: 30}}>
                    <TouchableOpacity>
                        <Text style={{color: '#6BB0F5'}}>Forgot Password?</Text>
                    </TouchableOpacity>          
                </View>

                <Pressable 
                    titleSize={20}
                    style={styles.loginButton(isValid)} 
                    onPress={handleSubmit}
                    
                > 
                    <Text style={{color: 'white', fontSize: 20, fontWeight: '600'}}>Log In</Text>
                </Pressable>

                <View style={styles.signUpContainer}>
                    <Text>Don't have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.push('SignupScreen')}>
                        <Text style={{color: '#6BB0F5'}}> Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </>
            )}
      </Formik>
    </View>
  )
}

const styles = StyleSheet.create ({
    wrapper: {
        marginTop: 80
    },
    inputField:{
        borderRadius: 4,
        padding: 12,
        backgroundColor: '#FAFAFA',
        marginBottom: 10,
        borderWidth: 1,
    },
    loginButton: (isValid) => ({
        backgroundColor: isValid ? '#0096F6' : '#9ACAF7',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 42,
        borderRadius: 4,
    }),
    signUpContainer:{
        flexDirection: 'row',
        width: '100%',
        marginTop: 50,
        justifyContent: 'center'
    }
})
export default LoginForm