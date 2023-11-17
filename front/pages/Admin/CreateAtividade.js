import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native"
import { Picker } from '@react-native-picker/picker';
import { Icon } from "react-native-paper"
import { TextInput } from "react-native-paper"
import { useState } from "react"

export function CreateAtividades(props) {
    const [selectedActivityTtype, setType] = useState();
    return (
        <View style={style.bg}>

            <TouchableOpacity onPress={() => props.navigation.navigate("ViewNiveis")}>
                <Icon source="chevron-left" size={20} />
            </TouchableOpacity>

            <Image source={require("../../assets/atividade.png")} style={style.img} />
            <Text style={style.title}>Criar nova atividade</Text>
            <Text style={style.name}>Nivel Name</Text>

            <Picker onValueChange={(itemValue, itemIndex) => setType(itemValue)}>
                <Picker.Item enabled={false} label="Tipo de Atividade" />
                <Picker.Item  label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
            </Picker>
        </View>
    )
}

const style = StyleSheet.create({
    title: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: 800,
        marginBottom: 30
    },
    img: {
        width: "200px",
        height: "200px",
        alignSelf: 'center'
    },
    bg: {
        backgroundColor: "white",
        height: "100%"
    },
    input: {
        backgroundColor: "#F9F9F9",
        margin: 10,
        borderColor: "gray",
        marginHorizontal: 50,
    },
    name: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: 600,
        marginBottom: 30
    }

})