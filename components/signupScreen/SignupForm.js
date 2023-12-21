import { View, Text, TextInput, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik'
import Validator from 'email-validator'

const SignupForm = ( {navigation} ) => {

    const SignupFormSchema = Yup.object().shape({
        email: Yup.string().email().required('An email is required'),
        username: Yup.string().required().min(4, 'Your username has to be 4 chracters'),
        password: Yup.string().required().min(6, 'Your password has to be atleast 6 characters')
    })
  return (
    <View style={styles.wrapper}>
      <Formik 
            initialValues={{email: '', password: '', username: ''}}
            onSubmit={(values) => console.log(values)}  
            validationSchema={SignupFormSchema}
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
                        placeholder='Email' 
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
                        borderColor:  1 > values.username.length || values.username.length >= 4 ? '#ccc' : 'red'
                    }
                    ]}>
                    <TextInput
                        placeholder='Username' 
                        placeholderTextColor='#444'
                        autoCapitalize='none'
                        textContentType='username'
                        onChangeText={handleChange('username')}
                        onBlur={handleBlur('username')}
                        value={values.username}
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

                <Pressable 
                    titleSize={20}
                    style={styles.loginButton(isValid)} 
                    onPress={handleSubmit}
                > 
                    <Text style={{color: 'white', fontSize: 20, fontWeight: '600'}}>Create Account</Text>
                </Pressable>

                <View style={styles.signUpContainer}>
                    <Text>Already have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={{color: '#6BB0F5'}}> Login</Text>
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
        marginTop: 50
    }),
    signUpContainer:{
        flexDirection: 'row',
        width: '100%',
        marginTop: 50,
        justifyContent: 'center'
    }
})

export default SignupForm