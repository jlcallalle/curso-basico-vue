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


## Propiedades Computadas y Watchers

Las Propiedades computadas son aquillas pro que se generean a partir de otras propiedades, permite generar un  valor nuevo. 

La ueva propiedad se modifica, cada vez que se cambia una propiedad de las asignadas.

Propiedades que se calculan en tiempo real en base a los valores de otras propiedades


``` html
  <div id="app">
    <img v-bind:src="img" v-bind:alt="name" width="100"> 
    <h1 > {{ title }} </h1>
    <h2 > {{ reversedMessage }} </h2>
    <span v-on:click="toggleShowPrices"> {{ showPrices ? '🙉' : '🙈'}} </span>
  </div>
```

``` js
var app = new Vue({
      el: '#app',
      data: {
        name: 'Bitcoin',
        symbol: 'BTC',
        img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
        changePercent: 2,
        color: 'f4f4f4',
        showPrices: false
      },
      computed: {
          title () {
              return `${this.name} - ${this.symbol}`
          },
          reversedMessage: function () {
            return this.name.split('').reverse().join('')
          }
      },
      watch: {
          showPrices (newVal, oldVal) {
              console.log(newVal, oldVal);
          }
      },
      methods: {
          toggleShowPrices(){
              this.showPrices = !this.showPrices
              this.color = this.color.split('').reverse().join('')
          }
      }
    })
```

La propiedad title() se cambiara, cada vez que se cambie alguna propiedad de name o symbol
De igual forma como method, **this** es la manera que utilizamos para acceder a las propiedades de la instancia de vue.

Una propiedad computada, se utiliza como una propiedad normal **{{ title }}**

<br>


**Los watchers**, tienen comportamiento similar, en vez de ser funciones que devuelven un valor, son funciones que ejecutan un codigo.

El nombre de la funcion watcher debe ser el mismo de la propiedad data.
El watcher recibe 2 valores, valor nuevo y valor viejo


##  v-model Two way Databinding

Directiva v-model, permite linkear las cosas que puede escribir el usuario en un input con las propiedades definidas en data (two day databinding)


``` html
<div id="app">
  <input type="number" v-model="value"> <br>
  <span> data simple: {{ value }}</span> <br>
  <span> data doble {{ converteValue }}</span>
</div>
```

``` js
var app = new Vue({
    el: '#app',
    data: {
      name: 'Bitcoin',
      value: 0,
      price:2
    },
    computed: {
        converteValue() {
          if(!this.value) {
            return 0
          }
          return this.value * this.price

        }
    }
  })
```