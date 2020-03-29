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

Directiva v-model, permite linkear lo que escribe un usario a travez de las prpiedades de data.

``` html
  <div id="app">
    <input type="number" v-model="value">
    <span> {{ value }}</span>
    <span> {{ converteValue }}</span>
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
        value: 0,
        color: 'f4f4f4',
        price: 8400,
        showPrices: false
      },
      computed: {
          title () {
              return `${this.name} - ${this.symbol}`
          },
          converteValue () {
              if(!this.value){
                  return 0
              }
              return this.value / this.price
          },
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


##  Crear Componentes Custom

La funcion Vue component permite registrar y crear componentes nuevos,
se puede disponer de data, method, computer, etc, en vue componente se crea los template dentro de un string literal-

Cuando se crea un vue.component, permite crear el tag con el mimo nombre, o tambien podemos usar la sinxataxis minuscula y con guiones.

El componente padre enviar informacion al componente hijo para que lo utilice


``` html
 <div id="app">
      <coin-detail 
          v-bind:img="img"
          v-bind:name="name"
          v-bind:price="price"
          v-bind:title="title"
          v-bind:changePercent='changePercent' ></coin-detail>

  </div>
```

``` js

    Vue.component('CoinDetail', {
        props: ['title','changePercent','img','name','price','priceWithDays'],
        data () {
            return {
                showPrices: false,
                value: 0,
            }
        },
        methods: {
            toggleShowPrices() {
                this.showPrices = !this.showPrices
            }
        },
        computed: {
                converteValue () {
                    if(!this.value){  //checkea si el precio tiene un valor, sino retorna 0
                        return 0
                    }
                    return this.value * this.price
                }
            },
        template: `
                <div>
                    <img 
                    v-on:mouseover="toggleShowPrices"   
                    v-on:mouseout="toggleShowPrices" 
                    v-bind:src="img" v-bind:alt="name" width="100"
                    > 

                    <h1 v-bind:class="changePercent > 0 ? 'green' : 'red' ">{{ title }} 
                        <span v-if="changePercent > 0"> 👍</span>
                        <span v-else-if="changePercent < 0"> 👎</span>
                        <span v-else> 🤞 </span>
                        <span v-on:click="toggleShowPrices"> {{ showPrices ? '🙉' : '🙈'}} </span>
                    </h1>

                    <input type="number" v-model="value">
                    <span> {{ converteValue }}</span>

                    <ul>
                        <li v-for="(p, i) in priceWithDays" v-bind:key="day">
                            {{ i }} - {{ p.day }} - {{ p.value }}
                        </li>
                    </ul> 
                    {{ priceWithDays }}

                </div>
            `,
    })
    new Vue ({
        el: '#app',
        data () {
            return {
                title: 'Vue Components ',
                name: 'Bitcoin ',
                symbol: 'BTC',
                img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
                changePercent: -10,
                value: 0,
                color: 'f4f4f4',
                price: 5,
                priceWithDays: [
                    { day: 'lunes', value: 8400 },
                    { day: 'martes', value: 8100 },
                    { day: 'miercoles', value: 8300 },
                    { day: 'jueves', value: 8210 },
                    { day: 'viernes', value: 7400 },
                    { day: 'sábado', value: 9400 },
                    { day: 'domingo', value: 9400 },
                ],
            }
        },
        
    })
```



## Comunicación entre Componentes: propiedades
La comunicacion de padre hace hijos es atravez de propiedades
props: se define las propiedades donde el componente padre setee al componente hijo
el componente hijo, no puede modificar la propiedad padre

``` html
 <div id="app">
      <h1>{{ title }}</h1>
      <counter></counter>
  </div>
```

``` js

    Vue.component('counter', {
        data () {
            return {
                counter: 0
            }
        },
        methods: {
            increment(){
                this.counter += 1
            }
        },
        template: `
                <div>
                    <button v-on:click="increment"> Click me! </button>
                    <span>  {{ counter }} </span>
                </div>
            `,
    })

    new Vue ({
        el: '#app',
        data () {
            return {
                title: 'Hola Vue!',
            }
        },

    })
```


## Comunicación entre Componentes: Eventos

La comunicacion de hijo a padres es atravez de eventos.
v:bind modificar en tiempo real, atributo dinamico
v-on evento para que el hijo envia data al padre



## Slots
Permite que el contenido padre puede usar compoentes del hijo

En el componente hijo se define: 

``` html
<slot name="texto"></slot>
<slot name="enlace"></slot>
```

en el padre se define: 


``` html
<template v-slot:texto>
    <p>Esto es un texto ipsum dolor sit amet consectetur adipisicing elit. Officiis dicta soluta perspiciatis ab ut, nihil harum molestiae, commodi maxime explicabo inventore placeat possimus repudiandae voluptatem cum numquam necessitatibus excepturi quibusdam!</p>
</template>

<template v-slot:enlace>
    <a href="#">Es un Link</a>
</template>

```

tag template: renderiza contenido sin necesidad de incluir un tag, cuando se usa template se usa direvitva v-slot:text

** Se puede distribuir contenido desde un componente padre a un componente hijo


## Ciclo de vida y Hooks
Para terminar con el sistema de compoenentes se tiene que ver el ciclo de vida de estos componentes
Hooks son diferentes eventos que podemos representar en nuestro componente a travez de funciones


``` js
  created () {
      console.log( 'created ...')
  },
  mounted() {
      console.log( 'mounted ...')
  },
```

created se recomienda para poder obtener informacion atravez de un api Rest
Mounted, tengo disponible el DOM, puedo acceder al domn, elemento html que no tengo en el created

## Ciclo de vida y Hooks
Vue component: crear contenido html y lo agrupa
El Componente padre puede enviar data al hijo con propiedades
El hijo envia al padre mediante eventos
slot, ipermite amppliear la distribución de contenido

Práctica:


## CLI - Ambiente de desarrollo

Identificar:
node --version : v10.15.2
npm --version: 6.13.4

https://github.com/vuejs/vetur
https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
https://prettier.io/
https://github.com/vuejs/vue-devtools

Instalar CLI:
npm install -g @vue/cli   //Instala de forma global, @ significa que pertenece a la organizacion
vue --version
vue create platzi-exchange  | vue create --help



``` js
//Instala de forma global, @ significa que pertenece a la organizacion
npm install -g @vue/cli   
vue --version
vue create --help

//Creacion de proyecto
vue create platzi-exchange

```

Option:
manual
 - babel
 - Linter / formater
- ESLINTs Pretier
- Lint to save


``` js
 cd platzi-exchange
 $ npm run serve
```

## CLI - Estructura 

src
 main.js:  realiza el import de vue
import Vue from "vue" de npm

App.vue
  se ve la part tempalte, script y style
  export default es parte de los modulos de ecmascript



``` js
npm run lint //permite formatear codigo 
npm run build  //ambiente producción, genera carpeta dist

npm i -g serve //permite generar un servidor local
serve -s dist  //correr servidor web local de la carpeta list
vue ui // genera app local amigable para gestionar proyectos
```


## CLI - Agregar Framework Tailwind css 

Permite agregar plugin al proyecto: vue add

``` js
 vue add @ianaya89/tailwind
```

en main.js, importamos css

import '@/assets/css/tailwind.css'
