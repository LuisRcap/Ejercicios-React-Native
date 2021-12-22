import React from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { useState } from 'react';

const ContadorScreen = () => {

    const [contador, setContador] = useState(10);



    return (
        <View style={ styles.container }>
            <Text style={ styles.title }>
                Contador: { contador }
            </Text>

            <TouchableOpacity
                onPress={ () => setContador( contador +1 ) }
                style={ styles.boton_wrap }
            >
                <View style={ styles.boton }>
                    <Text style={ styles.text_boton }>
                        +1
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        textAlign: 'center',
        fontSize: 40,
        top: -15
    },
    boton_wrap: {
        width: 50,
        alignSelf: 'center'
    },
    boton: {
        backgroundColor: '#2196F3',
        borderRadius: 100,
        width: 50,
        height: 50,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    text_boton: {
        textAlign: 'center',
        color: "white",
        fontSize: 22,
        fontWeight: 'bold',
        top: -2
    }
});

export default ContadorScreen;