import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';

interface Props {
    title: string;
    position?: 'br' | 'bl';
    onPress: () => void;
}

const Fab = ( { title, position = 'br', onPress }: Props) => {

    return (

        <View style={[ styles.fabLocation, ( position === 'bl' ) ? styles.left : styles.right ]} >

        <TouchableNativeFeedback 
            onPress={ onPress }
            background={ TouchableNativeFeedback.Ripple('#28425B', false, 30) }
        >
            <View style={ styles.fab }>
                <Text style={ styles.text_boton }>
                    { title }
                </Text>
            </View>
        </TouchableNativeFeedback>
        </View>

    )
}

const styles = StyleSheet.create({

    fabLocation: {
        bottom: 25,
        position: 'absolute'
    },
    right: {
        right: 25
    },
    left: {
        left: 25
    },
    fab: {
        alignSelf: 'center',
        backgroundColor: '#5856D6',
        borderRadius: 100,
        height: 60,
        justifyContent: 'center',
        width: 60,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
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