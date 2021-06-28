import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  //props裡有navigation在往下有navigate的方法 navigate用意是在於在裝置上要顯示哪一個內容
  return <View>
    
      <Text style={styles.text}>Hello this is my first program in React Native</Text>
      <Button 
        onPress ={() => navigation.navigate('Components')}
        title='GO to Components Demo' 
      />
      <Button
         onPress ={() => navigation.navigate('List')}
         title='GO to List Demo' 
      />
      <Button
         onPress ={() => navigation.navigate('Image')}
         title='GO to Image Demo' 
      />
      <Button
         onPress ={() => navigation.navigate('Counter')}
         title='GO to Counter Demo' 
      />

      <Button
         onPress ={() => navigation.navigate('Color')}
         title='GO to Color Demo' 
      />

      <Button
         onPress ={() => navigation.navigate('Square')}
         title='GO to Square Demo' 
      />
    
      <Button
         onPress = {()=>navigation.navigate('Text') }
         title = 'Go to Text Demo'
      />

  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
