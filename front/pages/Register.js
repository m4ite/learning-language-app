import axios from "axios";
import { useState } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";

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
            password
        }

        const res = await axios.post("http://localhost:8080/user", user);

        console.log(res)
        props.navigation.navigate("Login");

    }

    return (
        <>
            <View>
                <Text>Name: </Text>
                <TextInput onChangeText={(text) => setName(text)}></TextInput>

                <Text>Email: </Text>
                <TextInput onChangeText={(text) => setEmail(text)}></TextInput>

                <Text>Age: </Text>
                <TextInput onChangeText={(text) => setAge(text)}></TextInput>

                <Text>Password: </Text>
                <TextInput onChangeText={(text) => setPassword(text)}></TextInput>

                <TouchableOpacity onPress={() => register()}>
                    <Text>Register</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}