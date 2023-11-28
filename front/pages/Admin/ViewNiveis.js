import axios from "axios"
import { useEffect, useState, useContext } from "react"
import { TouchableOpacity, ScrollView, Text, StyleSheet, Image, FlatList, View } from "react-native"
import { Icon, List, MD3Colors } from "react-native-paper"
import { levelContext } from '../../context/levelContext'

export function ViewNiveis(props) {
    const [niveis, setNiveis] = useState([])
    const { level, setLevel } = useContext(levelContext)
    const [write, setWrite] = useState([])
    const [options, setOptions] = useState([])
    const [list, setList] = useState([])

    const jwt = sessionStorage.getItem("token")
    const header = { headers: { "Authorization": " Bearer " + jwt } }

    async function getNiveis() {
        await axios.get("http://localhost:8080/level", header)
            .then((response) => {
                setNiveis(response.data)
            })
    }

    async function getActivity(nivel) {
        const json = { "nome": nivel }
        await axios.post(`http://localhost:8080/listening/level`, json, header)
            .then((res) => {
                setList(res.data)
            })

        await axios.post("http://localhost:8080/option/level", json, header)
            .then((res) => {
                setOptions(res.data)
            })

        await axios.post("http://localhost:8080/writing/level", json, header)
            .then((res) => {
                setWrite(res.data)
            })
    }

    function createActivity(nivel) {
        setLevel(nivel)
        props.navigation.navigate("CreateAtividade")
    }

    useEffect(() => {
        getNiveis()
    }, [])

    return (
        <>
            <TouchableOpacity onPress={() => props.navigation.navigate('HomeADM')} style={{ padding: 10 }}>
                <Icon source="chevron-left" size={20} />
            </TouchableOpacity>

            <Image source={require("../../assets/initial.png")} style={style.img} />

            <Text style={style.title}>Níveis Criados</Text>
            <ScrollView style={style.Accordion}>
                <FlatList data={niveis}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => (
                        <List.Accordion title={`${item.name}`} id={item.id} onPress={() => getActivity(item.name)}>
                            <FlatList data={list}
                                keyExtractor={(item, index) => item + index}
                                renderItem={({ item }) => (
                                    <TouchableOpacity id={item}>
                                        <List.Item style={style.List} title={item.nome}
                                            left={props => <List.Icon {...props} icon="file-document-outline" />} />
                                    </TouchableOpacity>
                                )} />

                            <FlatList data={options}
                                keyExtractor={(item, index) => item + index}
                                renderItem={({ item }) => (
                                    <TouchableOpacity id={item}>
                                        <List.Item style={style.List} title={item.nome}
                                            left={props => <List.Icon {...props} icon="file-document-outline" />} />
                                    </TouchableOpacity>
                                )} />

                            <FlatList data={write}
                                keyExtractor={(item, index) => item + index}
                                renderItem={({ item }) => (
                                    <TouchableOpacity id={item}>
                                        <List.Item style={style.List} title={item.nome}
                                            left={props => <List.Icon {...props} icon="file-document-outline" />} />
                                    </TouchableOpacity>
                                )} />

                            < TouchableOpacity onPress={() => createActivity(item.name)}>
                                <List.Item style={style.List} title="Criar atividade"
                                    left={props => <List.Icon {...props} icon="plus" />} />
                            </TouchableOpacity>
                        </List.Accordion>
                    )} />
            </ScrollView>
            <TouchableOpacity style={style.plus} onPress={() => props.navigation.navigate("CreateNivel")}>
                <Icon source="plus" color={MD3Colors.error100} size={40} />
            </TouchableOpacity>
        </>
    )
}


const style = StyleSheet.create({
    Accordion: {
        margin: 30
    },
    List: {
        backgroundColor: "white"
    },
    title: {
        fontSize: 20,
        textAlign: "center",
        color: "#EF5454",
        fontWeight: "900",
        margin: 15
    },
    plus: {
        position: "fixed",
        bottom: 0,
        right: 0,
        margin: 15,
        backgroundColor: "#EF5454",
        borderRadius: "50%",
        padding: ".5em"
    },
    img: {
        width: "200px",
        height: "200px",
        alignSelf: 'center',
        margin: 10
    }
})