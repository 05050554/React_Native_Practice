import React from 'react';
import {View, Text, StyleSheet,FlatList} from 'react-native';

const ListScreen = () => {
    const frineds = [
        {name: 'Freiend #1',age: '20'},
        {name: 'Freiend #2',age: '45'},
        {name: 'Freiend #3',age: '32'},
        {name: 'Freiend #4',age: '27'},
        {name: 'Freiend #5',age: '53'},
        {name: 'Freiend #6',age: '30'},
        {name: 'Freiend #7',age: '17'},
        {name: 'Freiend #8',age: '8'},
        {name: 'Freiend #9',age: '20'},
        {name: 'Freiend #10',age: '25'}
        
    ];

    return( 
    <FlatList
        //水平的
        //horizontal
        //水平不會有底下的那個BAR
        //showsHorizontalScrollIndicator = {false}
        //去掉warn提醒 給他key值 可在上面資料理增加 key:'a'或是新增下列這行
        keyExtractor ={ friends => friends.name} 

        data = {frineds} 
        renderItem={( {item} )=>{
        // element === {item: {name: 'Friend #1'}, index: 0}
        // item ==={name: 'Friends #1'}
        return <Text style = {styles.textStyle}>{item.name} - Age {item.age}</Text>;
    }}
    />
    
    )
}

const styles = StyleSheet.create({
    textStyle:{
        marginVertical:50
    }
});


export default ListScreen

