import { Stack } from "expo-router";
import { StyleSheet, View, Text } from "react-native";

const styles = StyleSheet.create({
  faixa: {
    backgroundColor: "rgba(167, 194, 252, 1)",
  },
  texto: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 22,
    textAlign: "center",
    padding: 12,
  },
  rodape: {
    height: 50,
    backgroundColor: "rgba(167, 194, 252, 1)",
    justifyContent: "center",
    alignItems: "center",
  },
  textoRodape: {
    color: "rgba(51, 116, 136, 1)",
    fontWeight: "bold",
  },
  header: {
    backgroundColor: "rgba(167, 194, 252, 1)",
    paddingTop: 40,
    paddingBottom: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    color: "rgba(51, 116, 136, 1)",
    fontWeight: "bold",
    fontSize: 24,
  },
});

export default function Layout() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Quiz Matemática</Text>
      </View>
      <Stack
        screenOptions={{
          headerStyle: styles.faixa,
          headerTitleStyle: styles.texto,
        }}
      >
        <Stack.Screen name="index" options={{ title: "Lista de Posts", headerShown: false }} />
        <Stack.Screen name="detalhes" options={{ title: "Detalhes do Post", headerShown: false }} />
        <Stack.Screen name="outra" options={{ title: "Outra Página", headerShown: false }} />
        <Stack.Screen name="mais uma" options={{ title: "Mais uma", headerShown: false }} />
      </Stack>
      <View style={styles.rodape}>
        <Text style={styles.textoRodape}>Quiz Matemática © 2025</Text>
      </View>
    </View>
  );
}