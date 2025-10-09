import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, Platform } from "react-native";
import { createMedicamento } from "../services/medicamentosApi"; // Função para criar medicamento na API

export default function MedicamentoFormScreen({ navigation }) {
  // Estados para armazenar os dados do formulário
  const [nome, setNome] = useState("");
  const [dosagem, setDosagem] = useState("");
  const [horarios, setHorarios] = useState("");
  const [observacoes, setObservacoes] = useState("");

  // Função para salvar o medicamento
  const handleSave = async () => {
    if (!nome || !dosagem || !horarios) {
      if ((Platform.OS = "web")) {
        alert("Atenção, Preencha pelo menos nome, dosagem e horários.");
      } else {
        Alert.alert("Atenção", "Preencha pelo menos nome, dosagem e horários.");
      }
      return;
    }

    try {
      // Criação do medicamento via API
      await createMedicamento({
        nome,
        dosagem,
        horarios,
        observacoes,
      });

      // Alerta simples confirmando a adição do medicamento
      if ((Platform.OS = "web")) {
        alert("Sucesso, Medicamento adicionado com sucesso!");
      } else {
        Alert.alert("Sucesso", "Medicamento adicionado com sucesso!");
      }
      // Navegar para a lista de medicamentos
      navigation.navigate("MedicamentosList");
    } catch (e) {
      if ((Platform.OS = "web")) {
        alert("Erro, Não foi possível criar o medicamento.");
      } else {
        Alert.alert("Erro", "Não foi possível criar o medicamento.");
      }
    }
  };

  return (
    <View style={{ flex: 1, padding: 16, gap: 12 }}>
      <Text style={{ fontSize: 20, fontWeight: "600" }}>Novo Medicamento</Text>

      {/* Campo para o nome do medicamento */}
      <TextInput
        placeholder="Nome do Medicamento"
        value={nome}
        onChangeText={setNome}
        style={{ borderWidth: 1, borderRadius: 8, padding: 12 }}
      />

      {/* Campo para a dosagem */}
      <TextInput
        placeholder="Dosagem (ex: 500 mg)"
        value={dosagem}
        onChangeText={setDosagem}
        style={{ borderWidth: 1, borderRadius: 8, padding: 12 }}
      />

      {/* Campo para os horários de uso */}
      <TextInput
        placeholder="Horários de Uso (ex: 08:00 / 14:00 / 20:00)"
        value={horarios}
        onChangeText={setHorarios}
        style={{ borderWidth: 1, borderRadius: 8, padding: 12 }}
      />

      {/* Campo para as observações */}
      <TextInput
        placeholder="Observações"
        value={observacoes}
        onChangeText={setObservacoes}
        style={{ borderWidth: 1, borderRadius: 8, padding: 12 }}
      />

      {/* Botão para salvar */}
      <Button title="Salvar" onPress={handleSave} />
    </View>
  );
}
