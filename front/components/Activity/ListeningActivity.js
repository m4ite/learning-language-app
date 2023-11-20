import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Icon, MD3Colors } from 'react-native-paper';
import { CheckButton } from "./CheckButton";
import { Option } from "./Option";
import { OptionSelected } from "./OptionSelected";


export function ListeningActivity() {
    return (
        <>
            <Text style={style.title}>What do you hear?</Text>
            <TouchableOpacity style={style.play}>
                <Icon
                    source="volume-high"
                    color={MD3Colors.neutral100}
                    size={100} />
            </TouchableOpacity>

            <View style={style.container}>
                <OptionSelected text="chat"/>
                <Option text="gat"/>
                <Option text="pat"/>
                <Option text="nat"/>
            </View>

            <CheckButton/>
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
    play:{
        backgroundColor: "#2DB2F5",
        borderRadius: 20,
        padding: "1em",
        marginHorizontal: 128,
        marginVertical: 25     
    },
    container:{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center"
    }
})