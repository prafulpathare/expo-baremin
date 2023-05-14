import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, FlatList, TextInput, Button, TouchableOpacity } from 'react-native';
import { styles as mainStyles } from '../assets/styles/Styles';



export function UserProfile({ data, navigation }) {

    let [props, setProps] = useState({});
    
    useEffect(() => {
        setProps(data);
    })

    return (
        <View style={{ ...mainStyles.container }}>
           
           <TouchableOpacity onPress={() => {
               navigation.navigate('Login')
           }} >
               <Text>Log Out</Text>
           </TouchableOpacity>


        </View>
    )

}



const styles = StyleSheet.create({


});
