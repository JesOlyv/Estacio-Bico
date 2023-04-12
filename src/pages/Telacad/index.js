import React, { useState } from "react";

import { View, Text, StyleSheet, TextInput, TouchableOpacity, } from 'react-native';

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native';


export default function Telacad() {
    const navigation = useNavigation();
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");
	const [age, setAge] = useState("");
	const [profession, setProfession] = useState("");
	const [experience, setExperience] = useState("");

	const handleRegister = () => {
		console.log(
			`Name: ${name}, Phone: ${phone}, Address: ${address}, Age: ${age}, Profession: ${profession}, Experience: ${experience}`
		);
		// Coloque aqui o seu código de registro
	};
	

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Cadastro</Text>

			<TextInput
				style={styles.input}
				placeholder="Nome"
				autoCapitalize="words"
				value={name}
				onChangeText={(text) => setName(text)}
			/>


			<TextInput
				style={styles.input}
				placeholder="Telefone"
				keyboardType="phone-pad"
				value={phone}
				onChangeText={(text) => setPhone(text)}
			/>

			<TextInput
				style={styles.input}
				placeholder="Endereço"
				autoCapitalize="words"
				value={address}
				onChangeText={(text) => setAddress(text)}
			/>

			<TextInput
				style={styles.input}
				placeholder="Idade"
				keyboardType="numeric"
				value={age}
				onChangeText={(text) => setAge(text)}
			/>

			<TextInput
				style={styles.input}
				placeholder="Profissão"
				autoCapitalize="words"
				value={profession}
				onChangeText={(text) => setProfession(text)}
			/>

			<TextInput
				style={styles.input}
				placeholder="Experiência Profissional"
				autoCapitalize="sentences"
				multiline
				value={experience}
				onChangeText={(text) => setExperience(text)}
			/>

			<TouchableOpacity 
			style={styles.button}
			onPress={() => navigation.navigate('SignIn')}
			>
				<Text style={styles.buttonText}>Cadastrar</Text>
			</TouchableOpacity>
		</View>
	);
};


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#FFFFFF'

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
