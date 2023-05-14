import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, FlatList, TextInput, TouchableOpacity } from 'react-native';



export function Messages({ navigation, data }) {

    const [props, setProps] = useState({});
    const [chats, setChats] = useState([
        {
            user: {
                profile: 'https://images.statusfacebook.com/profile_pictures/real-desi-girls/desi-girl-profile-pic-03.jpg',
                name: 'Soney Morey'
            },
            lastMessage: {
                text: 'Nice!',
                fromMe: true,
                date: new Date().toDateString(),
                red: true
            }
        },
        {
            user: {
                profile: 'https://i.pinimg.com/736x/1d/bf/e3/1dbfe39ccc5727be31a0574d1abb92f2.jpg',
                name: 'Ananya Seth'
            },
            lastMessage: {
                text: 'Will meet soon...',
                fromMe: false,
                date: new Date().toDateString(),
                red: false
            }
        },
        {
            user: {
                profile: 'https://i.pinimg.com/originals/58/56/81/58568165bd15f6b781720276748f9073.jpg',
                name: 'Bhargavee Joshi'
            },
            lastMessage: {
                text: 'Okay, buddy',
                fromMe: true,
                date: new Date().toDateString(),
                red: false
            }
        },
        {
            user: {
                profile: 'https://i.pinimg.com/originals/13/f5/ce/13f5ce48ea5eaf9cb1504f5919f8964d.jpg',
                name: 'Anjali Kadam'
            },
            lastMessage: {
                text: 'let it be',
                fromMe: false,
                date: new Date().toDateString(),
                red: true
            }
        },
        {
            user: {
                profile: 'https://pbs.twimg.com/profile_images/1248966723107241984/RYG2dl8c.jpg',
                name: 'Saylee Kulkarni'
            },
            lastMessage: {
                text: 'lets meet tommorow?',
                fromMe: false,
                date: new Date().toDateString(),
                red: true
            }
        },
        {
            user: {
                profile: 'https://i.pinimg.com/550x/ab/15/24/ab15244f312efca83d525aa951a1d243.jpg',
                name: 'Rasika Wadekar'
            },
            lastMessage: {
                text: 'can we meet please?',
                fromMe: true,
                date: new Date().toDateString(),
                red: true
            }
        },
    ]);

    useEffect(() => {

    })

    function goMessage(item) {
        navigation.navigate('Chat', item);
    }

    return (
        <View style={{
            paddingTop: 40,
            minHeight: Dimensions.get('window').height,
            backgroundColor: '#fff'
        }}>

            <Text style={{
                fontWeight: 'bold',
                fontSize: 17,
                textAlign: 'center',
                padding: 20
            }}
            >Messages</Text>

            <FlatList
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                style={{
                    paddingHorizontal: 15
                }}
                data={chats}
                renderItem={({ item }) =>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            padding: 10,
                            paddingLeft: 5,
                            borderBottomColor: '#eee',
                            borderBottomWidth: 1
                        }}
                    >
                        <View style={{ width: 70 }}>
                            <Image source={{ uri: item.user.profile }} resizeMode={'cover'} style={{
                                width: 50, height: 50, borderRadius: 25
                            }} />
                        </View>
                        <TouchableOpacity style={{ flex: 1 }} onPressOut={() => goMessage(item)}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ flex: 1, fontSize: 15 }}>{item.user.name}</Text>
                                <Text style={{ flex: 1, fontSize: 11, fontStyle: 'italic', color: '#888', textAlign: 'right' }}>{item.lastMessage.date}</Text>
                            </View>
                            <Text style={{ flex: 1, fontSize: 15, marginTop: 5, color: '#666', fontWeight: item.lastMessage.red ? 'normal' : 'bold' }}>{item.lastMessage.text}</Text>
                        </TouchableOpacity>
                    </View>
                }
            />

        </View>
    )

}



const styles = StyleSheet.create({


});
