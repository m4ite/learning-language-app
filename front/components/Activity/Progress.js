import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, View } from 'react-native';
import { ProgressBar, MD3Colors, Icon } from 'react-native-paper';

export function Progress() {
    const navigation = useNavigation()
    return (
        <View>
            <TouchableOpacity style={{ marginBottom: 20 }} onPress={() => navigation.navigate("Home")}>
                <Icon
                    source="close"
                    color={MD3Colors.neutral60}
                    size={30}
                />
            </TouchableOpacity>
            <ProgressBar progress={0.5} theme={{colors: {primary: '#7DC621' }}} style={{marginHorizontal: 20}}/>
        </View>
    )
}
