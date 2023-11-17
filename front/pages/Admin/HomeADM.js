import { TouchableOpacity, Text, StyleSheet, Image, View } from "react-native";
import { Icon } from "react-native-paper";

export function HomeADM(props) {

    return (
        <View style={style.bg}>
            <TouchableOpacity style={style.logout} onPress={() => props.navigation.navigate("Start")}>
                <Icon source="logout" size={20}/>
                </TouchableOpacity>
            <Image source={require("../../assets/initial.png")} style={style.img} />
            <Text style={style.title}>Ações do Administrador</Text>

            <TouchableOpacity style={style.button} onPress={() => props.navigation.navigate("ViewNiveis")}>
                <Text style={style.buttonText}>Níveis</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.button} onPress={() => props.navigation.navigate("ViewHistoria")}>
                <Text style={style.buttonText}>Histórias</Text>
            </TouchableOpacity>
        </View>
    )
}


const style = StyleSheet.create({
    img: {
        width: "250px",
        height: "250px",
        alignSelf: 'center'
    },
    bg:{
        height: "100%",
        backgroundColor: "white"
    },
    button:{
        backgroundColor: "#EF5454",
        padding: "1em",
        paddingVertical: "2em",
        borderRadius: 30,
        marginHorizontal: 50,
        marginTop: 20,
        display: "flex",
    },
    buttonText:{
        color: "white",
        textAlign: "center",
        fontWeight: "600",
        fontSize: "18px",
       
    },
    title:{
        textAlign: "center",
        fontSize: "20px",
        fontWeight: "800",
        marginVertical: 50
    },
    logout:{
        margin: 15
    }
})