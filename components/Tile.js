import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import DatePicker, { getFormatedDate } from 'react-native-modern-datepicker';
import { StyleSheet, Text, View, Image, Dimensions, FlatList, TextInput, TouchableOpacity } from 'react-native';


export function Tile({ navigation, data }) {

    useEffect(() => {

    }, []);

    return (
        <View style={styles.container}>
            <Text numberOfLines={2} style={styles.header}>{data.header}</Text>
            <Text numberOfLines={2} style={styles.content}>{data.content}</Text>
            <Text style={styles.description}>{data.description}</Text>
        </View>
    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        margin: 5
    },

    header: {
        fontWeight: 'bold', 
        fontSize: 14
    },
    content: {
        fontSize: 15,
        paddingVertical: 1
    },
    description: {
        color: '#777777',
        fontSize: 13
    }

});
