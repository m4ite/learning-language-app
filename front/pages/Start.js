import { View, Image, TouchableOpacity, Text, StyleSheet } from "react-native";

export function Start(props) {

    return (
        <View style={style.body}>
            <View style={style.top}>
                <Image source={require("../assets/initial.png")} style={style.img}></Image>
                <View style={style.container}>
                    <Text style={style.title}>Learn a language for free Forever</Text>
                    <View style={style.buttons}>
                        <TouchableOpacity onPress={() => props.navigation.navigate("Register")} style={style.button2}><Text style={style.text2}>Register</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => props.navigation.navigate("Login")} style={style.button1}><Text style={style.text1}>Login</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}


const style = StyleSheet.create({
    container: {
        backgroundColor: "#EF5454",
        width: "100%",
        height: "50%",
        position: "fixed",
        bottom: 0,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        padding: 25,
        justifyContent: "center"
    },
    top: {
        textAlign: "center",
        justifyContent: "center",
        height: "50%",
    },
    img: {
        width: "300px",
        height: "300px",
        alignSelf: 'center'
    },
    body:{
        height: "100%",

    },
    button1: {
        padding: "1em",
        backgroundColor: "white",
        textAlign: "center",
        borderRadius: 30,
        borderColor: "white",
        marginTop: 10

    },
    button2: {
        padding: "1em",
        borderColor: "white",
        textAlign: "center",
        borderRadius: 30,
        borderWidth: 1,
        marginTop: 80
    },
    text1: {
        color: "#EF5454",
        textAlign: "center",
        fontWeight: "600"
    },
    text2: {
        color: "white",
        textAlign: "center",
        fontWeight: "600"
    },
    title:{
        color: "white",
        fontSize: "30px",
        fontWeight: 800,
        textAlign: "center",
        padding: 10
    },
})