import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'

const postFooterIcons = [
    {
        name: 'Like',
        imageUrl: 'https://icons8.com/icon/87/heart'
    }
]


const Post = ( { post } ) => {
  return (
    <View style={{ marginBottom: 30 }}>
        <Divider width={1} orientation='vertical'/>
        <PostHeader post={post}/>
        <PostImage post={post}/>
        <PostFooter post={post}/>
    </View>
  )
}


const PostImage = ({ post }) => (
    <Image source={{ uri: post.imageUrl}} style={{ 
        height: 500, 
        width: '100%',
        resizeMode: 'cover', margin: 5}}
    />
)
 
const PostHeader = ({ post }) => (
    <View style={styles.postStyle}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
            <Image source = {{ uri: post.profilePic }} style={styles.story}/>
            <Text style={{color: 'white'}}> {post.user}</Text>
        </View>
        <View>
            <Text style={{color: 'white', fontWeight: 700}}>  ... </Text>
        </View>

    </View>
)


const PostFooter = ({post}) => (
    <View style={{flexDirection: 'column'}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row'}}> 
                <TouchableOpacity>
                    <Image style={styles.footerIcon} source={require('../../assets/heart-icon.png')}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.footerIcon} source={require('../../assets/message-icon.png')}/>
                </TouchableOpacity> 
                <TouchableOpacity>
                    <Image style={styles.footerIcon} source={require('../../assets/send-icon.png')}/>
                </TouchableOpacity> 
            </View>
            <View>
                <TouchableOpacity>
                    <Image style={styles.footerIcon} source={require('../../assets/save-icon.png')}/>
                </TouchableOpacity> 
            </View>
        </View>
        <View style={{marginTop: 5, marginLeft: 5}}>
            <Text style={{color: 'white', fontWeight: 600}}> {post.likes.toLocaleString('en')} </Text>
        </View>
        <View style={{marginTop: 5, marginLeft: 5}}>
            <Text style={{color: 'white'}}>
                <Text style={{fontWeight: 800}}>{post.user.toLocaleString('en')}</Text> 
                <Text> {post.caption.toLocaleString('en')}</Text>   
            </Text>
        </View>
        <CommentSection post={post}/>
        <Comments post={post}/>
   </View>
)

const CommentSection = ({post}) => (
    <TouchableOpacity>
    <View style={{marginTop: 5, marginLeft: 5}}>
        {!!post.comments.length && (
        <Text style={{color: 'white'}}>
            <Text> 
                View {post.comments.length > 1 ? `all ${post.comments.length}` : `${post.comments.length}`}
                {post.comments.length > 1 ? ' comments' : ' comment'} 
            </Text> 
        </Text>
        )}
    </View>
    </TouchableOpacity>
)

const Comments = ({post}) => (
    <View style={{marginTop: 5}}>
        {post.comments.map ((comment, index) => (
            <View key={index} style={{margin: 2}}>
                <Text style={{color: 'white'}} >
                    <Text style={{fontWeight: 800}}> {comment.user.toLocaleString('en')}</Text>
                    {''} {comment.comment.toLocaleString('en')}
                </Text>
            </View>
        ))}
    </View>
)

const styles = StyleSheet.create({
    postStyle:{
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        margin: 5,
    },
    story: {
        width: 35,
        height: 35,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 1,
        borderColor: '#ff8501'
    },
    footerIcon: {
        width: 33,
        height: 33,
        margin: 5,

    }
})

export default Post