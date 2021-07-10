# DEVinHouse - ContaZap

## GRID

Utilizado na construção de layouts através de um "fatiamento" da tela, facilitando a distribuição e organizaçã dos elementos na página.

O grid é _**bidirecional**_, ou seja, define tanto linha como colunas e permite que posicionemos o elemento em qualquer posição dentro dessa divisão.

---

### **Propriedades**

Vamos separar em 2 grupos: `container` e `item(s)`

---

### Container

- display: grid
- grid-template-columns; _**(define o numero de colunas do layout)**_ <br>ex: grid-template-columns: 1fr 5fr;
- grid-template-rows; _**(define o numero de linhas do layout)**_
  <br>ex: grid-template-rows: 8vh 87vh 5vh;

- grid-gap; _**(shorthand que define o espaçamento das linhas e/ou colunas)**_
  - grid-row-gap;
  - grid-column-gap;
    -- grid-template-areas; _**(define o nome das áreas para posicionamento do conteúdo)**_

... e mais 4 propriedades de **alinhamento**

---

### Item(s)

- grid-column; _**(shorthand que define inicio e fim do elemento na coluna)**_

  - grid-column-start; _**(define onde inicia o elemento dentro da coluna)**_
  - grid-column-end; _**(define onde termina o elemento dentro da coluna)**_

- grid-row; _**(shorthand que define inicio e fim do elemento na linha)**_

  - grid-row-start; _**(define onde inicia o elemento dentro da linha)**_
  - grid-row-end; _**(define onde termina o elemento dentro da linha)**_

- grid-area; _**(define em qual area do nosso grid o elemento será posicionado)**_

... e mais 2 propriedades de **alinhamento**
