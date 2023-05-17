import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { colors, images } from '../assets/styles/Styles';



export function Login({ navigation, data }) {

    const [props, setProps] = useState({});
    const [user, setUser] = useState({});

    useEffect(() => {

    })

    function goHome(item) {
        navigation.navigate('Home', item);
    }

    return (
        <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
        }}>

            <View style={{
                minWidth: Dimensions.get('window').width * 0.8
            }} >

                <Image source={{ uri: images.logo }}
                    resizeMode={'contain'}
                    style={{
                        width: 150, height: 150, alignSelf: 'center'
                    }} />

                <TextInput placeholder={'Mobile no.'} keyboardType={'phone-pad'} cursorColor={'#888'} style={{
                    ...styles.textInput,
                }} />

                <TextInput secureTextEntry={true} cursorColor={'#888'} placeholder={'Password'} style={{
                    ...styles.textInput
                }} />

                <TouchableOpacity onPress={() => { navigation.navigate('Home', {}) }} style={{
                    backgroundColor: colors.primary,
                    padding: 10,
                    paddingTop: 8,
                    borderRadius: 10,
                }} >
                    <Text style={{
                        textAlign: 'center',
                        fontWeight: 'bold',
                        color: '#fff'

                    }}>Log In</Text>
                </TouchableOpacity>

            </View>
        </View>
    )

}



const styles = StyleSheet.create({
    textInput: {
        marginBottom: 10,
        paddingHorizontal: 15,
        backgroundColor: '#e4e4e4',
        borderWidth: 1,
        borderColor: '#ccc',
        height: 50,
        borderRadius: 8,
        fontSize: 20,
        // fontWeight: 'bold'

    }
});
