import { useEffect, useState } from "react"
import { ScrollView, TouchableOpacity, View, Image, Text, StyleSheet, FlatList } from "react-native"
import { Icon } from "react-native-paper"
import axios from "axios"


export function ViewHistoria(props) {
    const [historias, setHistorias] = useState("")

    const jwt = sessionStorage.getItem("token")
    const header = { headers: { "Authorization": " Bearer " + jwt } }

    async function get() {
        await axios.get("http://localhost:8080/story", header)
            .then((response) => {
                setHistorias(response.data)
                console.log(response.data)
            })
    }

    useEffect(() => {
        get()
    }, [])

    return (
        <View style={style.bg}>
            <TouchableOpacity onPress={() => props.navigation.navigate('HomeADM')} style={{ padding: 10 }}>
                <Icon source="chevron-left" size={20} />
            </TouchableOpacity>

            <Image source={require("../../assets/initial.png")} style={style.mainImg} />

            <Text style={style.title}>Histórias Criadas</Text>
            <TouchableOpacity style={style.button} onPress={() => props.navigation.navigate("CreateHistoria")}>
                <Text style={style.create}>
                    + Criar nova historia
                </Text>
            </TouchableOpacity>

            <ScrollView>
                <FlatList data={historias}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={style.containerOut}>
                            <View style={style.container}>
                                <View style={{ width: "50%" }}>
                                    <Image source={require("../../assets/rainyDay.png")} style={style.img} />
                                </View>

                                <View style={{ width: "50%" }}>
                                    <Text style={style.txt}>{item.title}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )} />


            </ScrollView>
        </View>
    )
}


const style = StyleSheet.create({
    img: {
        height: "100px",
        width: "120px",

    },
    mainImg: {
        width: "200px",
        height: "200px",
        alignSelf: 'center',
        margin: 10
    },
    containerOut: {
        padding: "0.5em",
        marginHorizontal: 50,
        marginVertical: 15,
        backgroundColor: "#EF5454",
        borderRadius: 15

    },
    container: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        justifyContent: "space-between",
        padding: ".5em",
        borderRadius: 15
    },
    txt: {
        textAlign: "center",
        fontSize: 15,
        fontWeight: "600"
    },
    title: {
        fontSize: 20,
        textAlign: "center",
        color: "#EF5454",
        fontWeight: "900",
        margin: 15
    },
    create: {
        textAlign: "center",
        fontWeight: "700",
        paddingVertical: 5,
        marginVertical: 10,
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    },
    button: {
        borderColor: "black",
        borderWidth: 1,
        backgroundColor: "#F9F9F9",
        marginHorizontal: 50,
        marginVertical: 20,
        borderRadius: 5
    },
    bg: {
        height: "100%",
        backgroundColor: "white"
    },
})