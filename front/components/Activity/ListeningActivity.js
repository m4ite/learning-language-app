import { useState, useContext, useEffect } from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Icon, MD3Colors } from 'react-native-paper';
import { CheckButton } from "./CheckButton";
import { Option } from "./Option";
import { activityContext } from '../../context/activityContext'
import { Error } from "../Error";
import { Right } from "../Right";
import axios from "axios"

export function ListeningActivity() {
    const [act, setAct] = useState("")
    const [resSelected, setResSelected] = useState()
    const { typeActivity, setTypeActivity } = useContext(activityContext)
    const [answer, setAnswer] = useState("")
    const [isRight, setIsRight] = useState(true)

    const jwt = sessionStorage.getItem("token")
    const header = { headers: { "Authorization": " Bearer " + jwt } }

    const get = async () => {
        const json = { "nome": typeActivity.name }
        const res = await axios.post("http://localhost:8080/listening/getByName", json, header)
        setAct(res.data)
    }

    function set(id, text){
        setResSelected(id)
        setAnswer(text)
    }

    useEffect(() => {
        get()
    }, [])


    return (
        <>
            <Text style={style.title}>What do you hear?</Text>
            <TouchableOpacity style={style.play}>
                <Icon
                    source="volume-high"
                    color={MD3Colors.neutral100}
                    size={100} />
            </TouchableOpacity>

            <View style={style.container}>
                <Option text={act.alternativa1} isActive={resSelected == 0} onPress={() => set(0, act.alternativa1)} />
                <Option text={act.alternativa2} isActive={resSelected == 1} onPress={() => set(1, act.alternativa2)} />
                <Option text={act.alternativa3} isActive={resSelected == 2} onPress={() => set(2, act.alternativa3)} />
                <Option text={act.resposta} isActive={resSelected == 3} onPress={() => set(3, act.resposta)} />
            </View>

            <CheckButton />

            {isRight ? <Right/> : <Error/>}
            
        </>
    )
}

const style = StyleSheet.create({
    title: {
        fontWeight: 700,
        fontSize: 20,
        color: "gray",
        padding: 15
    },
    play: {
        backgroundColor: "#2DB2F5",
        borderRadius: 20,
        padding: "1em",
        marginHorizontal: 140,
        marginVertical: 25
    },
    container: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center"
    }
})