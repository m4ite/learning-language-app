import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native"
import { TextInput, Icon } from 'react-native-paper';
import { useState } from "react";
import axios from "axios"


export function CreateHistorias(props) {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [image, setImage] = useState("")
    const [xp, setXp] = useState(0)

    async function create(){
        const newHistoria = {
            title,
            content,
            image,
            xp
        }
        const jwt = sessionStorage.getItem('token')
        const res = await axios.post("http://localhost:8080/story", newHistoria,{headers: {"Authorization":"Bearer " + jwt}})

        if(res.data)
            props.navigation.navigate("ViewHistoria")
    }

    return (
        <>
            <View style={style.bg}>
                <TouchableOpacity onPress={() => props.navigation.navigate("ViewHistoria")}><Icon source="chevron-left" size={20} /></TouchableOpacity>
                <Image source={require("../../assets/book2.png")} style={style.img} />

                <Text style={style.title}>Crie uma nova história</Text>

                <Image source={require("../../assets/defaultHistoria.png")} style={style.imgDefault} />

                <TextInput
                    label="Titulo"
                    onChangeText={p => setTitle(p)}
                    left={<TextInput.Icon icon="format-title" />}
                    style={style.input}
                    activeUnderlineColor="green"
                    underlineColor="#EF5454" />

                <TextInput
                    label="Historia"
                    onChangeText={p => setContent(p)}
                    left={<TextInput.Icon icon="subtitles-outline" />}
                    style={style.input}
                    activeUnderlineColor="green"
                    multiline
                    numberOfLines={9}
                    underlineColor="#EF5454" />

                <TextInput label="Xp"
                    onChangeText={p => setXp(p)}
                    style={style.input}
                    left={<TextInput.Icon icon="creation" />}
                    activeUnderlineColor="green"
                    underlineColor="#EF5454" />

                <TouchableOpacity style={style.button} onPress={() => create()}>
                    <Text style={style.buttonText}>Criar</Text>
                </TouchableOpacity>

            </View>


        </>
    )
}

const style = StyleSheet.create({
    bg: {
        backgroundColor: "white",
        height: "100%"
    },
    input: {
        backgroundColor: "#F9F9F9",
        margin: 10,
        borderColor: "gray",
        marginHorizontal: 50,
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
    title: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: 800,
        marginBottom: 30
    },
    img: {
        width: "250px",
        height: "250px",
        alignSelf: 'center'
    },

    imgDefault: {
        width: "200px",
        height: "200px",
        alignSelf: 'center',
        marginBottom: 30,
        borderRadius: 15,
      },
})