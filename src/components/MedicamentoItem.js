import React from "react";
import { View, Text, Button } from "react-native";

export default function MedicamentoItem({ medicamento, onDelete }) {
  return (
    <View
      style={{
        borderWidth: 1,
        borderRadius: 8,
        padding: 12,
        marginBottom: 8,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#fff",
        borderColor: "#ddd",
      }}
    >
      <View style={{ flex: 1, paddingRight: 8 }}>
        {/* Exibe o nome do medicamento */}
        <Text style={{ fontWeight: "600", fontSize: 16 }}>
          {medicamento.nome}
        </Text>

        {/* Exibe a dosagem */}
        <Text style={{ color: "gray", marginTop: 4 }}>
          <Text style={{ fontWeight: "600" }}>Dosagem: </Text>
          {medicamento.dosagem}
        </Text>

        {/* Exibe os horários de uso */}
        <Text style={{ color: "gray", marginTop: 4 }}>
          <Text style={{ fontWeight: "600" }}>Horários de uso: </Text>
          {medicamento.horarios
            ? medicamento.horarios
            : "Sem horários definidos"}
        </Text>

        {/* Exibe as observações, se houver */}
        {medicamento.observacoes && (
          <Text style={{ color: "gray", marginTop: 4 }}>
            <Text style={{ fontWeight: "600" }}>Observações: </Text>
            {medicamento.observacoes}
          </Text>
        )}
      </View>

      {/* Botão de exclusão */}
      <Button
        title="Excluir"
        color="tomato"
        onPress={() => onDelete(medicamento.id)} // Exclusão do medicamento
      />
    </View>
  );
}
