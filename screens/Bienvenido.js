import { View, Text, StyleSheet, Button, Image } from 'react-native'
import React from 'react'
import { useState } from 'react';


export default function Bienvenido() {

    const [user, setfirst] = useState()

    return (
        <View style={styles.container}>
            <View style={styles.screen1}>
                <Text style={styles.title}>Aplicaciones Moviles</Text>

                <View>

                    <Image
                        source={{ uri: 'https://www.tresce.com/blog/wp-content/uploads/2017/03/aplicaciones-moviles.jpg' }}
                        style={styles.img}
                    />

                </View>


                <Text>{user}</Text>
                <Button
                    title="Acceder"
                    onPress={() => navigation.Navigators('')}
                />
            </View>
        </View>



    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    screen1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    screen2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 10,
        
    },
    image: {
        fontSize: 18,
        marginBottom: 10,
    },
    input: {
        width: 200,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    result: {
        marginTop: 20,
        fontSize: 18,
    },
    img: {
        width: 300,
        height: 300,
    },
  
});
