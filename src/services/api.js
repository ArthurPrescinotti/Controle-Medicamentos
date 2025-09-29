import axios from "axios";

// 👉 Troque para a sua URL do MockAPI:
export const MOCKAPI_BASE =
  "https://68d9e19090a75154f0db542f.mockapi.io/api/v1/";

// Medicamento Axios para MockAPI (medicamentos)
export const medicamentoHttp = axios.create({
  baseURL: MOCKAPI_BASE,
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

// Cliente Axios para ReqRes (login) - apenas se você tiver outra integração
export const authHttp = axios.create({
  baseURL: "https://reqres.in/api",
  timeout: 10000,
  headers: {
    "x-api-key": "reqres-free-v1",
    "Content-Type": "application/json",
  },
});
