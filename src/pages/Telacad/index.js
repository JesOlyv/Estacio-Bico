import React, { useState } from "react";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
} from "react-native";

const RegisterScreen = () => {
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

			<TouchableOpacity style={styles.button} onPress={handleRegister}>
				<Text style={styles.buttonText}>Cadastrar</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 32,
	},
	input: {
		borderWidth: 1,
		borderColor: "#242222",
		borderRadius: 4,
		padding: 8,
		marginVertical: 8,
		minWidth: "80%",
	},
	button: {
		backgroundColor: "#32D6CC",
		paddingHorizontal: 16,
		paddingVertical: 8,
		borderRadius: 4,
	},
	buttonText: {
		color: "#242222y",
		fontSize: 18,
		fontWeight: "bold",
	},
});

export default RegisterScreen;