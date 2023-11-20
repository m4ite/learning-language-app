import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";

export function WriteActivity() {
    return (
        <>
            <Text style={style.title}>Escreva em Português: </Text>
            <View>
                <Image />
                <View><Text>We can work.</Text></View>
            </View>

            <View>
                <TouchableOpacity>
                    <Text>bateria</Text>
                    <Text>contra</Text>
                    <Text>podemos</Text>
                    <Text>trabalhar</Text>
                    <Text>Nós</Text>
                    <Text>marca</Text>
                    <Text>parecido</Text>
                </TouchableOpacity>
            </View>
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
})