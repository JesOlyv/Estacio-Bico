import React, { useState } from 'react';
import { View, Text, StyleSheet,FlatList, TextInput, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native';

const OPTIONS = [
  { id: '1', title: 'Pedreiro' },
  { id: '2', title: 'Gesseiro' },
  { id: '3', title: 'Ladrilheiro' },
  { id: '4', title: 'Diarista' },
  { id: '5', title: 'Marido de aluguel' },
];

const Menu = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionPress = (optionId) => {
    setSelectedOption(optionId);
  };

  const renderOption = ({ item }) => (
    <TouchableOpacity
      onPress={() => handleOptionPress(item.id)}
      style={{ padding: 10, backgroundColor: selectedOption === item.id ? 'gray' : 'white' }}
    >
      <Text style={{ fontSize: 16 }}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    
    <View style={{ flex: 1 }}>
      <FlatList
        data={OPTIONS}
        renderItem={renderOption}
        keyExtractor={(item) => item.id}
      />
    
    <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>Após a escolha do seu profissional:</Text>
        <TextInput
        placeholder="Descreva sobre o  serviço que será realizado!"
        style={styles.input}
        />



<TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate()}
        >
            <Text style={styles.buttonText}>Envie para o profissional</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate()}
        >
            <Text style={styles.buttonText}>Avalie o serviço prestado</Text>
        </TouchableOpacity>


<TouchableOpacity style={styles.buttonRegister}>
<Text style={styles.registerText}>Acompanhe seu serviço/Histórico de contratação</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.buttonRegister}>
<Text style={styles.registerText}>Veja seu Perfil/Avaliações</Text>
</TouchableOpacity>



    </Animatable.View>
    
</View>
  );

};
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#38a69d'

    },
    containerHeader:{
        marginTop: '10%',
        marginBottom:'8%',
        paddingStart: '5%',

    },
    message:{
        fontSize: 15,
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

export default Menu;
