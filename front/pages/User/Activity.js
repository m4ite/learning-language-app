import { View } from "react-native";
import { ListeningActivity } from "../../components/Activity/ListeningActivity";
import { Progress } from "../../components/Activity/Progress";
import { WriteActivity } from "../../components/Activity/WriteActivity";

export function Activity(props){
    return(
        <View style={{backgroundColor: "white", height: "100%"}}>
            <Progress/>
            {/* <ListeningActivity/> */}
            <WriteActivity/>
        </View>
    )
}