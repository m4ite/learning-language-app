import { useEffect, useState } from "react";
import { View, Image, Text } from "react-native";

export function StartPage(props) {
    const [finishedTimeout, setFinishedTimeout] = useState(false);

    useEffect(() => {
        const id = setTimeout(() => {
          setFinishedTimeout(true);
        }, 3000);
    
        return () => clearTimeout(id);
      }, []);

    return (
        <>
            <View>
                <Image source={require("../assets/logo.png")} style={{ width: 400, height: 400 }}/>
                {finishedTimeout &&  props.navigation.navigate("Register")}
            </View>
        </>
    )
}