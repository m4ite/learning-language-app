import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native"
import { Picker } from '@react-native-picker/picker';
import { Icon } from "react-native-paper"
import { useState } from "react"
import { CreateListening } from "../../components/Activity/CreateListening";
import { CreateWrite } from "../../components/Activity/CreateWrite";
import { CreateOption } from "../../components/Activity/CreateOptions";

export function CreateAtividades(props) {
    const [selectedActivityTtype, setType] = useState();

    function renderForm() {
        if (selectedActivityTtype == "Listening")
            return (<CreateListening />)

        if (selectedActivityTtype == "Write")
            return (<CreateWrite />)

        if (selectedActivityTtype == "Options")
            return (<CreateOption />)
    }

    return (
        <View style={style.bg}>

            <TouchableOpacity onPress={() => props.navigation.navigate("ViewNiveis")}>
                <Icon source="chevron-left" size={20} />
            </TouchableOpacity>

            <Image source={require("../../assets/atividade.png")} style={style.img} />
            <Text style={style.title}>Criar nova atividade</Text>
            <Text style={style.name}>Nivel Name</Text>

            <View style={{marginHorizontal: 50}}>
                <Picker onValueChange={(itemValue, itemIndex) => setType(itemValue)} style={style.picker}>
                    <Picker.Item fontWeight="900" label="Tipo de Atividade" />
                    <Picker.Item label="Listening" value="Listening" />
                    <Picker.Item label="Write" value="Write" />
                    <Picker.Item label="Options" value="Options" />
                </Picker>
            </View>

            {renderForm()}

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
    },
    picker: {
        padding: 10,
        fontWeight: 800,
        borderColor: "#EF5454",
        backgroundColor: "#F9F9F9",
        borderTopWidth: 0,
        borderEndWidth: 0,
        borderStartWidth: 0,
        marginBottom: 50
    }

})