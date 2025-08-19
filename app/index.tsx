import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Button } from "react-native";
import { questoes } from "../assets/mockups/questoes";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(186, 206, 245, 1)",
    padding: 16,
  },
  pergunta: {
    fontWeight: "bold",
    fontSize: 22,
    color: "rgba(4, 71, 92, 1)",
    marginBottom: 24,
    textAlign: "center"
  },
  resposta: {
    fontSize: 18,
    backgroundColor: "rgba(66, 147, 172, 1)",
    marginVertical: 8,
    padding: 16,
    borderRadius: 8,
    width: "100%",
    textAlign: "center"
  },
  selecionada: {
    borderWidth: 2,
    borderColor: "rgba(74, 88, 97, 1)"
  },
  correta: {
    backgroundColor: "#b6fcb6",
  },
  errada: {
    backgroundColor: "#cc7e7eff",
  },
  resultado: {
    fontSize: 24,
    fontWeight: "bold",
    color: "rgba(0, 93, 105, 1)",
    marginBottom: 24,
    textAlign: "center"
  }
});

export default function Quiz() {
  const [indice, setIndice] = useState(0);
  const [acertos, setAcertos] = useState(0);
  const [selecionada, setSelecionada] = useState<number | null>(null);
  const [finalizado, setFinalizado] = useState(false);

  const questao = questoes[indice];

  function responder(index: number) {
    setSelecionada(index);
    if (index + 1 === questao.certa) {
      setAcertos(acertos + 1);
    }
  }

  function proxima() {
    if (indice + 1 < questoes.length) {
      setIndice(indice + 1);
      setSelecionada(null);
    } else {
      setFinalizado(true);
    }
  }

  function reiniciar() {
    setIndice(0);
    setAcertos(0);
    setSelecionada(null);
    setFinalizado(false);
  }

  if (finalizado) {
    return (
      <View style={styles.container}>
        <Text style={styles.resultado}>
          Você acertou {acertos} de {questoes.length} questões!
        </Text>
        <Button title="Reiniciar Quiz" color="rgba(51, 116, 136, 1)" onPress={reiniciar} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.pergunta}>{questao.pergunta}</Text>
      {questao.respostas.map((resp, idx) => (
        <TouchableOpacity
          key={idx}
          style={[
            styles.resposta,
            selecionada === idx && styles.selecionada,
            selecionada !== null &&
              (idx + 1 === questao.certa
                ? styles.correta
                : selecionada === idx
                ? styles.errada
                : null)
          ]}
          disabled={selecionada !== null}
          onPress={() => responder(idx)}
        >
          <Text>{resp}</Text>
        </TouchableOpacity>
      ))}
      {selecionada !== null && (
        <Button title={indice + 1 === questoes.length ? "Finalizar" : "Próxima"} color="rgba(51, 116, 136, 1)" onPress={proxima} />
      )}
    </View>
  );
}