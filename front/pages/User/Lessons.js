import { View, StyleSheet, ScrollView, Text, Image } from 'react-native'
import { useState, useEffect } from 'react';
import axios from "axios"
import { ActivityPreview } from './ActivityPreview';

export function Lessons(props) {
    const [niveis, setNiveis] = useState([])
    const [listening, setListening] = useState([])
    const [write, setWrite] = useState([])
    const [option, setOption] = useState([])

    const jwt = sessionStorage.getItem("token")
    const header = { headers: { "Authorization": " Bearer " + jwt } }

    async function getNiveis() {
        await axios.get("http://localhost:8080/level", header)
            .then((response) => { setNiveis(response.data) })
    }

    async function getWrite() {
        await axios.get("http://localhost:8080/writing", header)
            .then((respose) => { setWrite(respose.data) })
    }

    async function getOption() {
        await axios.get("http://localhost:8080/option", header)
            .then((respose) => { setOption(respose.data) })
    }

    async function getListening() {
        await axios.get("http://localhost:8080/listening", header)
            .then((respose) => { setListening(respose.data) })
    }

    useEffect(() => {
        getNiveis()
        getWrite()
        getOption()
        getListening()
    }, [])

    return (
        <ScrollView>
            <Image source={require("../../assets/hello.png")} style={{ width: 120, height: 105, alignSelf: "center" }} />
            <Text style={style.title}>
                Unidades de Inglês
                <Image source={require("../../assets/eua.png")} style={{ width: 50, height: 50 }} />
            </Text>

            {niveis.map((item) =>
                <View key={item.id}>
                    <Text style={style.h2}><Text style={style.span}>{item.name}</Text></Text>
                    {listening.filter(e => e.nivel === item.name).map((item2) =>
                        <ActivityPreview nome={item2.nome} type={item2.tipo}/>
                    )}

                    {write.filter(e => e.nivel === item.name).map((item2) =>
                       <ActivityPreview nome={item2.nome} type={item2.tipo}/>
                    )}

                    {option.filter(e => e.nivel === item.name).map((item2) =>
                        <ActivityPreview nome={item2.nome} type={item2.tipo}/>
                    )}

                </View>
            )}
        </ScrollView>
    )
}


const style = StyleSheet.create({
    h2: {
        width: "100%",
        textAlign: "center",
        borderBottomColor: "#bebebe",
        borderBottomWidth: "1px",
        lineHeight: "0.1em",
        margin: "10px",
        marginVertical: "20px",
        fontSize: "18px",
    },
    span: {
        paddingHorizontal: "10px",
        backgroundColor: "white",
        fontWeight: "900"
    },
    title: {
        display: "flex",
        flexDirection: "row",
        fontSize: "25px",
        fontWeight: "600",
        textAlign: "center",
        padding: "1em",
        alignItems: "center",
        justifyContent: "space-evenly"
    }
})