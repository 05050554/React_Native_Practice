import React, {useState, useReducer} from 'react'
import {View,Text,StyleSheet,Button}from 'react-native';

const reducer = (state,action)=>{
    //state === {count: num}
    //action ==={type:'increase' || 'decrement', payload:1}
    switch(action.type){
        case 'increase':
            return {...state,count: state.count + action.payload}
        case 'decrease':
            return {...state,count: state.count - action.payload}
        default:
            return state;
    }
} 




const CounterScreen = () => {
    // const [counter, setCounter] = useState(0);
    const [state, dispatch] = useReducer(reducer,{count: 0})
    return( 
    <View>
        <Button 
            title= 'Increase' 
            onPress={() =>{
            //dont do this 
            //counter++;
            // setCounter(counter + 1);
            dispatch({type :　'increase', payload: 1})
            
        }}/>
        <Button 
            title= 'Decrease' 
            onPress={() => {
            // setCounter(counter - 1);
            dispatch({type :　'increase', payload: 1})
        }}/>
        <Text>Current Count: {state.count}</Text>
    </View>
    )
}

const style = StyleSheet.create({})

export default CounterScreen
