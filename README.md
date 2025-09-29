
# 🏥 **RN Medicamentos — Aplicativo React Native com Cadastro, Exibição e Exclusão de Medicamentos**

Aplicativo **React Native** para gerenciamento de medicamentos. Permite ao usuário:
- **Cadastrar medicamentos**
- **Exibir lista de medicamentos**
- **Excluir medicamentos**

---

## ✨ **Funcionalidades**:

1. **Cadastro de Medicamento**:
   - Tela para adicionar novos medicamentos, incluindo campos para nome, dosagem, horário de uso e observações.
   
2. **Exibição de Medicamentos**:
   - Lista todos os medicamentos cadastrados, com a possibilidade de visualizar detalhes como nome, dosagem, horário de uso e observações.
   
3. **Exclusão de Medicamento**:
   - O usuário pode excluir medicamentos da lista com um clique, sendo solicitado uma confirmação antes de realizar a exclusão.

---

## 🧭 **Fluxo do App**:

1. **MedicamentosListScreen** → lista todos os medicamentos.
2. **MedicamentoFormScreen** → formulário para cadastrar novos medicamentos.
3. **Excluir Medicamento** → opção para excluir medicamentos da lista.
4. **Refrescar a Lista**: A lista de medicamentos pode ser atualizada através de um gesto de "pull to refresh".

---

## 🚀 **Como Rodar o Projeto**:

### 1. **Instalar dependências**:

Dentro da pasta do projeto, instale as dependências principais:

```
npm install
```
### 2. Instalar bibliotecas adicionais:

Instale as bibliotecas necessárias para navegação e comunicação com a API:
Instalar React Navigation:
```
npm install @react-navigation/native @react-navigation/native-stack
```
Instalar dependências de navegação para React Native:
```
npx expo install react-native-screens react-native-safe-area-context
```
Instalar Axios para chamadas HTTP:
```
npm install axios
```
Instalar AsyncStorage para persistência de dados:
```
npm install @react-native-async-storage/async-storage
```
### 3. Rodar o Projeto:

Com as dependências instaladas, você pode rodar o projeto usando o Expo:

npm start

Ou, se estiver usando o React Native diretamente, pode rodar no Android ou iOS:
```
npx react-native run-android    # Para Android
npx react-native run-ios        # Para iOS
```
Agora, você pode abrir o aplicativo no Expo Go (caso esteja utilizando Expo) ou no emulador de dispositivo para testar o aplicativo.
📝 API Utilizada:

    GET /medicamentos → Lista de medicamentos cadastrados.

    POST /medicamentos → Cria um novo medicamento.

    DELETE /medicamentos/:id → Exclui um medicamento pelo ID.

🔧 Dependências:

    @react-navigation/native — Navegação do React Native.

    @react-navigation/native-stack — Navegação com pilha de telas.

    axios — Para fazer chamadas HTTP.

    @react-native-async-storage/async-storage — Para persistência de dados localmente.

    react-native-screens e react-native-safe-area-context — Necessárias para o funcionamento do React Navigation no React Native.
