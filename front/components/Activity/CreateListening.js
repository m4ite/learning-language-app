import { TextInput } from "react-native-paper"
import { StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import { useState } from "react";

export function CreateListening(){
    const [resposta, setRespota] = useState('')
    const [alternativa1, setAlternativa1] = useState('')
    const [alternativa2, setAlternativa2] = useState('')
    const [alternativa3, setAlternativa3] = useState('')


    return(
        <>
            {/* Audio */}
            <Image source={require('../../assets/soundDefault.png')} style={style.img}/>
            <TextInput
                    label="Alternativa Correta"
                    style={style.input}
                    activeUnderlineColor="green"
                    underlineColor="#EF5454"
                    onChangeText={(text) => setRespota(text)} />
            <TextInput
                    label="Alternativa 1"                  
                    style={style.input}
                    activeUnderlineColor="green"
                    underlineColor="#EF5454"
                    onChangeText={(text) => setAlternativa1(text)} />
            <TextInput
                    label="Alternativa 2"                  
                    style={style.input}
                    activeUnderlineColor="green"
                    underlineColor="#EF5454"
                    onChangeText={(text) => setAlternativa2(text)} />
            <TextInput
                    label="Alternativa 3"                    
                    style={style.input}
                    activeUnderlineColor="green"
                    underlineColor="#EF5454"
                    onChangeText={(text) => setAlternativa3(text)} />

            <TouchableOpacity style={style.button}>
                <Text style={style.text}>Criar atividade</Text>
            </TouchableOpacity>
        </>
    )
}



const style = StyleSheet.create({
    input: {
        backgroundColor: "#F9F9F9",
        margin: 10,
        borderColor: "gray",
        marginHorizontal: 50,
    },
    button:{
        backgroundColor: "#EF5454",
        padding: "1em",
        borderRadius: 20,
        marginHorizontal: 50,
        marginVertical: 20
    },
    text:{
        textAlign: "center",
        color: "white",
        fontWeight: 600,
        fontSize: "15px"
    },
    img: {
        width: "200px",
        height: "200px",
        alignSelf: 'center',
        borderRadius: 20,
        marginBottom: 20
    },
})