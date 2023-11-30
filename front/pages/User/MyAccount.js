import { View, StyleSheet, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { Divider, Icon } from "react-native-paper";
import { useNavigation } from "@react-navigation/native"
import axios from "axios"
import { useState, useEffect } from "react";

export function MyAccount() {
    var navigation = useNavigation()
    const [user, setUser] = useState({})

    async function getUser() {
        const jwt = sessionStorage.getItem("token")
        const header = { headers: { "Authorization": " Bearer " + jwt } }

        await axios.get("http://localhost:8080/user/view", header)
            .then((res) => { setUser(res.data) })
    }

    useEffect(() => {
        getUser()
    }, [])

    return (
        <ScrollView>
            <Text style={style.pageTitle}>Profile</Text>
            <Divider />

            <TouchableOpacity onPress={() => navigation.navigate("Start")} style={{ alignSelf: "flex-end", padding: "1em" }}>
                <Icon source="logout" size={25} />
            </TouchableOpacity>

            <Image source={require("../../assets/userDefault.png")} style={style.img} />
            <Text style={style.name}>{user.name}</Text>

            <View style={{ padding: 20 }}>

                <Text style={style.sta}>Statistics</Text>
                <View style={style.award}>
                    <Image />
                    <Text style={style.txt}>
                        <Image source={require("../../assets/nivel.png")} style={style.icon} />
                        {user.xp} xp
                    </Text>
                </View>

                <View style={style.award}>
                    <Image />
                    <Text style={style.txt}>
                        <Image source={require("../../assets/level.png")} style={style.icon} />
                        level 1
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
}


const style = StyleSheet.create({
    pageTitle: {
        fontWeight: "800",
        fontSize: "20px",
        textAlign: "center",
        marginVertical: "10px"
    },
    img: {
        width: "150px",
        height: "150px",
        alignSelf: 'center',
        borderRadius: '50%',
        margin: "1em"
    },
    name: {
        fontWeight: "400",
        textAlign: "center",
        fontSize: "15px",
        fontWeight: 600
    },
    award: {
        backgroundColor: "white",
        margin: 10,
        borderColor: "#dfdfdf",
        padding: 20,
        borderWidth: "1px",
        borderRadius: "10px"
    },
    txt: {
        textAlign: "center",
        fontWeight: 600,
        alignSelf: "center",
    },
    icon: {
        width: "50px",
        height: "50px",
        alignSelf: "center"
    },
    sta: {
        fontSize: "20px",
        fontWeight: 600,
        padding: ".5em"
    }

})