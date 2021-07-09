# DEVinHouse - ContaZap

## GRID
Utilizado na construção de layouts através de um "fatiamento" da tela, facilitando a distribuição e organizaçã dos elementos na página.


O grid é _**bidirecional**_, ou seja, define tanto linha como colunas e permite que posicionemos o elemento em qualquer posição dentro dessa divisão.


___
### **Propriedades**
Vamos separar em 2 grupos: `container` e `item(s)`

### Container
- display: grid
- grid-template-columns; _**(define o numero de colunas do layout)**_

- grid-template-rows; _**(define o numero de linhas do layout)**_
- grid-gap; _**(shorthand que define o espaçamento das linhas e/ou colunas)**_
  - grid-row-gap;
  - grid-column-gap;
-- grid-template-areas; _**(define o nome das áreas para posicionamento do conteúdo)**_

... e mais 4 propriedades e **alinhamento**


### Item(s)
- grid-column; _**(shorthand que define inicio e fim do elemento na coluna)**_
  - grid-column-start; _**(define onde inicia o elemento dentro da coluna)**_
  - grid-column-end; _**(define onde termina o elemento dentro da coluna)**_

- grid-row; _**(shorthand que define inicio e fim do elemento na linha)**_
  - grid-row-start; _**(define onde inicia o elemento dentro da linha)**_
  - grid-row-end; _**(define onde termina o elemento dentro da linha)**_

- grid-gap; _**(shorthand que define o espaçamento das linhas e/ou colunas)**_
  - grid-row-gap;
  - grid-column-gap;
-- grid-template-areas; _**(define o nome das áreas para posicionamento do conteúdo)**_

... e mais 4 propriedades e **alinhamento**
