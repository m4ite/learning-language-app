import { TextInput } from "react-native-paper"
import { StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import { useState, useContext } from "react";
import axios from "axios";
import { useNavigation } from "@react-navigation/native"
import { levelContext } from '../../context/levelContext'


export function CreateListening() {
    var navigation = useNavigation()
    const {level, setLevel} = useContext(levelContext)
    const [nome, setNome] = useState('')
    const [resposta, setRespota] = useState('')
    const [alternativa1, setAlternativa1] = useState('')
    const [alternativa2, setAlternativa2] = useState('')
    const [alternativa3, setAlternativa3] = useState('')

    const create = async () => {
        const activity = {
            nome,
            resposta,
            alternativa1,
            alternativa2,
            alternativa3,
            nivel: level,
            tipo: "listening"
        }

        const jwt = sessionStorage.getItem("token")
        const res = await axios.post("http://localhost:8080/listening", activity, { headers: { "Authorization": "Bearer " + jwt } })
        if (res.data == true)
            navigation.navigate("ViewNiveis")
    }

    return (
        <>
            <TextInput
                label="Nome da atividade"
                style={style.input}
                activeUnderlineColor="green"
                underlineColor="#EF5454"
                onChangeText={(text) => setNome(text)} />
            {/* Audio */}
            <Image source={require('../../assets/soundDefault.png')} style={style.img} />
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

            <TouchableOpacity style={style.button} onPress={() => create()}>
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
        borderRadius: 20,
        marginBottom: 20,
        marginVertical: 50
    },
})