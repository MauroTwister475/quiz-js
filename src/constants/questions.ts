type Option = {
  letter: string;
  resp: string;
  correct: boolean;
};

type Question = {
  question: string;
  options: Option[];
};

export type QuestionsType = {
  [key: string]: Question[];
};
export const QUESTIONS: QuestionsType = {
  React: [
    {
      question: "O que é o React?",
      options: [
        { letter: "A", resp: "É um framework do JavaScript", correct: false },
        {
          letter: "B",
          resp: "É uma estrutura de códigos JS para criar aplicações web",
          correct: false,
        },
        {
          letter: "C",
          resp: "Uma biblioteca JavaScript para construção de interfaces",
          correct: true,
        },
        {
          letter: "D",
          resp: "É uma linguagem de programação interpretada",
          correct: false,
        },
      ],
    },
    {
      question: "Qual dessas empresas criou o React?",
      options: [
        { letter: "A", resp: "Google", correct: false },
        { letter: "B", resp: "Facebook", correct: true },
        { letter: "C", resp: "Microsoft", correct: false },
        { letter: "D", resp: "Amazon", correct: false },
      ],
    },
    {
      question: "O que é o JSX?",
      options: [
        { letter: "A", resp: "Uma biblioteca JavaScript", correct: false },
        {
          letter: "B",
          resp: "Uma extensão de sintaxe para JavaScript",
          correct: true,
        },
        { letter: "C", resp: "Uma ferramenta de teste", correct: false },
        {
          letter: "D",
          resp: "Uma biblioteca para estilização",
          correct: false,
        },
      ],
    },
    {
      question: "Para que serve o hook useEffect?",
      options: [
        { letter: "A", resp: "Para criar componentes", correct: false },
        { letter: "B", resp: "Para gerenciar estados globais", correct: false },
        {
          letter: "C",
          resp: "Para efeitos colaterais em componentes funcionais",
          correct: true,
        },
        { letter: "D", resp: "Para manipular o DOM", correct: false },
      ],
    },
    {
      question: "Qual é a função do render() no React?",
      options: [
        {
          letter: "A",
          resp: "Iniciar o ciclo de vida do componente",
          correct: false,
        },
        { letter: "B", resp: "Criar um novo componente", correct: false },
        { letter: "C", resp: "Gerenciar estados globais", correct: false },
        { letter: "D", resp: "Atualizar o DOM com as mudanças", correct: true },
      ],
    },
    {
      question: "O que é o Virtual DOM?",
      options: [
        {
          letter: "A",
          resp: "Uma representação do DOM na memória",
          correct: true,
        },
        { letter: "B", resp: "Uma cópia do DOM original", correct: false },
        { letter: "C", resp: "Uma ferramenta de debug", correct: false },
        { letter: "D", resp: "Um evento de ciclo de vida", correct: false },
      ],
    },
    {
      question: "Como você passa dados entre componentes no React?",
      options: [
        { letter: "A", resp: "Usando o Context API", correct: false },
        { letter: "B", resp: "Usando Props", correct: true },
        { letter: "C", resp: "Usando setState()", correct: false },
        { letter: "D", resp: "Usando hooks", correct: false },
      ],
    },
    {
      question: "O que é um componente funcional no React?",
      options: [
        {
          letter: "A",
          resp: "Um componente escrito como uma função",
          correct: true,
        },
        {
          letter: "B",
          resp: "Um componente que possui estado",
          correct: false,
        },
        { letter: "C", resp: "Um componente que usa hooks", correct: false },
        {
          letter: "D",
          resp: "Um componente que renderiza outros componentes",
          correct: false,
        },
      ],
    },
    {
      question: "O que é o Context API?",
      options: [
        { letter: "A", resp: "Uma biblioteca de componentes", correct: false },
        {
          letter: "B",
          resp: "Uma extensão de sintaxe para JavaScript",
          correct: false,
        },
        {
          letter: "C",
          resp: "Uma API para gerenciamento de estado global",
          correct: true,
        },
        { letter: "D", resp: "Um método de ciclo de vida", correct: false },
      ],
    },
    {
      question: "Qual hook permite acessar o estado do componente?",
      options: [
        { letter: "A", resp: "useEffect", correct: false },
        { letter: "B", resp: "useReducer", correct: false },
        { letter: "C", resp: "useState", correct: true },
        { letter: "D", resp: "useMemo", correct: false },
      ],
    },
    {
      question: "Qual a função do ReactDOM?",
      options: [
        { letter: "A", resp: "Gerenciar estados", correct: false },
        { letter: "B", resp: "Manipular o Virtual DOM", correct: false },
        { letter: "C", resp: "Renderizar componentes no DOM", correct: true },
        { letter: "D", resp: "Gerenciar ciclo de vida", correct: false },
      ],
    },
    {
      question: "O que é o hook useRef?",
      options: [
        {
          letter: "A",
          resp: "Um hook para gerenciar efeitos colaterais",
          correct: false,
        },
        { letter: "B", resp: "Um hook para gerenciar estados", correct: false },
        {
          letter: "C",
          resp: "Um hook para renderizar componentes",
          correct: false,
        },
        {
          letter: "B",
          resp: "Um hook para referenciar valores mutáveis",
          correct: true,
        },
      ],
    },
    {
      question: "O que é um Fragment no React?",
      options: [
        {
          letter: "A",
          resp: "Uma forma de retornar múltiplos elementos sem um contêiner extra",
          correct: true,
        },
        { letter: "B", resp: "Uma ferramenta de debug", correct: false },
        { letter: "C", resp: "Uma biblioteca de estilização", correct: false },
        { letter: "D", resp: "Um hook para gerenciar estados", correct: false },
      ],
    },
    {
      question:
        "Como você pode evitar re-renderizações desnecessárias no React?",
      options: [
        { letter: "A", resp: "Usando shouldComponentUpdate", correct: false },
        { letter: "B", resp: "Usando PureComponent ou memo", correct: true },
        { letter: "C", resp: "Usando setState", correct: false },
        { letter: "D", resp: "Usando Context API", correct: false },
      ],
    },
    {
      question: "Qual é o principal objetivo do hook useCallback?",
      options: [
        { letter: "A", resp: "Gerenciar estados", correct: false },
        { letter: "B", resp: "Criar componentes", correct: false },
        { letter: "C", resp: "Memorizar funções", correct: true },
        { letter: "D", resp: "Manipular o DOM", correct: false },
      ],
    },
  ],
  "React Native": [
    {
      question: "O que é o React Native?",
      options: [
        {
          letter: "A",
          resp: "Uma biblioteca JavaScript para construção de interfaces",
          correct: false,
        },
        {
          letter: "B",
          resp: "Um framework do JavaScript para a criação de aplicativos móveis",
          correct: true,
        },
        {
          letter: "C",
          resp: "Uma biblioteca para criação de jogos",
          correct: false,
        },
        { letter: "D", resp: "Um emulador para Android", correct: false },
      ],
    },
    {
      question: "o que é o Expo?",
      options: [
        {
          letter: "A",
          resp: "É o framework oficial do React Native",
          correct: true,
        },
        {
          letter: "B",
          resp: "Uma ferramenta para desenvolvimento web",
          correct: false,
        },
        { letter: "C", resp: "Um programa para Android", correct: false },
        { letter: "D", resp: "Uma biblioteca de componentes", correct: false },
      ],
    },
    {
      question: "Qual a principal vantagem do React Native?",
      options: [
        {
          letter: "A",
          resp: "É mais rápido que o desenvolvimento nativo",
          correct: false,
        },
        {
          letter: "B",
          resp: "Permite o desenvolvimento simultâneo para iOS e Android",
          correct: true,
        },
        {
          letter: "C",
          resp: "Possui melhor desempenho que Swift",
          correct: false,
        },
        { letter: "D", resp: "Não precisa de atualização", correct: false },
      ],
    },
    {
      question: "O que é o React Navigation?",
      options: [
        {
          letter: "A",
          resp: "Uma biblioteca de navegação para React Native",
          correct: true,
        },
        {
          letter: "B",
          resp: "Uma ferramenta para gerenciamento de estados",
          correct: false,
        },
        { letter: "C", resp: "Um servidor de renderização", correct: false },
        { letter: "D", resp: "Uma biblioteca de animação", correct: false },
      ],
    },
    {
      question: "Qual é a diferença entre React Native e React?",
      options: [
        {
          letter: "A",
          resp: "React Native é uma biblioteca, React é um framework",
          correct: false,
        },
        {
          letter: "B",
          resp: "React Native não suporta hooks, React suporta",
          correct: false,
        },
        {
          letter: "C",
          resp: "React Native é mais rápido que React",
          correct: false,
        },
        {
          letter: "D",
          resp: "React Native é para mobile, React é para web",
          correct: true,
        },
      ],
    },
    {
      question: "Para que serve o StyleSheet no React Native?",
      options: [
        {
          letter: "A",
          resp: "Serve para cria componentes",
          correct: false,
        },
        {
          letter: "B",
          resp: "Serve para definir estilos em componentes",
          correct: true,
        },
        { letter: "C", resp: "Serve para gerenciar navegação", correct: false },
        {
          letter: "D",
          resp: "Serve para gerenciador de estado",
          correct: false,
        },
      ],
    },
    {
      question: "Como começar um projecto React Native com expo?",
      options: [
        { letter: "A", resp: "npx create-expo-app", correct: true },
        { letter: "B", resp: "create-react-native-app", correct: false },
        { letter: "C", resp: "npx create-react-app", correct: false },
        { letter: "D", resp: "react-native start", correct: false },
      ],
    },
    {
      question:
        "Qual comando é usado para instalar bibliotecas no React Native?",
      options: [
        { letter: "A", resp: "expo install", correct: false },
        { letter: "B", resp: "yarn add", correct: false },
        { letter: "C", resp: "npm install", correct: true },
        { letter: "D", resp: "react-native install", correct: false },
      ],
    },
    {
      question: "O que é o Flexbox no React Native?",
      options: [
        { letter: "A", resp: "Uma biblioteca para animações", correct: false },
        {
          letter: "B",
          resp: "Um sistema de layout para organizar componentes",
          correct: true,
        },
        {
          letter: "C",
          resp: "Uma API para fazer requisições HTTP",
          correct: false,
        },
        { letter: "D", resp: "Uma ferramenta de depuração", correct: false },
      ],
    },
    {
      question: "Como você pode acessar a câmera, em um app React Native?",
      options: [
        {
          letter: "A",
          resp: "Usando bibliotecas de terceiros, como expo-camera",
          correct: true,
        },
        { letter: "B", resp: "Usando o DOM API", correct: false },
        {
          letter: "C",
          resp: "Usando apenas o React Native core",
          correct: false,
        },
        { letter: "D", resp: "Usando hooks", correct: false },
      ],
    },
    {
      question: "Qual é a função do AsyncStorage no React Native?",
      options: [
        { letter: "A", resp: "Gerenciar estados globais", correct: false },
        { letter: "B", resp: "Fazer chamadas de API", correct: false },
        {
          letter: "C",
          resp: "Renderizar componentes de forma assíncrona",
          correct: false,
        },
        {
          letter: "D",
          resp: "Persistir dados localmente no dispositivo",
          correct: true,
        },
      ],
    },
    {
      question: "O que é o Native Module no React Native?",
      options: [
        {
          letter: "A",
          resp: "Um módulo para gerenciar estados",
          correct: false,
        },
        { letter: "B", resp: "Um módulo para navegação", correct: false },
        {
          letter: "C",
          resp: "Um módulo para criar componentes nativos",
          correct: true,
        },
        { letter: "D", resp: "Um módulo para estilização", correct: false },
      ],
    },
    {
      question: "O que significa EAS?",
      options: [
        { letter: "A", resp: "Expo application Server", correct: false },
        { letter: "B", resp: "Expo Application Services", correct: true },
        { letter: "C", resp: "Expo apper Server", correct: false },
        { letter: "D", resp: "Expo Application State", correct: false },
      ],
    },
    {
      question: "Como você pode criar animações no React Native?",
      options: [
        { letter: "A", resp: "Usando o Keyframes", correct: false },
        {
          letter: "B",
          resp: "Usando o Reanimated do React Native",
          correct: true,
        },
        { letter: "C", resp: "Usando o jQuery", correct: false },
        { letter: "D", resp: "Usando o Angular Animations", correct: false },
      ],
    },
    {
      question: "O que é o Metro Bundler no React Native?",
      options: [
        { letter: "A", resp: "Um servidor de desenvolvimento", correct: false },
        { letter: "B", resp: "Uma ferramenta de teste", correct: false },
        { letter: "C", resp: "Uma biblioteca de navegação", correct: false },
        {
          letter: "D",
          resp: "Um bundler de pacotes para apps React Native",
          correct: true,
        },
      ],
    },
  ],
  Node: [
    {
      question: "O que é o Node.js?",
      options: [
        {
          letter: "A",
          resp: "Um ambiente de execução JavaScript server-side",
          correct: true,
        },
        { letter: "B", resp: "Uma linguagem de programação", correct: false },
        { letter: "C", resp: "Um framework JavaScript", correct: false },
        {
          letter: "D",
          resp: "Uma biblioteca para construir interfaces",
          correct: false,
        },
      ],
    },
    {
      question: "O que é o Express.js?",
      options: [
        {
          letter: "A",
          resp: "Uma ferramenta para operações interbancárias",
          correct: false,
        },
        { letter: "B", resp: "Uma biblioteca de componentes", correct: false },
        {
          letter: "C",
          resp: "Um framework minimalista do Node.js",
          correct: true,
        },
        {
          letter: "D",
          resp: "Um framework para construir APIs RESTful",
          correct: true,
        },
      ],
    },
    {
      question: "Para que serve o npm?",
      options: [
        {
          letter: "A",
          resp: "Um ambiente de execução JavaScript",
          correct: false,
        },
        {
          letter: "B",
          resp: "Gerenciador de pacotes do Node.js",
          correct: true,
        },
        {
          letter: "C",
          resp: "Uma biblioteca para estilização",
          correct: false,
        },
        { letter: "D", resp: "Um servidor de desenvolvimento", correct: false },
      ],
    },
    {
      question: "Qual é o comando para iniciar um projeto Node.js?",
      options: [
        { letter: "A", resp: "node start", correct: false },
        { letter: "B", resp: "npm init", correct: true },
        { letter: "C", resp: "npm start", correct: false },
        { letter: "D", resp: "node init", correct: false },
      ],
    },
    {
      question: "O que é o package.json?",
      options: [
        {
          letter: "A",
          resp: "Arquivo que contém o código-fonte do projeto",
          correct: false,
        },
        {
          letter: "B",
          resp: "Arquivo que inicializa o servidor",
          correct: false,
        },
        {
          letter: "C",
          resp: "Arquivo que define rotas de API",
          correct: false,
        },
        {
          letter: "D",
          resp: "Arquivo que contém informações do projeto e suas dependências",
          correct: true,
        },
      ],
    },
    {
      question: "O que é o middleware no Express.js?",
      options: [
        {
          letter: "A",
          resp: "Funções que têm acesso ao objeto de requisição e resposta",
          correct: true,
        },
        { letter: "B", resp: "Um banco de dados", correct: false },
        { letter: "C", resp: "Uma biblioteca de componentes", correct: false },
        { letter: "D", resp: "Uma ferramenta de debug", correct: false },
      ],
    },
    {
      question: "O que é o callback hell?",
      options: [
        {
          letter: "A",
          resp: "Uma biblioteca para lidar com callbacks",
          correct: false,
        },
        { letter: "B", resp: "Um erro no JavaScript", correct: false },
        {
          letter: "C",
          resp: "É quando callbacks aninhados dificultam a leitura do código",
          correct: true,
        },
        { letter: "D", resp: "Uma ferramenta de depuração", correct: false },
      ],
    },
    {
      question: "O que é o event loop no Node.js?",
      options: [
        {
          letter: "A",
          resp: "Um loop infinito que aguarda requisições HTTP",
          correct: false,
        },
        {
          letter: "B",
          resp: "Um mecanismo que gerencia operações assíncronas",
          correct: true,
        },
        {
          letter: "C",
          resp: "Uma biblioteca para lidar com eventos",
          correct: false,
        },
        { letter: "D", resp: "Uma API para manipular eventos", correct: false },
      ],
    },
    {
      question: "Qual a função do módulo fs no Node.js?",
      options: [
        { letter: "A", resp: "Lidar com requisições HTTP", correct: false },
        {
          letter: "B",
          resp: "Lidar com operações de banco de dados",
          correct: false,
        },
        { letter: "C", resp: "Gerenciar operações de arquivos", correct: true },
        { letter: "D", resp: "Gerenciar eventos", correct: false },
      ],
    },
    {
      question: "Para que serve o comando npm install?",
      options: [
        { letter: "A", resp: "Inicializar um novo projeto", correct: false },
        { letter: "B", resp: "Executar testes unitários", correct: false },
        { letter: "C", resp: "Iniciar o servidor Node.js", correct: false },
        {
          letter: "D",
          resp: "Instalar pacotes listados no package.json",
          correct: true,
        },
      ],
    },
    {
      question: "O que é o Express Router?",
      options: [
        {
          letter: "A",
          resp: "Uma ferramenta de roteamento para Express.js",
          correct: true,
        },
        { letter: "B", resp: "Uma biblioteca de estilização", correct: false },
        {
          letter: "C",
          resp: "Um módulo para operações de arquivo",
          correct: false,
        },
        { letter: "D", resp: "Um banco de dados", correct: false },
      ],
    },
    {
      question: "Qual deles não é um framewrok do Node.js?",
      options: [
        { letter: "A", resp: "Adonis", correct: false },
        { letter: "B", resp: "Nest", correct: false },
        { letter: "C", resp: "Flask", correct: true },
        { letter: "D", resp: "Express", correct: false },
      ],
    },
    {
      question: "O que é o CommonJS no Node.js?",
      options: [
        {
          letter: "A",
          resp: "Um sistema de módulos para importar e exportar funcionalidades",
          correct: true,
        },
        { letter: "B", resp: "Uma ferramenta de compilação", correct: false },
        { letter: "C", resp: "Uma biblioteca de componentes", correct: false },
        { letter: "D", resp: "Um banco de dados", correct: false },
      ],
    },
    {
      question: "Como você pode criar um servidor no Node.js?",
      options: [
        { letter: "A", resp: "Usando o módulo fs", correct: false },
        { letter: "B", resp: "Usando o React", correct: false },
        { letter: "C", resp: "Usando o middleware", correct: false },
        {
          letter: "D",
          resp: "Usando o módulo http e a função createServer",
          correct: true,
        },
      ],
    },
    {
      question: "O que é o process.env no Node.js?",
      options: [
        {
          letter: "A",
          resp: "Um módulo para operações de arquivo",
          correct: false,
        },
        { letter: "B", resp: "Um banco de dados", correct: false },
        { letter: "C", resp: "Uma biblioteca de estilização", correct: false },
        {
          letter: "D",
          resp: "Um objeto que contém as variáveis de ambiente",
          correct: true,
        },
      ],
    },
  ],
};