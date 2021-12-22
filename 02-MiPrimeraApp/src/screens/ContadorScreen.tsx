import React from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { useState } from 'react';
import Fab from '../components/Fab';

const ContadorScreen = () => {

    const [contador, setContador] = useState(10);



    return (
        <View style={ styles.container }>
            <Text style={ styles.title }>
                Contador: { contador }
            </Text>

            <Fab
                title="+1"
                onPress={ () => setContador( contador + 1 ) }
            />

            <Fab
                title="-1"
                position='bl'
                onPress={ () => setContador( contador - 1 ) }
            />

            {/* <TouchableOpacity
                onPress={ () => setContador( contador - 1 ) }
                style={ styles.boton_wrapBL }
            >
                <View style={ styles.fab }>
                    <Text style={ styles.text_boton }>
                        -1
                    </Text>
                </View>
            </TouchableOpacity> */}
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
    boton_wrapBL: {
        bottom: 25,
        position: 'absolute',
        left: 25,
        width: 50
    },
    
});

export default ContadorScreen;