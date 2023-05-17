import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import DatePicker, { getFormatedDate } from 'react-native-modern-datepicker';
import { StyleSheet, Text, View, Image, Dimensions, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { Tile } from '../components/Tile';
import { styles as mainStyles } from '../assets/styles/Styles';


export function Home({ navigation }) {

    const [data, setData] = useState({});

    useEffect(() => {
        getFeeds();
    }, [data]);

    const getFeeds = () => {
        fetch("https://api.npoint.io/6eb5a86919496a57f4c3", {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            // body: JSON.stringify({
            //     firstParam: 'yourValue',
            //     secondParam: 'yourOtherValue',
            // }),
        }).then((response) => response.json())
        .then(json => setData(json['data']));



    }

    return (
        <View style={{ ...mainStyles.container, }}>

            <View style={{
                padding: 10
            }} >
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 40,
                    paddingTop: 30
                }}>Hi there</Text>

                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 27,
                    paddingBottom: 0
                }}>What are you up to?</Text>

                <FlatList
                    data={data}
                    renderItem={({ item }) => <Tile key={item + '-'} data={item} />}
                    numColumns={3}
                    style={{
                        marginTop: 30
                    }}
                />

            </View>
        </View>
    )

}


const styles = StyleSheet.create({

});
