import { TouchableOpacity, Text, StyleSheet } from "react-native";

export function CheckButton(){
    return(
        <TouchableOpacity style={style.bg}>
            <Text style={style.text}>CHECK</Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    bg: {
        backgroundColor: "#59C912",
        marginHorizontal: 20,
        borderRadius: 15,
        borderColor: "#58A503",
        borderBottomWidth: 2,
        marginTop: 50     
    },
    text:{
        color: "white",
        fontSize: 20,
        fontWeight: 600,
        textAlign: "center",
        padding: 10
    }
})