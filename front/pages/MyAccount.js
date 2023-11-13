import { View, StyleSheet, Text, Image } from "react-native";
import { Divider, Icon, MD3Colors } from "react-native-paper";

export function MyAccount(props) {
    return (
        <>
            <View>
                <Text style={style.pageTitle}>Profile</Text>
                <Divider />

                <Image source={require("../assets/userDefault.png")} style={style.img} />
                <Text style={style.name}>UserName</Text>

                <View style={{ padding: 20 }}>
                    <View style={style.award}>
                        <Image />
                        <Text style={style.txt}>
                        <Image source={require("../assets/nivel.png")} style={style.icon} />
                            15 xp
                        </Text>
                    </View>

                    <View style={style.award}>
                        <Image />
                        <Text style={style.txt}>
                        <Image source={require("../assets/level.png")} style={style.icon} />
                            level 1
                        </Text>
                    </View>



                </View>

            </View>
        </>
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
        fontSize: "15px"
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
    icon:{
        width: "50px",
        height: "50px",
        alignSelf: "center"
    }

})