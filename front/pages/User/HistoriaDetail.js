import { Text, Image, StyleSheet, ScrollView, View, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-paper'
import axios from "axios"
import { useContext, useEffect, useState } from 'react'
import { storyContext } from "../../context/storyContext"

export function HistoriaDetail(props) {

    const [historia, setHistoria] = useState({})
    const { story, setStory } = useContext(storyContext)

    async function get() {
        const jwt = sessionStorage.getItem("token")
        const header = { headers: { "Authorization": " Bearer " + jwt } }
        const json = { "title": story }
        await axios.post("http://localhost:8080/story/search", json, header)
            .then((response) => { setHistoria(response.data) })
    }

    useEffect(() => {
        get()
    }, [])

    return (
        <ScrollView style={{ backgroundColor: "white" }}>
            <TouchableOpacity style={{ padding: 10 }} onPress={() => props.navigation.navigate('Home')}>
                <Icon source="chevron-left" size={25} />
            </TouchableOpacity>

            <Image source={require("../../assets/rainyDay.png")} style={{ width: 200, height: 200, alignSelf: "center" }} />
            <Text style={style.title}>{story}</Text>

            <View style={style.lines}>
                <Text>{historia.content}</Text>
            </View>
        </ScrollView>
    )
}


const style = StyleSheet.create({
    title: {
        fontSize: "20px",
        alignItems: "center",
        textAlign: "center",
        fontWeight: "800"
    },
    lines: {
        padding: "3rem"
    }
})