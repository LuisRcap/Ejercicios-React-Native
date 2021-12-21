import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';

const ContadorScreen = () => {

    const [contador, setContador] = useState(10);



    return (
        <View style={{
            flex: 1,
            justifyContent: 'center'
        }}>
            <Text style={{
                textAlign: 'center',
                fontSize: 40,
                top: -15
            }}>
                Contador: { contador }
            </Text>

            <TouchableOpacity
                onPress={ () => setContador( contador +1 ) }
                style={{
                    width: 50,
                    alignSelf: 'center'
                }}
            >
                <View style={{
                    backgroundColor: '#2196F3',
                    borderRadius: 100,
                    width: 50,
                    height: 50,
                    alignSelf: 'center',
                    justifyContent: 'center'
                }}>
                    <Text style={{
                        textAlign: 'center',
                        color: "white",
                        fontSize: 22,
                        fontWeight: 'bold',
                        top: -2
                    }}>
                        +1
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default ContadorScreen;