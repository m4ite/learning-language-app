import { TextInput } from "react-native-paper"
import { StyleSheet, TouchableOpacity, Text, Image } from "react-native"
import { useState } from "react"

export function CreateOption() {
    const [enunciado, setEnunciado] = useState('')
    const [resposta, setResposta] = useState('')
    const [opcao1, setOpcao1] = useState('')
    const [opcao2, setOpcao2] = useState('')
    const [opcao3, setOpcao3] = useState('')


    return (
        <>
            <TextInput
                label="Enunciado"
                style={style.input}
                activeUnderlineColor="green"
                underlineColor="#EF5454"
                onChangeText={(text) => setEnunciado(text)} />

            <TextInput
                label="Resposta"
                style={style.input}
                activeUnderlineColor="green"
                underlineColor="#EF5454"
                onChangeText={(text) => setResposta(text)} />

             <Image source={require('../../assets/defaultImage.png')} style={style.img}/>

            <TextInput
                label="Opçao 1"
                style={style.input}
                activeUnderlineColor="green"
                underlineColor="#EF5454"
                onChangeText={(text) => setOpcao1(text)} />
             <Image source={require('../../assets/defaultImage.png')} style={style.img}/>

            <TextInput
                label="Opçao 2"
                style={style.input}
                activeUnderlineColor="green"
                underlineColor="#EF5454"
                onChangeText={(text) => setOpcao2(text)} />
             <Image source={require('../../assets/defaultImage.png')} style={style.img}/>

            <TextInput
                label="Opçao 3"
                style={style.input}
                activeUnderlineColor="green"
                underlineColor="#EF5454"
                onChangeText={(text) => setOpcao3(text)} />
             <Image source={require('../../assets/defaultImage.png')} style={style.img}/>

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
    button: {
        backgroundColor: "#EF5454",
        padding: "1em",
        borderRadius: 20,
        marginHorizontal: 50,
        marginVertical: 20
    },
    text: {
        textAlign: "center",
        color: "white",
        fontWeight: 600,
        fontSize: "15px"
    },
    img: {
        width: "200px",
        height: "200px",
        alignSelf: 'center',
        marginBottom: 80
    },
})