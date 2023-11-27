import { TextInput } from "react-native-paper"
import { StyleSheet, TouchableOpacity, Text } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { useState, useContext } from "react"
import { levelContext } from '../../context/levelContext'
import axios from "axios"

export function CreateWrite() {
    var navigation = useNavigation()
    const {level, setLevel} = useContext(levelContext)
    const [enunciado, setEnunciado] = useState('')
    const [resposta, setResposta] = useState('')
    const [nome, setNome] = useState('')
    const [palavra1, setPalavra1] = useState('')
    const [palavra2, setPalavra2] = useState('')
    const [palavra3, setPalavra3] = useState('')
    const [palavra4, setPalavra4] = useState('')
    const [palavra5, setPalavra5] = useState('')
    const [palavra6, setPalavra6] = useState('')
    const [palavra7, setPalavra7] = useState('')
    const [palavra8, setPalavra8] = useState('')

    const create = async () => {
        const write = {
            nome,
            enunciado,
            resposta,
            palavra1,
            palavra2,
            palavra3,
            palavra4,
            palavra5,
            palavra6,
            palavra7,
            palavra8,
            nivel: "Nivel 1",
            tipo: "write"
        }

        const jwt = sessionStorage.getItem("token")
        const res = await axios.post("http://localhost:8080/writing", write, { headers: { "Authorization": "Bearer " + jwt } })
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

            <TextInput
                label="Palavra 1"
                style={style.input}
                activeUnderlineColor="green"
                underlineColor="#EF5454"
                onChangeText={(text) => setPalavra1(text)} />

            <TextInput
                label="Palavra 2"
                style={style.input}
                activeUnderlineColor="green"
                underlineColor="#EF5454"
                onChangeText={(text) => setPalavra2(text)} />

            <TextInput
                label="Palavra 3"
                style={style.input}
                activeUnderlineColor="green"
                underlineColor="#EF5454"
                onChangeText={(text) => setPalavra3(text)} />

            <TextInput
                label="Palavra 4"
                style={style.input}
                activeUnderlineColor="green"
                underlineColor="#EF5454"
                onChangeText={(text) => setPalavra4(text)} />

            <TextInput
                label="Palavra 5"
                style={style.input}
                activeUnderlineColor="green"
                underlineColor="#EF5454"
                onChangeText={(text) => setPalavra5(text)} />
            <TextInput
                label="Palavra 6"
                style={style.input}
                activeUnderlineColor="green"
                underlineColor="#EF5454"
                onChangeText={(text) => setPalavra6(text)} />
            <TextInput
                label="Palavra 7"
                style={style.input}
                activeUnderlineColor="green"
                underlineColor="#EF5454"
                onChangeText={(text) => setPalavra7(text)} />
            <TextInput
                label="Palavra 8"
                style={style.input}
                activeUnderlineColor="green"
                underlineColor="#EF5454"
                onChangeText={(text) => setPalavra8(text)} />


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
})