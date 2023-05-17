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
           
            <Text style={{
                fontSize: 25,
                padding: 20
            }}>
                Hi, Praful
            </Text>

           <TouchableOpacity onPress={() => {
               navigation.navigate('Login')
           }}
                style={{
                    display: 'flex',
                    backgroundColor: '#f00',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                    height: 40
                }} 
           >
               <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>Log Out</Text>
           </TouchableOpacity>


        </View>
    )

}



const styles = StyleSheet.create({


});
