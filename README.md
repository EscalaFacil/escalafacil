# EscalaFácil

Este documento fornece uma visão geral do projeto e descreve a estrutura de diretórios e arquivos do projeto.

## Estrutura de diretórios e arquivos:

- `src/`: Diretório principal do código-fonte da aplicação.
  - `App.css`: Arquivo CSS que contém estilos da aplicação.
- `assets/`: Diretório para armazenar recursos estáticos, como imagens.
- `components/`: Diretório para armazenar componentes reutilizáveis.
- `firebase/`: Diretório para armazenar arquivos relacionados ao Firebase.
  - `database.ts`: Arquivo que contém configurações e utilitários para interagir com o banco de dados do Firebase.
  - `index.ts`: Arquivo de inicialização do Firebase que configura a conexão com o projeto.
  - `login.ts`: Arquivo que contém funções e utilitários relacionados à autenticação do usuário.
- `main.tsx`: Arquivo principal da aplicação que renderiza o componente raiz no DOM.
- `pages/`: Diretório para armazenar as páginas da aplicação.
- `[org-slug]/`: Diretório para páginas específicas de uma organização.
- `dashboard/`: Diretório para a página de painel de controle da organização.
- `login/`: Diretório para a página de login.
- `redux/`: Diretório para armazenar arquivos relacionados ao gerenciamento de estado com Redux.
  - `hooks.ts`: Arquivo que contém hooks personalizados para acessar o estado global do Redux.
  - `store.ts`: Arquivo que cria a store do Redux e configura os middlewares.
  - `tempReducer.ts`: Arquivo com um reducer temporário usado como exemplo.
- `router/`: Diretório para armazenar arquivos relacionados ao roteamento da aplicação.
  - `index.tsx`: Arquivo que contém a configuração do roteamento da aplicação.
- `util/`: Diretório para armazenar utilitários e funções auxiliares.

- `tsconfig.json`: Arquivo de configuração do TypeScript para o projeto.
- `vite.config.ts`: Arquivo de configuração do Vite, responsável pelas configurações do ambiente de desenvolvimento.
