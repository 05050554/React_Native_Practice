import React from 'react';
import {Text, StyleSheet,View} from 'react-native';

const ComponentsScreen = () =>{
    const name = 'Jimmy';
    return(
        <View>
            <Text style={style.first}>Getting started with react native</Text>
            <Text style = {style.intorduction}>My name is {name}</Text>
        </View>
    );
};

const style = StyleSheet.create({
    textStyle:{
        fontSize:30
    },
    first:{
        fontSize:45
    },
    intorduction:{
        fontSize:20
    }
});

export default ComponentsScreen;