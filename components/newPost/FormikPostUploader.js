import { View, Text, TextInput, Image, TouchableOpacity, Button} from 'react-native'
import React, { useState } from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { Divider } from 'react-native-elements'

const uploadPostSchema = Yup.object().shape({
    imageUrl: Yup.string().url().required('A URL is required'),
    caption: Yup.string().max(2200, 'Caption has reached the character limit')
})

const PlaceHolderImage = 'https://www.brownweinraub.com/wp-content/uploads/2017/09/placeholder.jpeg'

const FormikPostUploader = () => {
    const [ thumbnailURL, setThumbnailURL ] = useState(PlaceHolderImage)
    return (
        <Formik
            initialValues={{caption: '', imageUrl: ''}}
            onSubmit={ values => console.log(values)}
            validationSchema = { uploadPostSchema }
            validateOnMount={true}
        >
            {( {handleBlur, handleChange, handleSubmit, values, errors, isValid} ) => 
                <>
                    <View style={{margin: 20, justifyContent: 'space-between', flexDirection: 'row'}}>
                        <Image source={{uri: thumbnailURL ? thumbnailURL : PlaceHolderImage}} 
                            style={{width: 100, height: 100, backgroundColor: 'grey'}}
                        />
                        <View style={{flex: 1, marginLeft: 12}}>
                            <TextInput 
                                style={{color: 'white', fontSize: 20}}
                                placeholder='Enter a caption ...'
                                placeholderTextColor='grey'
                                multiline={true}
                                onChangeText={handleChange('caption')}
                                onBlur={handleBlur('caption')}
                                value={values.caption}
                            />
                        </View>
                    </View>
                    <Divider width={1} orientation='vertical'/>
                    
                    <TextInput 
                        onChange={(e) => setThumbnailURL(e.nativeEvent.text)}
                        placeholder='Enter Image Url' 
                        placeholderTextColor='grey'
                        style={{color: 'white', fontSize: 18, marginLeft: 20}}
                        onChangeText={handleChange('imageUrl')}
                        onBlur={handleBlur('imageUrl')}
                        value={values.imageUrl}
                    />
                    {errors.imageUrl && (
                        <Text style={{fontSize: 10, color: 'red', marginLeft: 20}}>
                            {errors.imageUrl}
                        </Text>
                    )}
                    <Button onPress={handleSubmit} title='Share' disabled={!isValid}/>
                </>    
            }


        </Formik>
    )
}

export default FormikPostUploader