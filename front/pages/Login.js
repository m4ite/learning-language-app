import { useState } from "react";
import axios from "axios";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { TextInput } from "react-native-paper";
export function Login(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const login = async () => {

        if (!email || !password) return

        const user = { email, password }

        const res = await axios.post("http://localhost:8080/user/login", user)
        console.log(res.data)
        if (res.data === true)
            props.navigation.navigate("Home");
        else
            console.log("senha ou email invalidos")
    }

    return (
        <>
            <View style={style.body}>
                <Image source={require("../assets/initial.png")} style={style.img}/>
                <View style={style.contentView}>
                    <Text style={style.content}><Text style={{ fontWeight: "bold" }}>Login</Text> to your account</Text>
                </View>

                <TextInput
                    label="Email"
                    left={<TextInput.Icon icon="email" />}
                    style={style.input}
                    activeUnderlineColor="green"
                    underlineColor="#EF5454"
                    keyboardType="email-address"
                    onChangeText={(text) => setEmail(text)} />

                <TextInput
                    label="Password"
                    style={style.input}
                    activeUnderlineColor="green"
                    underlineColor="#EF5454"
                    left={<TextInput.Icon icon="form-textbox-password" />}
                    secureTextEntry
                    onChangeText={(text) => setPassword(text)} />

                <TouchableOpacity onPress={() => login()} style={style.login}>
                    <Text style={style.loginText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => props.navigation.navigate("Register")}>
                    <Text style={style.content2}>Don't have an Account? &nbsp;
                        <Text style={{color: "#EF5454", fontWeight: "500"}}>Sign up</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        </>
    )
}


const style = StyleSheet.create({
    body: {
        height: "100%",
        textAlign: "center",
        justifyContent: "center"
    },
    input: {
        backgroundColor: "#F9F9F9",
        margin: 10,
        borderColor: "gray",
        marginHorizontal: 50,
    },
    img: {
        width: "300px",
        height: "300px",
        alignSelf: 'center'
    },
    content: {
        fontSize: "20px",
        margin: 20,
        textAlign: "center"
    },
    content2: {
        fontSize: "15px",
        margin: 30,
        textAlign: "center"
    },
    login: {
        backgroundColor: "#EF5454",
        borderRadius: 30,
        padding: "1em",
        marginHorizontal: 50,
        marginTop: 20
    },
    loginText: {
        color: "white",
        textAlign: "center",
        fontWeight: "600",
    }
})