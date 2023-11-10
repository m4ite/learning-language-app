import { useEffect, useState } from "react";
import { View, Image, StyleSheet } from "react-native";

export function Load(props) {
    const [finishedTimeout, setFinishedTimeout] = useState(false);

    useEffect(() => {
        const id = setTimeout(() => {
            setFinishedTimeout(true);
        }, 3000);

        return () => clearTimeout(id);
    }, []);

    return (
        <>
            <View style={style.bg}>
                <View style={style.glass}>
                <Image source={require("../assets/logo.png")} style={{ width: 400, height: 400 }} />
                {finishedTimeout && props.navigation.navigate("Start")}
                </View>
            </View>
        </>
    )
}


const style = StyleSheet.create({
    bg: {
        backgroundColor: "#EF5454",
        width: "100%",
        height: "100%",
        textAlign: "center",
        justifyContent: "center"
    },

    glass: {
        backgroundColor: "rgba(255, 255, 255, 0.21)",
        borderRadius: "16px"
    }
})