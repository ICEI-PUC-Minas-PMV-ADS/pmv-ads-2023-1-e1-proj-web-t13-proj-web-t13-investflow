# Plano de Testes de Software

Os requisitos para realização dos testes de software são:

● Site publicado no Vercel

● Navegador da Internet - Chrome, Firefox, Edge ou Safari

● Conectividade de Internet para acesso à API

Escopo do Teste
---------------

Este plano de teste cobre a funcionalidade do aplicativo de criptomoedas, incluindo a autenticação do usuário, visualização e interação com cotações de criptomoedas, criação de alertas de preço, pesquisa de criptomoedas e personalização do aplicativo, bem como a compatibilidade do navegador, a usabilidade da interface do usuário e os tempos de carregamento da página.

Objetivos do Teste
------------------

Os principais objetivos deste plano de teste são:

● Verificar se todas as funcionalidades listadas nos requisitos funcionais funcionam conforme esperado.

● Verificar se o aplicativo cumpre os requisitos não funcionais, incluindo usabilidade da interface do usuário, compatibilidade do navegador e tempos de carregamento da página.

● Identificar e corrigir quaisquer problemas ou erros antes do lançamento do aplicativo.

Garantir que o aplicativo ofereça uma experiência de usuário positiva e intuitiva.

Estratégia de Teste
-------------------

A estratégia de teste incluirá testes manuais para verificar todos os aspectos do aplicativo, que permitirão uma inspeção mais detalhada e intuitiva da interface do usuário e da experiência geral do usuário.

Ambiente de Teste
-----------------

Os testes serão realizados em um ambiente de teste local que imita de perto o ambiente de produção. Isso incluirá a utilização de uma variedade de dispositivos e navegadores para garantir a compatibilidade. Também será configurado um throttling para simular diferentes velocidades de conexão à Internet para testar os tempos de carregamento da página.

Responsabilidade de Teste
-------------------------

A equipe de desenvolvimento do projeto será responsável pela execução do plano de teste e pelo relatório dos resultados. Todos os membros serão responsáveis por garantir que o plano de teste seja seguido e que quaisquer problemas sejam corrigidos.

Critérios de Aceitação
----------------------

Os critérios de aceitação para este plano de teste incluem a funcionalidade correta de todas as características listadas nos requisitos funcionais, o cumprimento dos requisitos não funcionais, sem erros ou falhas significativas, e uma experiência de usuário positiva e intuitiva.

Riscos e Contingências
----------------------

Os principais riscos associados a este plano de teste incluem atrasos na programação e a descoberta de problemas significativos durante o processo de teste. Contingências para esses riscos incluem a alocação de tempo extra para testes e a disponibilidade de recursos adicionais para correções de bugs, se necessário.

Recursos de Teste
-----------------

Os recursos de teste para este plano incluirão a equipe de desenvolvimento, composta por desenvolvedores e testadores de software especializados.

Entregáveis de Teste
--------------------

Os entregáveis para este plano de teste incluirão relatórios detalhados de teste, incluindo quaisquer bugs ou problemas encontrados, recomendações para correções e uma avaliação geral da qualidade do software.

Casos de Teste
--------------

Os testes funcionais e não-funcionais a serem realizados no aplicativo são descritos a seguir.

