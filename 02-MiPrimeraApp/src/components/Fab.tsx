import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

interface Props {
    title: string;
    onPress: () => void;
}

const Fab = ( { title, onPress }: Props) => {

    console.log(title);

    return (
        <TouchableOpacity
            onPress={ onPress }
            style={ styles.boton_wrapBR }
        >
            <View style={ styles.fab }>
                <Text style={ styles.text_boton }>
                    { title }
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    boton_wrapBR: {
        bottom: 25,
        position: 'absolute',
        right: 25,
        width: 50
    },
    fab: {
        alignSelf: 'center',
        backgroundColor: '#5856D6',
        borderRadius: 100,
        height: 60,
        justifyContent: 'center',
        width: 60
    },
    text_boton: {
        alignSelf: 'center',
        color: "white",
        fontSize: 22,
        fontWeight: 'bold',
        top: -2
    }
});

export default Fab;