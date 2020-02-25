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


## Contro de Flujo Directivas

Permite renderizar contenido de forma condicional.

``` html
    <span v-if="changePercent > 0"> 👍 </span>
    <span v-else-if="changePercent < 0"> 👎</span>
    <span v-else> 🤞 </span>

    <span v-show="changePercent > 0"> 👍 </span>
    <span v-show="changePercent < 0"> 👎</span>
    <span v-show="changePercent === 0"> 🤞</span>
```

``` js
var app = new Vue({
  el: '#app',
    data: {
      changePercent:10
  }
})
```
v-if, si no cumple la condicion, remueve el elemento del DOM, 
Si es algo fijo y no cambiara a lo largo del tiempo usar v-if

v-show, si no cumple condicion renderiza en display:none
Si el elemento cambia constantemente usar v-show


## Renderizado de listas

Directiva **v-for**: permite interactuar con listas de arreglos.

La propiedad key permite identificar a cada elemento, si la lista se reordene
o tenga actualizaciones, se ordene.

Podemos usar los ìndices (p, i), donde p son los valores e i, el indice

En un v-for se puede usar con array y array de objetos


``` html
  <ul>
      <li v-for="(p, i) in prices" v-bind:key="p">
            {{ i }} - {{ p }}
      </li>
  </ul> 

  <ul>
      <li v-for="(p, i) in priceWithDays" v-bind:key="day">
          {{ i }} - {{ p.day }} - {{ p.value }}
      </li>
  </ul>
```

``` js
var app = new Vue({
      el: '#app',
      data: {
        prices: [8400,7900,8200,9000,9400,1000,2000],
      }
    })
```

## Manejo de eventos
Eventos: click, mouseover

Methods: Objeto de la instancia de vue donde se puede deifnir funciones, que se pueden utilizar en diferetnes contextos, principalmente para atacharse a eventos que puede ser disparados por la vista. 

v-on: directiva que sirve para escuchar eventos del DOM, tales como onclick, onmouseover, mouseout, para ejecutar alguna función.

``` html
  <span v-on:click="toggleShowPrices"> ver precios {{ showPrices ? '🙉' : '🙈'}} </span>
```

``` js
    var app = new Vue({
      el: '#app',
      data: {
        showPrices: false
      },
      methods: {
          toggleShowPrices(){
              this.showPrices = !this.showPrices
          }
      }
    })
```


## Clases en tiempo real

Con la directiva **v-bind**, se puede cambiar clases en tiempor real, segùn condicion.
Se puede aplicar el atributo class con v-bind a travez de objetos

v-bind usabamos para modificar los atributos de html, link, src, alt, pero en caso de las clases podemos usar una ternari, un string u objeto


``` html
<h1 v-bind:class="changePercent > 0 ? 'green' : 'red' ">{{ name }}
</h1>
```

``` js
var app = new Vue({
  el: '#app',
    data: {
      name: 'Bitcoin',
      changePercent:10
  }
})
```


``` html
<ul v-show=showPrices>
    <li class="uppercase"
        v-bind:class="{ orange: p.value == price, red: p.value < price, green: p.value > price  }"
        v-for="(p, i) in priceWithDays" 
        v-bind:key="p.day">
        {{ i }} - {{ p.day }} - {{ p.value }}
    </li>
</ul>
```

``` js
var app = new Vue({
  el: '#app',
    data: {
      name: 'Bitcoin',
      changePercent:10,
      price: 8400,
  }
})
```

## Estilos en tiempo real

De igual forma que usamos  **v-bind** con class, se puede aplicar estilos en el html.

``` html
 <div id="app" v-bind:style="{ background: '#' + color }">
   <img v-bind:src="img" v-bind:alt="name" width="100"> 
    <h1 v-bind:class="changePercent > 0 ? 'green' : 'red' ">{{ name }}
      <span v-on:click="toggleShowPrices">  {{ showPrices ? '🙉' : '🙈'}} </span>
    </h1>
 </div>

```

``` js
var app = new Vue({
  el: '#app',
    data: {
      name: 'Bitcoin',
      color: 'f4f4f4'
    },
    methods: {
        toggleShowPrices(){
            this.showPrices = !this.showPrices
            this.color = this.color.split('').reverse().join('')
        }
    }
})
```

Para interactuar con los valores en data, utilizamos this.nombre de variable
