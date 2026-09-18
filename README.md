# Ninguém mora aqui

Este repositório contém um site gerado automaticamente. Não o edite à mão:
cada publicação substitui todo o conteúdo por aquilo que o pipeline produziu.

## O que é

Uma comparação entre os anúncios de alojamento local em Lisboa publicados
pelo Inside Airbnb e o Registo Nacional de Alojamento Local (RNAL) do Turismo
de Portugal. Para cada anúncio, o site verifica se o número de licença citado
existe no registo, se está registado noutro concelho, e se o mesmo número
aparece em vários anúncios.

O site é reconstruído quando há dados novos: um novo instantâneo do Inside
Airbnb, ou uma alteração no registo que toque uma licença citada por um
anúncio em Lisboa. Nas semanas em que nada muda, nada é republicado.

## Origem do método

A comparação entre anúncios e registo tem origem no projecto
[metade/Alojamento_Ilegal](https://github.com/metade/Alojamento_Ilegal).
Este repositório publica o resultado de uma reimplementação desse método,
verificada contra a original.

## Fontes

- [Inside Airbnb](https://insideairbnb.com/get-the-data/), instantâneo de
  Lisboa. As coordenadas publicadas são deslocadas pelo Airbnb entre 0 e 150
  metros do endereço real, e cada anúncio é deslocado individualmente, mesmo
  dentro do mesmo edifício.
- Registo Nacional de Alojamento Local, via
  [Turismo de Portugal](https://sigtur.turismodeportugal.pt/).

## O que não se pode concluir

Uma licença que não corresponde ao registo não é, por si só, prova de que um
alojamento é ilegal. Um número pode estar mal transcrito no anúncio, o registo
pode conter um erro de coordenadas, e há alojamentos legalmente isentos de
licença. O site mede a correspondência entre duas bases de dados públicas, não
a legalidade de um alojamento.

## Corrigir um erro

Se encontrar um erro, ou se considera que um anúncio está mal classificado,
[abra uma questão](https://github.com/caasols/ninguem-mora-aqui/issues) e será
analisada.

## Dados publicados

Em `data/`:

- `facts.json`, os números agregados que cada página mostra.
- `clusters.json`, os grupos de anúncios que partilham um número de licença.
- `result.csv`, a tabela por anúncio, para abrir numa folha de cálculo.
- `listings.geojson`, os pontos do mapa.
- `history.json`, os números de cada instantâneo publicado.
