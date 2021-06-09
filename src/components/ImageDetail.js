import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';


//props parent系統傳資料給child
const ImageDetail = props => {
    
    return (
    <View>
       <Image source={props.imageSource}/>
       <Text>{props.title}</Text>
       <Text>Image score : {props.source}</Text>
    </View>
    )
}

const styles = StyleSheet.create({});

export default ImageDetail;
