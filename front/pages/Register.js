import axios from "axios";
import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { TextInput, IconButton } from "react-native-paper";

export function Register(props) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [age, setAge] = useState("")
    const [password, setPassword] = useState("")


    const register = async () => {
        if (!name || !email || !age || !password) return

        const user = {
            name,
            email,
            age,
            proficience: "Beginner",
            password,
            adm: false
        }

        const res = await axios.post("http://localhost:8080/user", user);
        props.navigation.navigate("Login");

    }

    return (
        <>
            <IconButton
                icon="chevron-left"
                onPress={() => props.navigation.navigate("Start")} />

            <View>
                <Image source={require("../assets/initial.png")} style={style.img}></Image>
                <TextInput
                    label="Full name"
                    left={<TextInput.Icon icon="account-circle" />}
                    style={style.input}
                    activeUnderlineColor="green"
                    underlineColor="#EF5454"
                    onChangeText={(text) => setName(text)} />


                <TextInput
                    label="Email"
                    left={<TextInput.Icon icon="email" />}
                    style={style.input}
                    activeUnderlineColor="green"
                    underlineColor="#EF5454"
                    keyboardType="email-address"
                    onChangeText={(text) => setEmail(text)} />

                <TextInput
                    label="Age"
                    left={<TextInput.Icon icon="calendar" />}
                    style={style.input}
                    activeUnderlineColor="green"
                    underlineColor="#EF5454"
                    onChangeText={(text) => setAge(text)} />

                <TextInput
                    label="Password"
                    style={style.input}
                    activeUnderlineColor="green"
                    underlineColor="#EF5454"
                    left={<TextInput.Icon icon="form-textbox-password" />}
                    secureTextEntry
                    onChangeText={(text) => setPassword(text)} />
                <TouchableOpacity onPress={() => register()} style={style.register}>
                    <Text style={style.registerText}>Register</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}


const style = StyleSheet.create({
    input: {
        backgroundColor: "#F9F9F9",
        margin: 3,
        borderColor: "gray",
        marginHorizontal: 50,
        marginVertical: 8
    },
    img: {
        width: "250px",
        height: "250px",
        alignSelf: 'center'
    },
    register: {
        backgroundColor: "#EF5454",
        borderRadius: 30,
        padding: ".8em",
        marginHorizontal: 50,
        marginTop: 10
    },
    registerText: {
        color: "white",
        textAlign: "center",
        fontWeight: "600",
    }
})