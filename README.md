# Aprender Vue

## Expresiones y Propiedades
Una expresión representa el valor de las propiedades de data, se puede usar código js, sumar números, expresiones boolenas, funciones.

``` html
<h1>{{ title }}</h1>
<p>{{ 1 + 1 + 1 }}</p>
<p>{{ true || false }}</p>
<p>{{ true ? true : false }}</p>
<p>{{ 'string'.toUpperCase() }}</p>
<p>{{ JSON.stringify({ name: 'nacho'}) }}</p>

```

``` js
var app = new Vue({
  el: '#app',
    data: {
      title: 'Hola Vue! 2020'
  }
})
```

Si deseo inspeccionar en consola usar:

``` js
app.title
```
## Atributos Dinamicos
Permite que los atributos html tengan valores dinámicos:  href, title, alt, src.

Directivas permite manipular el dom  de forma declarativa: **v-bind** y  **v-bind** , son directiva especial que se aplica en atributos html, para ello se pone ':'


``` html
<img v-bind:src="img" v-bind:alt="name">
```

``` js
var app = new Vue({
  el: '#app',
    data: {
      name: 'Bitcoin',
      img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png'
  }
})
```