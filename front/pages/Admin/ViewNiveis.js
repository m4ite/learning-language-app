import { TouchableOpacity, ScrollView, Text, StyleSheet } from "react-native"
import { Icon, List } from "react-native-paper"

export function ViewNiveis(props) {
    return (
        <>
            <TouchableOpacity onPress={() => props.navigation.navigate('HomeADM')} style={{ padding: 10 }}>
                <Icon source="chevron-left" size={20} />
            </TouchableOpacity>

            <List.AccordionGroup style={style.Accordion}>
                <List.Accordion title="Accordion 1" id="1">
                    <List.Item title="Item 1" />
                </List.Accordion>
                <List.Accordion title="Accordion 2" id="2">
                    <List.Item title="Item 2" />
                </List.Accordion>
            </List.AccordionGroup>
        </>
    )
}