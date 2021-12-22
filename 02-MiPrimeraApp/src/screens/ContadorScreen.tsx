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
                onPress={ () => setContador( contador + 1 ) }
                style={ styles.boton_wrapBR }
            >
                <View style={ styles.fab }>
                    <Text style={ styles.text_boton }>
                        +1
                    </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={ () => setContador( contador - 1 ) }
                style={ styles.boton_wrapBL }
            >
                <View style={ styles.fab }>
                    <Text style={ styles.text_boton }>
                        -1
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
        fontSize: 40,
        textAlign: 'center',
        top: -15
    },
    boton_wrapBR: {
        bottom: 25,
        position: 'absolute',
        right: 25,
        width: 50
    },
    boton_wrapBL: {
        bottom: 25,
        position: 'absolute',
        left: 25,
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

export default ContadorScreen;