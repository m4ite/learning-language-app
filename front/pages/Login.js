import { useState } from "react";
import axios from "axios";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

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
            <View>
                <Text>Email: </Text>
                <TextInput onChangeText={(text) => setEmail(text)}></TextInput>

                <Text>Password: </Text>
                <TextInput onChangeText={(text) => setPassword(text)}></TextInput>

                <TouchableOpacity onPress={() => login()}>
                    <Text>Login</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}