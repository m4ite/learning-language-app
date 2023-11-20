import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export function Option(props)
{
    return(
        <TouchableOpacity style={[style.op, style.shadowProp]}>
            <Text style={style.txt}>{props.text}</Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    op:
    {
        backgroundColor: "#F9F9F9",
        borderRadius: 20,
        padding: "1em",
        width: 128,
        alignItems: "center",
        marginVertical: 15,
        verticalAlign: "middle",
        borderColor: "#E5E5E5",
        borderWidth: 1,
        marginHorizontal: 20
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
      txt:{
        marginVertical: 15,
        fontSize: 20,
        fontWeight: 500
      }
})