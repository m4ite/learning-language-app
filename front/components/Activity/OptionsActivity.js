import { Option } from "./Option"
import { Text, StyleSheet } from "react-native"

export function OptionsActivity() {
    return (
        <>
            <Text style={style.enunciado}>Which of these is "the cheese"?</Text>
            <Option />
        </>
    )
}

const style = StyleSheet.create({
    enunciado: {
        fontSize: "20px",
        fontWeight: "700",
        color: "gray",
        padding: 15
    },

})