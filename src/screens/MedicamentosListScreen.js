import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  RefreshControl,
  Alert,
  Platform,
} from "react-native";
import {
  listMedicamento,
  deleteMedicamento,
} from "../services/medicamentosApi"; // Funções para API de Medicamentos
import MedicamentoItem from "../components/MedicamentoItem"; // Componente para exibir cada medicamento

export default function MedicamentosListScreen() {
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  // Função para carregar a lista de medicamentos
  async function load() {
    setRefreshing(true);
    try {
      const list = await listMedicamento();
      setData(list);
    } catch (e) {
      Alert.alert("Erro", "Não foi possível carregar os medicamentos.");
    } finally {
      setRefreshing(false);
    }
  }

  // Carregar os medicamentos ao montar a tela
  useEffect(() => {
    load();
  }, []);

  // Função para excluir medicamento
  const handleDelete = async (id) => {
    if (Platform.OS === "web") {
      // Para a web
      const confirmation = window.confirm(
        "Tem certeza de que deseja excluir este medicamento?"
      );
      if (confirmation) {
        await deleteMedicamento(id);
        setData((prev) => prev.filter((m) => m.id !== id));
      }
    } else {
      // Para dispositivos móveis (iOS/Android)
      Alert.alert(
        "Confirmar exclusão",
        "Tem certeza de que deseja excluir este medicamento?",
        [
          { text: "Cancelar", style: "cancel" },
          {
            text: "Excluir",
            onPress: async () => {
              await deleteMedicamento(id);
              setData((prev) => prev.filter((m) => m.id !== id));
            },
          },
        ]
      );
    }
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: "600", marginBottom: 12 }}>
        Medicamentos
      </Text>
      <FlatList
        data={data}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <MedicamentoItem medicamento={item} onDelete={handleDelete} />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={load} />
        }
        ListEmptyComponent={<Text>Nenhum medicamento cadastrado.</Text>}
      />
    </View>
  );
}
