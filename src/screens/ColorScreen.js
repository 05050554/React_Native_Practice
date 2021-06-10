import React , {useState} from 'react'
import {View,StyleSheet,Button,FlatList} from 'react-native';

const ColorScreen = () => {
const [colors,setColors]= useState([]);

//...是把array裡面的東西都複製起來
    return (
    <View>
        <Button title = 'Add a color' onPress = {() =>{
            setColors([...colors,randomRgb()])
        }}/>
        
        <FlatList 
        keyExtractor = {item => item}
            data = {colors}
            renderItem = {({item}) => {
                return <View 
                style={{height : 100 ,width:100, backgroundColor:item}}
            />
            }}
        />
    </View>
    )
}
//floor <= 的整數
const randomRgb = () =>{
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)

    return `rgb(${red},${green},${blue})`;
}

const style = StyleSheet.create({});
export default ColorScreen
