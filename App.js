import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView,
  StatusBar,
} from 'react-native';
import Icon from './node_modules/react-native-vector-icons/AntDesign';
import MyTasks from './MyTasks';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View style={styles.container}>
        <View style={{
          flexDirection: "row",
          paddingTop: 35,
          alignItems: "center",
          justifyContent: "center",
        }}>
          <View style={{ backgroundColor:"#fff"}}>
            <Icon name="appstore-o" size={30} color="#64B5F6" />
          </View>
          <View style={{ flex: 1,alignItems:"center",backgroundColor:"#fff" }}>
            <Text style={{ fontSize: 25, color: "grey" }}>All Tasks</Text>
          </View>
        </View>
        <ScrollView style={{ backgroundColor: "#fff", paddingVertical: 10, marginVertical: 10 }}>
          <MyTasks task="Create new project" />
          <MyTasks task="Working call" />
          <MyTasks task="Meet with doctor" />
          <MyTasks task="Go to shop" />
          <MyTasks task="Take the kids to school" />
          <MyTasks task="Finish dribble marathon" />
          <MyTasks task="Walk with dog" />
          <MyTasks task="Play NFSMW" />
          <MyTasks task="Complete assignments" />
          <MyTasks task="Apply to internships" />
          <MyTasks task="Do competitive programming" />
        </ScrollView>
        <View style={{ alignItems: "center" }}>
          <TouchableHighlight style={{
            position: "absolute",
            bottom: 20,
            height: 80,
            width: 80,
            backgroundColor: "#64B5F6",
            borderRadius: 40,
            justifyContent: "center",
            alignItems: "center",
            elevation: 10,
          }}>
            <Text style={{ color: "#fff", fontSize: 40 }}>+</Text>
          </TouchableHighlight>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal:10
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
});