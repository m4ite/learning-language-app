import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native"
import { Icon, TextInput } from "react-native-paper"
import { useState } from "react"
import axios from "axios"

export function CreateNivel(props) {
    const [title, setTitle] = useState("")

    async function create() {
        const nivel = { name: title }
        const jwt = sessionStorage.getItem('token')
        const res = await axios.post("http://localhost:8080/level", nivel, { headers: { "Authorization": "Bearer " + jwt } })
        if (res.data)
            props.navigation.navigate("ViewNiveis")
    }

    return (
        <View style={style.bg}>
            <TouchableOpacity onPress={() => props.navigation.navigate("ViewNiveis")}>
                <Icon source="chevron-left" size={20} />
            </TouchableOpacity>

            <Image source={require("../../assets/nivelCreate.png")} style={style.img} />
            <Text style={style.title}>Crie um nível</Text>

            <TextInput
                label="Titulo"
                onChangeText={p => setTitle(p)}
                left={<TextInput.Icon icon="format-title" />}
                style={style.input}
                activeUnderlineColor="green"
                underlineColor="#EF5454" />

            <TouchableOpacity style={style.button} onPress={() => create()}>
                <Text style={style.buttonText}>Criar</Text>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    img: {
        width: "200px",
        height: "200px",
        alignSelf: 'center'
    },
    title: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: 800,
        marginBottom: 30
    },
    bg: {
        backgroundColor: "white",
        height: "100%"
    },
    imgDefault: {
        width: "150px",
        height: "150px",
        alignSelf: 'center',
        marginBottom: 30,
        borderRadius: 15,
    },
    input: {
        backgroundColor: "#F9F9F9",
        margin: 10,
        borderColor: "gray",
        marginHorizontal: 50,
        marginVertical: 100
    },
    button: {
        backgroundColor: "#EF5454",
        padding: "1em",
        marginHorizontal: 50,
        borderRadius: 10,
        marginVertical: 30
    },
    buttonText: {
        textAlign: "center",
        color: "white",
        fontWeight: 600,
        fontSize: 15
    },
})