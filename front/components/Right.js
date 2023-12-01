import { Text, StyleSheet, View, TouchableOpacity } from "react-native"
import { Icon, MD3Colors } from "react-native-paper"
import { useNavigation } from "@react-navigation/native"

export function Right(props) {
    const navigation = useNavigation()
    return (
        <View style={style.container}>
            <View style={{display: "flex", flexDirection: "row"}}>
                <Icon
                    source="check-circle"
                    color="#59C912"
                    size={40}
                />
                <Text style={{color: "#59C912", fontSize: 25, marginLeft: 20, fontWeight: 700}}>Execlente!</Text>

            </View>

            <TouchableOpacity style={style.button} onPress={() => navigation.navigate("Home")}>
                <Text style={style.buttonText}>CONTINUAR!</Text>
            </TouchableOpacity>
        </View>
    )
}


const style = StyleSheet.create({
    container: {
        backgroundColor: "#151515",
        width: "100%",
        height: "30%",
        position: "fixed",
        bottom: 0,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        padding: 25,
        justifyContent: "center"
    },
    button:{
        backgroundColor: "#59C912",
        borderRadius: 30,
        padding: "1em",
        marginHorizontal: 50,
        marginTop: 20
    },
    buttonText: {
        color: "#151515",
        textAlign: "center",
        fontWeight: "800",
    }
})