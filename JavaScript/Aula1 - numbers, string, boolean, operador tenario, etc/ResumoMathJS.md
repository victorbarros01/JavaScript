# Resumo das Funções Math em JavaScript

**Math.PI**

Retorna o valor de PI (3.14159...), útil em cálculos com círculos, como área e perímetro.

```javascript
Math.PI; //returna 3.141592653589793.
```

**Math.abs(x)**

Retorna o valor absoluto de x.

```javascript
Math.abs(-5); //returna 5.
```

**Math.ceil(x)**

Arredonda x para o inteiro mais próximo acima.

```javascript
Math.ceil(4.2); //retorna 5.
```

**Math.floor(x)**

Arredonda x para o inteiro mais próximo abaixo.

```javascript
Math.floor(4.9); //retorna 4.
```

**Math.round(x)**

Arredonda x para o inteiro mais próximo.

```javascript
Math.round(4.5); //retorna 5.
```

**Math.max(x, y, ...) e Math.min(x, y, ...)**

Retorna o maior ou menor valor entre os números fornecidos.

```javascript
Math.max(17, 20, 30); //retorna 30.

Math.min(17, 20, 30); //retorna 17.
```

**Math.pow(x, y)**

Calcula x elevado à potência y.

```javascript
Math.pow(2, 3); //retorna 8.
```

**Math.sqrt(x)**

Retorna a raiz quadrada de x.

```javascript
Math.sqrt(16); //retorna 4.
```

**Math.random()**

Retorna um número pseudoaleatório entre 0 e 1, excluindo 1.

```javascript
Math.random(); //retona entre 0 e 0,999...

Math.random() * 100; // retorna entre 0 e 99,999...
```

**Math.trunc(x)**

Retorna a parte inteira de x.

```javascript
Math.trunc(2.51251526); //retorna 2.

Math.trunc(Math.random() * 101); //retorna entre 0 e 100.
```
