import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native';

export default function TelaInicial() {
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}> 
                <Text style={styles.message}>Seu perfil</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Descreva seu trabalho</Text>
                <TextInput
                placeholder="Digite um texto..."
                style={styles.input}
                />

<Text style={styles.title}>Avalie seu cliente</Text>
                <TextInput
                placeholder="como foi sua experiencia de trabalho, com o cliente"
                style={styles.input}
                />

<TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate()}
                >
                    <Text style={styles.buttonText}>poste seu trabalho</Text>
                </TouchableOpacity>


<TouchableOpacity style={styles.buttonRegister}>
    <Text style={styles.registerText}></Text>
</TouchableOpacity>


            </Animatable.View>
            
        </View>
    );
} 
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#38a69d'

    },
    containerHeader:{
        marginTop: '14%',
        marginBottom:'8%',
        paddingStart: '5%',

    },
    message:{
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFF'
    },
    containerForm: {
        backgroundColor: '#FFF',
        flex:1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title:{
        fontSize: 20,
        marginTop:28,
    },
    input:{
        borderBottomWidth: 1,
        heigth: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    button:{
        backgroundColor: '#38a69d',
        width:'100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText:{
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonRegister:{
        marginTop: 14,
        alignSelf: 'center'
    },
    registerText:{
        color: '#a1a1a1'
    }
})