import React, { useReducer } from 'react'
import {View,Text,StyleSheet} from 'react-native';
import ColorCounter from '../components/ColorCounter'

const COLOR_INCREASE = 15


const reducer = (state, action) =>{
    switch(action.colorToChange){
        case 'red':
            return state.red + action.amount > 255 || state.red + action.amount < 0
            ? state
            : {...state, red: state.red + action.amount}
            //return state means dont do anything
            //return state;
        case 'green':
            return state.green + action.amount > 255 || state.green + action.amount < 0
            ? state
            : {...state, green: state.green + action.amount}
        case 'blue':
            return state.blue + action.amount > 255 || state.blue + action.amount < 0
            ? state
            : {...state, blue: state.blue + action.amount}
        default:
            return state;
    }
}


const SquareScreen = () => {
//利用useReducer處裡顏色問題
    //state === {red: num, green: num, blue: num}
    // action ==={colorToChange: 'red' || 'green' || blue, amount: 15 || -15}

    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0 , blue: 0});
    //console.log(state) //red: 0, green: 0 , blue: 0
    
//用state處裡顏色問題
    // const [red,setRed] = useState(0); 
    // const [green,setGreen] = useState(0); 
    // const [blue,setBlue] = useState(0); 

    // const setColor = (color, change) => {
        //color = 'red' 'green' 'blue'
        //change = +15 -15
//         switch(color){
//             case 'red':
//                 red + change > 255 || red + change < 0 ? null : setRed(red + change);
//                 return;

//             case 'green':
//                 green + change > 255 || green + change < 0 ? null : setGreen(green + change);
//                 return;

//             case 'blue':
//                 blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
//                 return;
//             default:
//                 return;
//         }
//    };


    return (
        <View> 
            <ColorCounter 
                onIncrease = {() => dispatch({ colorToChange: 'red', amount: COLOR_INCREASE })} 
                onDecrease = {() => dispatch({ colorToChange: 'red', amount: -1*COLOR_INCREASE })}
                color = 'Red'
            />
            <ColorCounter 
                onIncrease = {() => dispatch({ colorToChange: 'blue', amount: COLOR_INCREASE })} 
                onDecrease = {() => dispatch({ colorToChange: 'blue', amount: -1*COLOR_INCREASE })}
                color = 'Blue'
            />
            <ColorCounter 
                onIncrease = {() => dispatch({ colorToChange: 'green', amount: COLOR_INCREASE })} 
                onDecrease = {() => dispatch({ colorToChange: 'green', amount: -1*COLOR_INCREASE })}
                color = 'Green'
            />
            <View 
                style={{
                    height: 150,
                    width:150, 
                    backgroundColor: `rgb(${state.red},${state.green},${state.blue})`
                }}
            />
        </View>
    )
}
const style = StyleSheet.create({});

export default SquareScreen
