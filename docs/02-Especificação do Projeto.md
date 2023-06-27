# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="01-Documentação de Contexto.md"> Documentação de Contexto</a></span>

A definição exata do problema e os pontos mais relevantes a serem tratados neste projeto foi consolidada com a participação dos usuários em um trabalho de imersão feita pelos membros da equipe a partir da observação dos usuários em seu local natural e por meio de entrevistas. Os detalhes levantados nesse processo foram consolidados na forma de personas e histórias de usuários.

## Personas


* João Freitas. Idade: 25. Ocupação: Engenheiro Mecânico, trabalha em uma indústria automobilística na cidade de São José dos Campos-SP. Motivações:
Aprender sobre investimentos;Ter uma renda extra, aumentar seus conhecimentos financeiros; Garantir uma estabilidade financeira no futuro. Frustrações:
Falta de conhecimento sobre finanças; Insegurança em relação a investimentos. Hobbies: Assistir filmes e séries; Praticar esportes; Jogar videogames; Viajar. Aplicativos: Instagram; WhatsApp; Spotify; iFood; Internet Banking.


* Fernanda Oliveira. Idade: 40. Ocupação: Gerente de Portfólio em um grande banco brasileiro. Motivações: Maximizar seus retornos financeiros; investir em ativos de alto potencial de valorização; Manter-se atualizado sobre as tendências do mercado financeiro; Diversificar sua carteira de investimentos.Frustrações: Oscilações bruscas no mercado financeiro; Falta de tempo para monitorar seus investimentos; Problemas técnicos em plataformas de investimento. Hobbies: Assistir filmes e séries; Praticar esportes; Jogar videogames; Viajar. Aplicativos: WhatsApp; Spotify; Internet Banking; Bloomberg; TradingView.



## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|João Freitas       | Uma funcionalidade que me ajude a entender o funcionamento do mercado de ações | Aprender a investir melhor o meu dinheiro |
|João Freitas       | Uma ferramenta que me ajude a encontrar investimentos de baixo risco. | Proteger meu patrimônio e ganhar um retorno razoável |
|João Freitas       | Uma interface simples e intuitiva | Acompanhar meus investimentos sem precisar de conhecimentos avançados de finanças |
|João Freitas       | Uma funcionalidade que me permite visualizar o desempenho dos meus investimentos em tempo real | Poder tomar decisões rápidas caso haja alguma mudança no mercado |
|João Freitas       | Uma ferramenta que me ajude a simular uma carteira diversificada de investimentos | Reduzir meu risco e maximizar meu retorno a longo prazo |
|Fernanda Oliveira       | Uma plataforma que me permite verificar ativos complexos na bolsa de valores |Poder explorar oportunidades de investimento mais avançadaS |
|Fernanda Oliveira       | Uma ferramenta que me permita realizar análises técnicas avançadas | Poder identificar padrões de preço e tomar decisões mais informadas |
|Fernanda Oliveira       | Uma interface customizável | Que eu possa personalizar a visualização das informações de acordo com as minhas preferências |
|Fernanda Oliveira       | Uma ferramenta que me permite acompanhar os resultados de diferentes estratégias de investimento ao mesmo tempo | Poder comparar os resultados e tomar decisões mais embasadas |
|Fernanda Oliveira       | Uma plataforma que me permite simular investimentos em diferentes ativos financeiros, como opções e fundos imobiliários | Diversificar minha carteira e maximizar meu retorno |


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O aplicativo deve permitir que o usuário faça login usando suas credenciais, como e-mail e senha | ALTA | 
|RF-002| O aplicativo deve permitir que o usuário autentique por meio de uma conta Google (Sign in with Google API). | BAIXA |
|RF-003| O aplicativo deve permitir que os usuários visualizem as cotações das ações com baixa latência. | ALTA |
|RF-004| O aplicativo deve permitir que os usuários visualizem um gráfico de linha de preço de uma ação ao longo do tempo. | MEDIA |
|RF-005| O aplicativo deve permitir que os usuários adicionem ações à sua lista de favoritos/ watchlist. | ALTA |
|RF-006| O aplicativo deve exibir informações relevantes sobre cada ativo financeiro, como nome, preço, variação percentual e volume de negociação, incluindo gráficos e estatísticas importantes. | ALTA |
|RF-007| O aplicativo deve permitir que os usuários criem alertas de preço para ações selecionadas, especificando o preço-alvo | ALTA |
|RF-008| O aplicativo deve permitir que o usuário possa criar alertas a partir da sua lista de favoritos/ watchlist. | MEDIA |
|RF-009| O aplicativo deve permitir que o usuário possa criar alertas a partir da Homepage | BAIXA |
|RF-010| O aplicativo deve permitir que os usuários pesquisem ações específicas em um campo de busca, inserindo o nome ou símbolo da ação. | ALTA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O site deve ser publicado em um ambiente acessível publicamente na Internet (Repl.it, GitHub Pages, Heroku)  | Alta | 
|RNF-002| O site deverá ser compatível com navegadores web Google Chrome (Android) e Safari (iOS)  | Alta | 
|RNF-003| O aplicativo deve ter uma interface de usuário intuitiva e fácil de usar  | Alta | 
|RNF-004| O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge)  | Alta | 
|RNF-005| O aplicativo deve ter um tempo de carregamento rápido, com um tempo máximo de carregamento de 3 segundos para a página inicial em conexões de banda larga e 5 segundos em conexões de baixa velocidade (3G ou inferior).  | Alta | 
|RNF-006| O aplicativo deve ser desenvolvido de acordo com as leis e regulamentações de proteção de dados do país (LGPD).  | Alta | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue no final do semestre letivo, não podendo extrapolar a data de 25/06/2023 (5ª Etapa). |
|02| O aplicativo deve se restringir às tecnologias básicas da Web no Frontend.       |
|02| A equipe não pode subcontratar o desenvolvimento do trabalho.        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
