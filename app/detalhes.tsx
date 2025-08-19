import { useLocalSearchParams } from "expo-router";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { questoes } from "../assets/mockups/questoes";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#8eafc5a2",
  },
  pergunta: {
    fontWeight: "bold",
    fontSize: 22,
    color: "rgba(51, 116, 136, 1)",
    marginBottom: 16,
  },
  resposta: {
    fontSize: 18,
    backgroundColor: "rgba(51, 116, 136, 1)",
    marginVertical: 6,
    padding: 12,
    borderRadius: 6,
  },
  correta: {
    backgroundColor: "#b6fcb6",
  }
});

export default function Detalhes() {
  const params = useLocalSearchParams();
  const id = typeof params.id === "string" ? parseInt(params.id, 10) : NaN;
  const questao = questoes.find(q => q.id === id);

  if (!questao) {
    return (
      <View style={styles.container}>
        <Text style={styles.pergunta}>Questão não encontrada.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.pergunta}>{questao.pergunta}</Text>
      <FlatList
        data={questao.respostas}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <Text
            style={[
              styles.resposta,
              index + 1 === questao.certa && styles.correta
            ]}
          >
            {item}
          </Text>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}