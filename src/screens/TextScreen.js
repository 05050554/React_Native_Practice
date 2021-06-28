import React,{ useState } from 'react'
import {View,Text,StyleSheet, TextInput} from 'react-native';

//ios會有自更正的系統如不需要 用atc 安卓不會有
const TextScreen = () => {
    const [password,setPassword] = useState(''); 
    return (
    <View>
        <Text>Enter Password:</Text>
        <TextInput 
        style= {styles.input} 
        autoCapitalize = "none"
        autoCorrect = {false}
        value = {password}
        onChangeText = {(newValue)=> setPassword(newValue)}
        />
        <Text>Your password : {password}</Text>
        {password.length < 4 ? <Text>Password must more than 4 characters </Text>: null}
    </View>
    )
}

const styles =  StyleSheet.create({
    input: {
        margin :15,
        borderColor: 'black',
        borderWidth: 1
    }
});


export default TextScreen
