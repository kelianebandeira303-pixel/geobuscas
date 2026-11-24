# BuscaGeo

## Sobre o projeto

O BuscaGeo é um sistema desenvolvido para facilitar a localização, organização e gerenciamento de arquivos relacionados a projetos rurais e georreferenciamento.

A aplicação permite adicionar pastas e HDs, catalogar documentos e realizar pesquisas por nomes, caminhos, extensões e conteúdo dos arquivos, tornando mais simples a localização de informações.

O projeto é desenvolvido como trabalho acadêmico das disciplinas de **Banco de Dados** e **Programação Web II**.

## Problema que o sistema busca resolver

A grande quantidade de documentos armazenados em diferentes pastas, computadores e dispositivos pode dificultar a localização de arquivos importantes.

O BuscaGeo busca solucionar esse problema oferecendo uma ferramenta que centraliza a catalogação e facilita a pesquisa de documentos, contribuindo para uma melhor organização das informações.

## Protótipos

Os protótipos das telas foram desenvolvidos no Canva.

### Tela inicial

![Tela inicial do BuscaGeo](img/tela%20inicial.png)

### Tela principal

![Tela principal do BuscaGeo](img/tela%20principal.png)

## Funcionalidades previstas

- Adicionar pastas e HDs ao escopo de catalogação.
- Atualizar o catálogo de documentos.
- Pesquisar arquivos por nome, caminho e extensão.
- Pesquisar documentos pelo conteúdo.
- Gerenciar referências e apelidos.
- Visualizar informações e localização dos arquivos.

## Tecnologias

- **JavaScript** Linguagem principal da aplicação..
- **Electron** e **Node.js** para a aplicação.
- **HTML5** e **CSS3** para a interface.
- **SQLite** Banco de dados para armazenamento das informações..
- **Git e GitHub** para controle de versão e compartilhamento do código.

## Arquitetura planejada — MVC

A aplicação está sendo organizada segundo o padrão **MVC (Model, View e Controller)**:

- **Models (`models/`)**: acesso aos dados e operações relacionadas aos arquivos, pastas e referências.
- **Views (`views/`)**: interface apresentada ao usuário.
- **Controllers (`controllers/`)**: recebem as ações da interface e coordenam as respostas dos Models e Views.
- **Services (`services/`)**: serviços auxiliares e regras compartilhadas da aplicação.

O Electron mantém seus arquivos de processo fora dessas camadas: `main.js` será responsável pelo processo principal, e `preload.js` fará a comunicação controlada entre o processo principal e a interface.

## Estrutura atual do projeto

```text
geobuscas/
├── assets/
├── controllers/
├── img/
│   ├── tela inicial.png
│   └── tela principal.png
├── models/
├── services/
├── views/
│   ├── index.html
│   ├── renderer.js
│   └── styles.css
├── main.js
├── preload.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## Equipe

- **Thaísa Venâncio** — Desenvolvimento do backend e do banco de dados.
- **Keliane Bandeira** — Desenvolvimento do backend e do banco de dados.
- **Maria de Jesus Lima** — Desenvolvimento do backend e do banco de dados.
- **Júlia Emile** — Desenvolvimento do front-end.

## Instalação e execução

### Pré-requisitos

- Node.js instalado.
- Git instalado.

### 1. Clonar o repositório

```bash
git clone https://github.com/kelianebandeira303-pixel/geobuscas.git
```

### 2. Entrar na pasta do projeto

```bash
cd geobuscas
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Executar o sistema

```bash
npm start
```

