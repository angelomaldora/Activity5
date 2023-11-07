import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Users } from "./src/Users";
import { FlatList } from "react-native";
import Toast from 'react-native-toast-message';



export default function App() {
  const displayToast = (user) => {
    Toast.show({
      type: 'success',
      text1: `Hello ${user.name.firstname} ${user.name.lastname} from ${user.course} 3A`,
      text2: 'Welcome To Mobile Development',
      position: 'bottom',
    });
  };


  return (
    <View style={styles.container}>
      <Text style={styles.headtext}>LIST OF USERS</Text>
      <View style={styles.table}>
        <View style={styles.tables}>
          <Text style={styles.tabletexts}>ID</Text>
        </View>
        <View style={styles.tables}>
          <Text style={styles.tabletexts}>NAME</Text>
        </View>
        <View style={styles.tables}>
          <Text style={styles.tabletexts}>COURSE</Text>
        </View>
      </View>
      <FlatList
        data={Users}
        renderItem={({ item: user }) => (
          <TouchableOpacity
            style={styles.tablerow}
            onPress={() => displayToast(user)}
          >
            <Text style={styles.tabletext}>{user.id}</Text>
            <Text style={styles.tabletext}>{user.name.firstname}</Text>
            <Text style={styles.tabletext}>{user.course}</Text>
            </TouchableOpacity>
           
        )}
        keyExtractor={(user) => user.id}
      />
      
    <Toast ref={(ref) => Toast.setRef(ref)} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 30,
    paddingHorizontal: 5
  },
  table: {
    flexDirection: "row",
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    borderColor: 'black',
    borderWidth: 0.9,
    backgroundColor: '#009879'
  },
  tablerow: {
    flexDirection: "row",
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    borderColor: '#009879',
    borderBottomWidth: 0.9,
    borderLeftWidth: 0.9,
    borderRightWidth: 0.9
  },
  tabletext: {
    fontSize: 25
  },
  tabletexts: {
    fontSize: 30,
    color: 'white'
  },
  headtext: {
    fontSize: 30,
    margin: 10,
    alignSelf: 'center'
  }
});
