import { View, StyleSheet, ScrollView, Text, Image, FlatList } from 'react-native'
import { HistoriaEscolher } from '../../components/HistoriaEscolher';
import { useState, useEffect } from 'react';
import axios from "axios"
export function Historias(props) {
    const [historias, setHistorias] = useState([])
    const jwt = sessionStorage.getItem("token")
    const header = { headers: { "Authorization": " Bearer " + jwt } }

    async function get() {
        await axios.get("http://localhost:8080/story", header)
            .then((response) => { setHistorias(response.data) })
    }

    useEffect(() => {
        get()
    }, [])

    return (
        <>
            <Image source={require("../../assets/hello.png")} style={style.img} />
            <View>
                <Text style={style.title}>MiauMundo Histórias</Text>
                <Text style={style.subtitle}>Melhore a sua leitura, escuta e fala com histórias curtinhas</Text>
            </View>

            <ScrollView>
                <Text style={style.h2}><Text style={style.span}>Série 1</Text></Text>
                <View style={style.grid}>
                    {historias.map((item) =>
                        <HistoriaEscolher key={item.id} title={item.title} xp={item.xp} image="rainyDay.png" />)}
                </View>
            </ScrollView>
        </>
    )
}



const style = StyleSheet.create({
    title: {
        fontSize: "20px",
        textAlign: "center",
        fontWeight: "800",
        padding: "1em"
    },
    subtitle: {
        textAlign: "center",
        padding: "1em"
    },
    h2: {
        width: "100%",
        textAlign: "center",
        borderBottomColor: "#bebebe",
        borderBottomWidth: "1px",
        lineHeight: "0.1em",
        margin: "10px",
        marginVertical: "20px"
    },
    span: {
        paddingHorizontal: "10px",
        backgroundColor: "white",
        fontWeight: "900"
    },
    grid: {
        display: 'flex',
        flexDirection: "row",
        flexWrap: "wrap"
    },
    button: {
        marginHorizontal: "10px"
    },
    img: {
        width: "120px",
        height: "108px",
        alignSelf: "center",
        margin: "10px"
    }
})