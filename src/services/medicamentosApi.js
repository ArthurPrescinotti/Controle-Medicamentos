import { medicamentoHttp } from "./api";

// Listar todos os medicamentos
export async function listMedicamento() {
  const { data } = await medicamentoHttp.get("/medicamento");
  return data;
}

// Criar um novo medicamento
export async function createMedicamento(medicamento) {
  const { data } = await medicamentoHttp.post("/medicamento", medicamento);
  alert("Registro Inserido: " + JSON.stringify(data));
  return data;
}

// Deletar medicamento pelo ID
export async function deleteMedicamento(id) {
  await medicamentoHttp.delete(`/medicamento/${id}`);
}