|Título|Requisitos Associados|Objetivo do Teste|Passos|Critério de Êxito|
|:----|:----|:----|:----|:----|
|TC 01: RF-01 - Teste de Login Positivo|RF-01|Verificar a funcionalidade de login|1. Navegue até a página de login.  2. Cadastre um usuário  3. Insira e-mail e senha cadastrados (válidos).  4. Clique no botão de login  |O usuário é autenticado e acessa a conta.|
|TC 02: RF-01 - Teste de Login Negativo|RF-01|Verificar o tratamento de erros de login|1. Navegue até a página de login.  2. Insira um e-mail e/ou senha inválidos ou deixe um ou ambos os campos vazios.  3. Clique no botão de login.  |O usuário recebe uma mensagem de erro apropriada e o login é bloqueado.|
|TC 03: RF-02 - Autenticação Google Positivo|RF-02|Verificar a funcionalidade de autenticação do Google|1. Navegue até a página de login. 2. Clique no botão "Sign in with Google".  3. Autentique-se com uma conta Google válida.  |O usuário é autenticado via Google e acessa a conta.|
|TC 04: RF-02 - Autenticação Google Negativo|RF-02|Verificar o tratamento de erros na autenticação do Google|1. Navegue até a página de login. 2. Clique no botão "Sign in with Google".  3. Tente autenticar-se com uma conta Google inválida ou sem inserir as credenciais.  |O usuário recebe uma mensagem de erro apropriada e a autenticação é bloqueada.|
|TC 05: RF-03 - Visualização de cotações de criptomoedas Positivo|RF-03|Verificar a atualização em tempo real das cotações de criptomoedas|1. Acesse a página inicial ou a página específica de uma criptomoeda.  2. Observe as cotações atualizadas em tempo real.  |As cotações de criptomoedas são atualizadas em tempo real sem atrasos perceptíveis.|
|TC 06: RF-03 - Visualização de cotações de criptomoedas Negativo|RF-03|Verificar a consistência das atualizações das cotações|1. Acesse a página inicial ou a página específica de uma criptomoeda.  2. Observe qualquer atraso na atualização das cotações.  |O sistema identifica e não permite atrasos significativos na atualização das cotações.|
|TC 07: RF-04 - Visualização de gráfico de linha Positivo|RF-04|Verificar a exibição do gráfico de linha|1. Acesse a página de detalhes de uma criptomoeda.  2. Observe o gráfico de linha de preço ao longo do tempo.  |O gráfico de linha de preço é exibido corretamente e está de acordo com as informações atuais da criptomoeda.|
|TC 08: RF-04 - Visualização de gráfico de linha Negativo|RF-04|Verificar a consistência do gráfico de linha|1. Acesse a página de detalhes de uma criptomoeda.  2. Observe se há gráficos de linha sem dados ou informações inconsistentes.  |O sistema identifica e não permite a exibição de gráficos de linha sem dados ou inconsistentes.|
|TC 09: RF-05 - Adição de criptomoedas à lista de favoritos Positivo|RF-05|Verificar a adição de criptomoedas à lista de favoritos|1. Acesse a página de detalhes de uma criptomoeda.  2. Clique para adicionar a criptomoeda à lista de favoritos.  |A criptomoeda é adicionada à lista de favoritos e é visível na seção de favoritos.|
|TC 10: RF-05 - Adição de criptomoedas à lista de favoritos Negativo|RF-05|Verificar a consistência na adição de criptomoedas à lista de favoritos|1. Tente adicionar uma criptomoeda não listada à lista de favoritos.|O sistema identifica e não permite adicionar criptomoedas não listadas à lista de favoritos.|
|TC 11: RF-06 - Exibição de informações relevantes sobre criptomoedas Positivo|RF-06|Verificar a exibição de informações relevantes sobre criptomoedas|1. Acesse a página de detalhes de uma criptomoeda.  2. Verifique as informações exibidas, como nome, preço, variação percentual, volume de negociação, gráficos e estatísticas.  |As informações são exibidas corretamente e estão de acordo com as informações atuais da criptomoeda.|
|TC 12: RF-06 - Exibição de informações relevantes sobre criptomoedas Negativo|RF-06|Verificar a consistência na exibição de informações sobre criptomoedas|1. Acesse a página de detalhes de uma criptomoeda.  2. Observe se há informações incorretas ou desatualizadas.  |O sistema identifica e não permite a exibição de informações incorretas ou desatualizadas.|
|TC 13: RF-07 - Criação de alertas de preço Positivo|RF-07|Verificar a criação de alertas de preço para criptomoedas selecionadas|1. Acesse a página de detalhes de uma criptomoeda. 2. Defina um alerta de preço para a criptomoeda.|O sistema permite a criação do alerta e o alerta é exibido na lista de alertas.|
|TC 14: RF-07 - Criação de alertas de preço Negativo|RF-07|Verificar a consistência na criação de alertas de preço|1. Tente criar um alerta de preço sem especificar o preço-alvo.|O sistema identifica e impede a criação de alertas sem especificar o preço-alvo.|
|TC 15: RF-08 - Criação de alertas a partir da lista de favoritos Positivo|RF-08|Verificar a criação de alertas a partir da lista de favoritos|1. Acesse a lista de favoritos.  2. Defina um alerta de preço para uma criptomoeda na lista.  |O sistema permite a criação do alerta e o alerta é exibido na lista de alertas.|
|TC 16: RF-08 - Criação de alertas a partir da lista de favoritos Negativo|RF-08|Verificar a consistência na criação de alertas a partir da lista de favoritos|1. Tente criar um alerta para uma criptomoeda que não está na lista de favoritos.|O sistema identifica e impede a criação de alertas para criptomoedas que não estão na lista de favoritos.|
|TC 17: RF-09 - Criação de alertas a partir da Homepage Positivo|RF-09|Verificar a criação de alertas a partir da Homepage|1. Acesse a Homepage.  2. Defina um alerta de preço para uma criptomoeda em destaque.  |O sistema permite a criação do alerta e o alerta é exibido na lista de alertas.|
|TC 18: RF-09 - Criação de alertas a partir da Homepage Negativo|RF-09|Verificar a consistência na criação de alertas a partir da Homepage|1. Tente criar um alerta de preço sem especificar critérios corretos.|O sistema identifica e impede a criação de alertas sem especificar critérios corretos.|
|TC 19: RF-10 - Pesquisa de criptomoedas específicas Positivo|RF-10|Verificar a funcionalidade de pesquisa de criptomoedas específicas|1. Abra o aplicativo e acesse a página de pesquisa.  2. Insira o nome ou símbolo de uma criptomoeda válida no campo de pesquisa.  3. Pressione enter ou clique no botão de pesquisa.  |O sistema deve retornar os resultados relevantes para a criptomoeda específica pesquisada.|
|TC 20: RF-10 - Pesquisa de criptomoedas específicas Negativo|RF-10|Verificar a funcionalidade de pesquisa de criptomoedas específicas para entradas inválidas|1. Abra o aplicativo e acesse a página de pesquisa.  2. Insira um nome ou símbolo de criptomoeda inválido ou inexistente no campo de pesquisa.  3. Pressione enter ou clique no botão de pesquisa.  |O sistema não deve retornar nenhum resultado e deve mostrar uma mensagem indicando que nenhuma correspondência foi encontrada.|
|TC 21: RNF-01 - Publicação do site na plataforma Vercel|RNF-01|Verificar se o site está hospedado e funcionando corretamente na plataforma Vercel.|1. Abra um navegador e digite a URL do site.  2. Pressione Enter.  |O site deve ser carregado corretamente e exibir a interface do aplicativo de criptomoedas conforme esperado. A URL deve mostrar que o site está hospedado na plataforma Vercel.|
|TC 22: RNF-02 - Interface do usuário intuitiva e fácil de usar|RNF-02|Verificar se a interface do usuário é intuitiva e fácil de usar.|1. Realizar sessões de teste de usabilidade com um grupo de usuários.  2. Solicitar feedback sobre a facilidade de uso e a intuitividade da interface.  |A maioria dos usuários deve achar a interface do usuário intuitiva e fácil de usar. O feedback dos usuários deve ser positivo em sua maioria.|
|TC 23: RNF-03 - Compatibilidade com navegadores|RNF-03|Verificar a compatibilidade do site com os principais navegadores.|1. Abra o site nos navegadores Google Chrome, Safari, Firefox e Microsoft Edge.  2. Verifique o carregamento e a renderização do site.  |O site deve ser carregado e renderizado corretamente em todos os navegadores testados, sem problemas de compatibilidade.|
|TC 24: RNF-04 - Tempo de carregamento rápido|RNF-04|Verificar o tempo de carregamento da página inicial em várias conexões de internet.|1. Conecte-se a várias conexões de internet, incluindo conexões de banda larga e de baixa velocidade (3G ou inferior).  2. Abra a página inicial do site.  3. Meça o tempo de carregamento da página.  |O tempo de carregamento da página inicial não deve exceder 3 segundos em conexões de banda larga e 5 segundos em conexões de baixa velocidade.|
|TC 25: RNF-05 - Termos de Uso e Políticas de Privacidade|RNF-05|Verificar os Termos de Uso e Políticas de Privacidade|1. Navegue até a página de cadastro..  2. Verifique a existência de um link com o nome  “Termos de Uso e Políticas de Privacidade” na caixa de aceite dos termos.  3. Clique no link “Termos de Uso e Políticas de Privacidade”  |Um pop-up com os Termos de Uso e Políticas de Privacidade deve ser aberto|

 
