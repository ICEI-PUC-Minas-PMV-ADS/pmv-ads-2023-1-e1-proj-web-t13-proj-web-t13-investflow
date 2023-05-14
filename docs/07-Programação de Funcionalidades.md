# Programação de Funcionalidades

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="4-Metodologia.md"> Metodologia</a>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="5-Arquitetura da Solução.md"> Arquitetura da Solução</a>

## Visualizar um Gráfico de Linha de Preço de uma Criptomoeda ao Longo do Tempo (RF-04)

Nessa tela, são exibidas informações detalhadas sobre um ativo específico selecionado pelo usuário na lista de ativos obtidos através da API CoinGecko, conforme ilustrado na figura abaixo.

![Gráfico de Linha de Preço de uma Criptomoeda](img/asset_details.png)

- **Requisitos atendidos**: RF-04
- **Artefatos da funcionalidade**: AssetDetails.js, Navbar.js
- **Estrutura de Dados**:

  - id: Este é o identificador único do ativo que o usuário selecionou para visualizar mais detalhes. O id é obtido dos parâmetros da URL usando o hook useParams() do react-router-dom.

  - asset: Este é o estado onde as informações detalhadas do ativo selecionado são armazenadas. Essas informações são buscadas da API CoinGecko e incluem dados como nome, preço atual, volume de mercado, percentual de mudança de preço e muito mais.

  - chartData: Este é o estado onde os dados do gráfico de preços do ativo são armazenados. Os dados do gráfico são buscados da API CoinGecko e são formatados para que possam ser usados diretamente pelo componente LineChart do recharts. Cada entrada no chartData é um objeto com duas propriedades: time e price. time é uma string formatada representando a data e hora do ponto de dados, e price é o preço do ativo naquela hora.

  - isFavorite: Este é o estado booleano que indica se o ativo atual é um favorito do usuário ou não. É usado para determinar qual ícone de estrela (cheio ou vazio) deve ser exibido ao lado do nome do ativo.

  - CustomTooltip: Este é um componente personalizado usado para exibir tooltips no gráfico de preços. Ele recebe active e payload como props. active é um booleano que indica se o tooltip está ativo ou não, e payload é um array contendo os dados do ponto de dados atualmente sob o cursor do usuário.

- **Instruções de acesso**:
  - Abra um navegador de Internet e informe a seguinte URL: https://investflow.github.io/nomedacriptomoeda ou selecione uma criptomoeda em https://investflow.github.io
  - A tela de detalhes da criptomoeda é exibida pelo aplicativo.

## Adicionar Ações à Lista de favoritos/watchlist (RF-05)

Exibe a lista de ativos favoritos do usuário. Ele busca os ativos favoritos do local storage do navegador e os exibe em uma tabela. Os usuários podem adicionar ou remover ativos de seus favoritos clicando no ícone de estrela na tabela. Este componente também usa a API CoinGecko para buscar informações atualizadas sobre os ativosconforme ilustrado na figura abaixo.

![Página de Favoritos](img/favorites_list.png)

- **Requisitos atendidos**: RF-05
- **Artefatos da funcionalidade**: FavoriteList.js, Navbar.js
- **Estrutura de Dados**:

  - favorites: Este é o estado onde a lista de ativos favoritos do usuário é armazenada. Essa lista é inicialmente carregada do local storage do navegador quando o componente é montado.

  - assets: Este é o estado onde a lista completa de ativos é armazenada. Essa lista é buscada da API CoinGecko sempre que a lista de favoritos é atualizada. Cada ativo na lista é um objeto que contém várias propriedades, como id, name, price, oneHourChange, twentyFourHourChange, sevenDayChange, e isFavorite.

  - toggleFavorite: Esta é a função que é chamada quando o usuário clica no ícone de estrela ao lado de um ativo na tabela. Ela atualiza a lista de favoritos no estado e no local storage do navegador.

  - formatPercentage: Esta é uma função auxiliar usada para formatar os valores de mudança de preço como strings de porcentagem. Se o valor for undefined, ela retorna a string 'N/A'.

  - favoriteAssets: Esta é uma lista derivada que contém apenas os ativos que estão na lista de favoritos do usuário. Ela é calculada filtrando a lista completa de ativos para incluir apenas aqueles cujo id aparece na lista de favoritos.

- **Instruções de acesso**:
  - Abra um navegador de Internet e informe a seguinte URL: https://investflow.github.io/favorites ou clique no ícone de favoritos na Navbar.
  - A tela de criptomoedas favoritas é exibida pelo aplicativo.

## Página Inicial/Lista de Ativos (RF-06)

Exibe a lista de todos os ativos disponíveis. Ele também usa a API CoinGecko para buscar informações sobre os ativos e permite ao usuário adicionar ativos à sua lista de favoritos, conforme ilustrado na figura abaixo.

![Página Inicial/Lista de Ativos](img/asset_list.png)

- **Requisitos atendidos**: RF-06
- **Artefatos da funcionalidade**: AssetList.js, Navbar.js
- **Estrutura de Dados**:

  - assets: Este é o estado onde a lista completa de ativos é armazenada. Essa lista é buscada da API CoinGecko sempre que a lista de favoritos é atualizada. Cada ativo na lista é um objeto que contém várias propriedades, como id, name, price, oneHourChange, twentyFourHourChange, sevenDayChange, e isFavorite.

  - favorites: Este é o estado onde a lista de ativos favoritos do usuário é armazenada. Essa lista é inicialmente carregada do local storage do navegador quando o componente é montado.

  - searchValue: Este é o estado onde o valor atual do campo de pesquisa é armazenado. Ele é atualizado sempre que o usuário altera o valor do campo de pesquisa.

  - toggleFavorite: Esta é a função que é chamada quando o usuário clica no ícone de estrela ao lado de um ativo na tabela. Ela atualiza a lista de favoritos no estado e no local storage do navegador.

  - handleSearchChange: Esta é a função que é chamada quando o valor do campo de pesquisa muda. Ela atualiza o valor de searchValue no estado.

  - formatPercentage: Esta é uma função auxiliar usada para formatar os valores de mudança de preço como strings de porcentagem. Se o valor for undefined, ela retorna a string 'N/A'.

  - filteredAssets: Esta é uma lista derivada que contém apenas os ativos cujo nome contém o valor atual de searchValue. Ela é calculada filtrando a lista completa de ativos sempre que searchValue ou assets são atualizados.

- **Instruções de acesso**:
  - Abra um navegador de Internet e informe a seguinte URL: https://investflow.github.io/.
  - A lista de criptomoedas é exibida pelo aplicativo.
