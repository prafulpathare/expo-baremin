import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { colors } from '../assets/styles/Styles';



export function Chat({ navigation, route }) {
    const [user, setUser] = useState({});
    const [props, setProps] = useState({});
    const [messages, setMessages] = useState([
        {
            text: 'hi',
            date: new Date().toISOString(),
            seen: true,
            fromYou: true
        },
        {
            text: 'hey',
            date: new Date().toISOString(),
            seen: true,
            fromYou: false
        },
        {
            text: 'how are you?',
            date: new Date().toISOString(),
            seen: true,
            fromYou: true
        },
        {
            text: 'i am fine',
            date: new Date().toISOString(),
            seen: true,
            fromYou: false
        },
        {
            text: 'what about you?',
            date: new Date().toISOString(),
            seen: true,
            fromYou: false
        },
        {
            text: 'im fine too',
            date: new Date().toISOString(),
            seen: true,
            fromYou: true
        },
        {
            text: 'nice!',
            date: new Date().toISOString(),
            seen: true,
            fromYou: false
        },
        {
            text: 'what are you upto?',
            date: new Date().toISOString(),
            seen: true,
            fromYou: false
        },
        {
            text: 'nothing re... same old shit',
            date: new Date().toISOString(),
            seen: true,
            fromYou: true
        },
        {
            text: 'hahaha',
            date: new Date().toISOString(),
            seen: true,
            fromYou: false
        },
    ]);

    useEffect(() => {
        setUser(route.params);

    }, [])

    return (
        'user' in user ?
        <View style={{
            paddingTop: 60,
            flex: 1,
            backgroundColor: '#fff'
        }}>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Image source={{ uri: user.user.profile }} resizeMode={'cover'} style={{ width: 40, height: 40, borderRadius: 20 }} />
                <View 
                    style={{
                        marginLeft: 20
                    }}
                >
                    <Text style={{
                        fontWeight: 'bold',
                    }}
                    >{ user.user.name }</Text>
                    <Text style={{
                        fontSize: 10,
                        marginTop: 5  
                    }}
                    >Last seen 5 mins ago </Text>
                </View>
            </View>

            <FlatList
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                style={{
                    paddingHorizontal: 15
                }}
                data={messages}
                renderItem={({ item }) =>
                    <View
                        style={{
                            alignItems: item.fromYou ? 'flex-end' : 'flex-start',
                        }}
                    >
                        <Text style={{
                            maxWidth: Dimensions.get('window').width * 0.8,
                            backgroundColor: item.fromYou ? '#f0f0f0' : colors.primary,
                            color: item.fromYou ? '#000' : '#fff',
                            paddingTop: 7,
                            paddingHorizontal: 15,
                            paddingBottom: 8,
                            marginTop: 5,
                            borderRadius: 17,
                            borderBottomLeftRadius: item.fromYou ? 17 : 0,
                            borderBottomRightRadius: item.fromYou ? 0 : 17
                        }} >
                            {item.text}
                        </Text>
                    </View>
                }
            />

            <TextInput
                placeholder={'type message...'}
                cursorColor={colors.primary}
                keyboardType={''}
                style={{
                    backgroundColor: '#e8e8e8',
                    bottom: 10,
                    height: 45,
                    paddingHorizontal: 20,
                    marginHorizontal: 10,
                    borderRadius: 12
                }} />
        </View>
        :
        <View></View>
    )

}



const styles = StyleSheet.create({


});
