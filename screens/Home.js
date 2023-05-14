import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import DatePicker, { getFormatedDate } from 'react-native-modern-datepicker';
import { StyleSheet, Text, View, Image, Dimensions, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { Tile } from '../components/Tile';
import { styles as mainStyles } from '../assets/styles/Styles';


export function Home({ navigation }) {

    useEffect(() => {

    }, []);

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
                    data={[
                        {
                            header: 'dapibus dui. Praesent a ante posuere',
                            description: ' Suspendisse eros massa, consequat quis diam quis, ultricies luctus ex',
                            content: 'commodo metus vitae, convallis orci. Maecenas augue neque, fermentum et nunc accumsan',
                        },
                        {
                            header: 'eleifend sed euismod tortor.Proin imperdiet ante',
                            description: 'tristique feugiat imperdiet augue',
                            content: 'Nam sit amet quam id ipsum tempus feugiat ac'
                        },
                        {
                            header: 'efficitur diam. Nam a mi sit amet nisl consequat euismod',
                            description: 'Donec et lectus lobortis, bibendum erat sed, ornare mi',
                            content: 'Sed vel mauris est. Mauris sollicitudin'
                        },
                        {
                            header: 'mi id blandit tristique, elit eros aliquet',
                            description: 'ligula, id maximus nulla nunc ultrices metus',
                            content: 'Sed vel mauris est. Mauris sollicitudin'
                        },
                        {
                            header: 'Mauris posu ere id odio ac eleifend.id tortor venenatis',
                            description: 'Nunc finibus finibus ex vitae laoreet',
                            content: 'Nulla facilisi. Mauris ac euismod quam',
                        },
                    ]}
                    renderItem={({ item }) => <Tile key={item+'-'} data={item} />}
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
