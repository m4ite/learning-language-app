import { View, StyleSheet, ScrollView, Text, Image } from 'react-native'
import { ProgressBar, MD3Colors, Icon } from 'react-native-paper';

export function Lessons(props) {
    return (
        <>
            <Image source={require("../assets/hello.png")} style={{ width: 120, height: 105, alignSelf: "center"}} />
            <Text style={style.title}>
                Unidades de Inglês
                <Image source={require("../assets/eua.png")} style={{ width: 50, height: 50 }} />
            </Text>
            <ScrollView>
                <Text style={style.h2}><Text style={style.span}>Série 1</Text></Text>
                <View style={style.lesson}>
                    <View style={{ padding: "1em" }}>
                        <View style={style.circle}>
                            <Image source={require("../assets/arrow.png")} style={{ width: 65, height: 65 }} />
                        </View>
                    </View>
                    <View style={{ padding: "1em" }}>
                        <Text style={style.name}>Basics 1</Text>
                        <Text></Text>
                        <ProgressBar progress={0.5} color={MD3Colors.onBackground} />
                    </View>

                </View>

                <View style={style.lesson}>
                    <View style={{ padding: "1em" }}>
                        <View style={style.circle}>
                            <Image source={require("../assets/hamburguer.png")} style={{ width: 65, height: 65 }} />
                        </View>
                    </View>
                    <View style={{ padding: "1em" }}>
                        <Text style={style.name}>Basics 2</Text>
                        <Text></Text>
                        <ProgressBar progress={0.5} color={MD3Colors.onBackground} />
                    </View>
                </View>


                <Text style={style.h2}><Text style={style.span}>Série 2</Text></Text>
                <View style={style.lesson}>
                    <View style={{ padding: "1em" }}>
                        <View style={style.circle}>
                            <Image source={require("../assets/arrow.png")} style={{ width: 65, height: 65 }} />
                        </View>
                    </View>
                    <View style={{ padding: "1em" }}>
                        <Text style={style.name}>Advanced 1</Text>
                        <Text></Text>
                        <ProgressBar progress={0.5} color={MD3Colors.onBackground} />
                    </View>

                </View>

                <View style={style.lesson}>
                    <View style={{ padding: "1em" }}>
                        <View style={style.circle}>
                            <Image source={require("../assets/hamburguer.png")} style={{ width: 65, height: 65 }} />
                        </View>
                    </View>
                    <View style={{ padding: "1em" }}>
                        <Text style={style.name}>Advanced 2</Text>
                        <Text></Text>
                        <ProgressBar progress={0.5} color={MD3Colors.onBackground} />
                    </View>
                </View>
            </ScrollView>
        </>
    )
}


const style = StyleSheet.create({
    h2: {
        width: "100%",
        textAlign: "center",
        borderBottomColor: "#bebebe",
        borderBottomWidth: "1px",
        lineHeight: "0.1em",
        margin: "10px",
        marginVertical: "20px",
        fontSize: "18px",
    },
    span: {
        paddingHorizontal: "10px",
        backgroundColor: "white",
        fontWeight: "900"
    },
    circle: {
        backgroundColor: "#CB6BE6",
        padding: "1em",
        borderRadius: "50%"
    },
    title: {
        display: "flex",
        flexDirection:"row",
        fontSize: "25px",
        fontWeight: "600",
        textAlign: "center",
        padding: "1em",
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    name: {
        fontSize: "18px"
    },
    lesson: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "70%",
        alignSelf: "center",
        alignItems: "center"
    }

})