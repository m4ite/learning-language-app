import { useState } from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";

export function WriteActivity() {
    const [text, setText] = useState("")

    function add(word)
    {
        if(text.includes(word))
        {
            var string = text;
            string = string.replace(word,"")
            setText(string)
        }
        else
            setText(text + word + " " )
    }

    return (
        <>
            <Text style={style.title}>Escreva em Português: </Text>
            <View>
                <Image/>
                <View><Text>We can work.</Text></View>
            </View>

            <View>
                <Text style={style.answer}>{text}</Text>
            </View>

            <View style={style.op}>
                <TouchableOpacity style={[style.option, style.shadowProp]} onPress={()=> add("bateria")}>
                    <Text>bateria</Text>
                </TouchableOpacity >
                <TouchableOpacity style={[style.option, style.shadowProp]} onPress={()=> add("contra")}>
                    <Text>contra</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[style.option, style.shadowProp]} onPress={()=> add("podemos")}>
                    <Text>podemos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[style.option, style.shadowProp]} onPress={()=> add("trabalhar")}>
                    <Text>trabalhar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[style.option, style.shadowProp]} onPress={()=> add("Nós")}>
                    <Text>Nós</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[style.option, style.shadowProp]} onPress={()=> add("marca")}>
                    <Text>marca</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[style.option, style.shadowProp]} onPress={()=> add("parecido")}>
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
    op:{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center"
    },
    option:{
        padding: "1em",
        borderRadius: 20,
        alignItems: "center",
        margin: 15,
        borderColor: "#E5E5E5",
        borderWidth: 1,
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
      answer:{
        fontSize: 18,
        textAlign: "center",
        marginVertical: 40
      }

})