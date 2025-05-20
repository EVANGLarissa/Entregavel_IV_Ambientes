## Como executar os testes
1. **Clone o repositório** ou baixe os arquivos para o seu projeto local.

2. **Instale as dependências**:
   Certifique-se de ter o Node.js e o npm (Node Package Manager) instalados. 
   Para verificar a instalação de Node ou NPM, execute:
      ```bash
   node -v
   npm -v

   No diretório do projeto, execute o seguinte comando para instalar o Jest:
   ```bash
   npm init -y
   npm install --save-dev jest

4. **Package.json**:
    No arquivo package.json criado pelo Node, altere ou insira a seguinte linha de codigo:
      ```bash
    "scripts": {
    "test": "jest"
    }  

5. **Execução**:
    Rode o processo com o comando:
      ```bash
    npm test
