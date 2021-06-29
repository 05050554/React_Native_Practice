import React from 'react'
import {Text,View,StyleSheet} from 'react-native'

const BoxScreen = () => {
    return (
    <View style = {styles.viewStyle}>
        <View style = {styles.viewOneStyle}/>
        <View style = {styles.viewTwoStyle}/>
        <View style = {styles.viewThreeStyle}/>
    </View>
    )
}
const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        flexDirection: "row",
        height: 100,
        justifyContent:'space-between'
       
    },
    viewOneStyle:{
       height: 30,
       width: 30,
       backgroundColor: 'red',
    },
    viewTwoStyle:{
        height: 30,
        width: 30,
        backgroundColor:'green',
        alignSelf:'flex-end'
    },
    viewThreeStyle:{
        height: 30,
        width: 30,
        backgroundColor:'purple'
    }
})

export default BoxScreen
