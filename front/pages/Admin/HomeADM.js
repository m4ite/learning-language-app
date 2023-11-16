import { TouchableOpacity, Text, View, StyleSheet, Image } from "react-native";

export function HomeADM(props) {


    return (
        <>
            <Image source={require("../../assets/initial.png")} style={style.img} />
            <Text style={style.title}>Admin Actions</Text>

            <TouchableOpacity style={style.button} onPress={() => props.navigation.navigate("ViewNiveis")}>
                <Text style={style.buttonText}>Níveis</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.button} onPress={() => props.navigation.navigate("ViewHistoria")}>
                <Text style={style.buttonText}>Histórias</Text>
            </TouchableOpacity>
        </>
    )
}


const style = StyleSheet.create({
    img: {
        width: "200px",
        height: "200px",
        alignSelf: 'center',
        margin: 40
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
    }
})