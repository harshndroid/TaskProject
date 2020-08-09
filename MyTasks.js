import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Card, Divider } from 'react-native-paper';
import Icon from './node_modules/react-native-vector-icons/Feather';

export function MyTasks(props) {
    const [clicked, setClicked] = useState(false);
    return (
        <Card style={{
            elevation: 15,
            borderRadius: 50,
            marginVertical: 10,
            marginHorizontal:10,
        }}>
            <View style={{
                flexDirection: "row",
                height: 54,
                padding: 20,
                borderRadius: 50,
                alignItems: "center",
                justifyContent: "space-between"
            }}>
                {clicked ?
                    <View>
                        <Divider style={{
                            width: "100%",
                            borderWidth: 0.75,
                            borderColor: "#ccc",
                            position: "absolute",
                            left: 0,
                            top: 12,
                        }} />
                        <Text style={{ color: "#ccc", fontSize: 18 }}>{props.task}</Text>
                    </View>
                    :
                    <Text style={{ color: "#000", fontSize: 18 }}>{props.task}</Text>
                }
                {clicked ?
                    <Card style={{
                        elevation: 4,
                        height: 25,
                        width: 25,
                        borderRadius: 15,
                        backgroundColor: "#26A69A",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                        onPress={() => setClicked(false)}>
                        <Icon name="check" size={24} color="#fff" />
                    </Card>
                    :
                    <Card style={{
                        elevation: 5,
                        height: 25,
                        width: 25,
                        borderRadius: 25,
                    }}
                        onPress={() => setClicked(true)}
                    />}
            </View>
        </Card>
    )
}
export default MyTasks;
