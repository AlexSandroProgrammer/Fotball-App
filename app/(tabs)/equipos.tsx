import { ScrollView, StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import TeamList from "@/components/TeamList";

export default function TabThreeScreen() {
  const teams = [
    {
      name: "Real Madrid",
      teamLogo: "../../assets/images/realmadrid.jpg",
      wins: 12,
      playersCount: 25,
      starPlayer: {
        name: "Toni Kroos",
        image: "../../assets/images/tonikroos.jpg",
        number: 10,
      },
    },
    {
      name: "Barcelona",
      teamLogo: "../../assets/images/barcelona.jpg",
      wins: 15,
      playersCount: 23,
      starPlayer: {
        name: "Lamine Yamal",
        image: "../../assets/images/lamineyamal.jpg",
        number: 7,
      },
    },
  ];
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.sub_container}>
          <Text style={styles.title}>Equipos Influyentes</Text>
          <Text style={styles.description}>
            Te presentamos los equipos mas influyentes de la ultima jornada del
            futbol mundial
          </Text>
        </View>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />

        <TeamList teams={teams} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  sub_container: {
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  description: {
    fontSize: 15,
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
    color: "#888",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
