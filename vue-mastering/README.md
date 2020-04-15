# Real World Vue

## Intro to Real World Vue

``` js
npm i -g  @vue/cli
```

``` html
<h1>{{ title }}</h1>
<p>{{ 1 + 1 + 1 }}</p>
<p>{{ true || false }}</p>
<p>{{ true ? true : false }}</p>
<p>{{ 'string'.toUpperCase() }}</p>
<p>{{ JSON.stringify({ name: 'nacho'}) }}</p>

```

## 2.- Vue CLI 3 - Creating our Project
``` js
vue create real-world-vue
```
choose: 
- Babel, router, Vuex, Linter / Formatter
- ESLint + Prettier
- Link on save
- In dedicated config files

## 3.- Optimizing your editor

Componentes Visual Studio Code:
- vuter: contiene vue-snipets 
     'vue', crea estructura
- eslint
- Prettier
- Copy Relative Path: 
     @/components/HelloWord.vue
- Vue VScode snipets
     vif: v-if=""
     von: @click="handler(arg, event)"
     vdata: estructura de data
     vprops:
     vimport
     vbase: estructura
- Theme: 
     FlatUI dark

## 4.- Vue Router Basics

``` js
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/about-us",
    name: "About",
    component: About,
    alias: "/about",
  },    
```

## 5.- Dynamic routing & History Mode
Si deseamos crear router dinamicos usamos:
 
 En router.js
``` js
import User from "../views/User.vue";
   {
    path: "/user/:username",
    name: "user",
    component: User,
  }
```
En User.vue:

$route.params.username: representa el estado actual del router

``` html
<div class="user">
    <h1>This is {{ $route.params.username }} page </h1>
</div>
```
http://localhost:8080/user/jorge

Apps.vue, enlazamos un nombre estatico
``` html
<router-link :to="{ name:'user', params: {username : 'Jorge'} }">Jorge</router-link>
```

Agregando props en router.js, deseamos mejorar el codigo
``` js
{
    path: "/user/:username",
    name: "user",
    component: User,
    props: true  //Agregado
  },
```

User.vue,  con esto permitimos, que en el componente se utilice el username de $router
``` js
export default {
  props: ["username"]
}
```
Por ello refactorizamos solo a : username
``` html
<div class="user">
    <h1>This is {{username }} page </h1>
</div>

```


## 6.- Componentes
- tempalte es el esqueleto
- script es la logica
- estilos

Desde vue-ui
dependencias: instalar: sass-loader

``` js
npm install -D sass-loader sass
npm i node-sass

npm install --save-dev sass-loader node-sass
```
Definiendo estilos;

``` html
<style scoped>
scope, el css solo aplica para este componente, si no es scope representa de forma global
``` 


### Global Components
Si deseamos usar componentes en diferentes secciones de la web
tendrioamos que importar y setear en export el compoenente.

Seria muy tedioso, para ello se puede setear Componentes base:

- BaseIcon.vue
- BaseButton.vue
- BaseInput.vue


Lo importamos en el main.js

``` js
import BaseIcon from '@/components/BaseIcon.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseInput from '@/components/BaseInput.vue'

Vue.component('BaseIcon', BaseIcon)
Vue.component('BaseButton', BaseButton)
Vue.component('BaseInput', BaseInput)
```

Hay una opción mucho mejor y automático.

En main.js, reemplazamos:

``` js
import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const requireComponent = require.context(
  // The relative path of the components folder
  './components',
  // Whether or not to look in subfolders
  false,
  // The regular expression used to match base component filenames
  /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  // Get component config
  const componentConfig = requireComponent(fileName)

  // Get PascalCase name of component
  const componentName = upperFirst(
    camelCase(
      // Gets the file name regardless of folder depth
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  )


  // Register component globally
  Vue.component(
    componentName,
    // Look for the component options on `.default`, which will
    // exist if the component was exported with `export default`,
    // otherwise fall back to module's root.
    componentConfig.default || componentConfig
  )
})
``` 

Instalamos lodash 
``` js
npm i lodash
```

Usamos archivo SVG: feather-sprite.svg en public

``` html
En BaseIcon.vue
<div class="icon-wrapper">
    <svg class="icon" :width="width" :height="height">
      <use v-bind="{'xlink:href':'/feather-sprite.svg#' + name}"></use>
    </svg>
</div>
```
``` js
export default {
  name: 'Icon',
  props: {
    name: String,
    width: {
      type: [Number, String],
      default: 24
    },
    height: {
      type: [Number, String],
      default: 24
    }
  }
}
```

Para usarlo en EventCard.vue, agregamos con el nombre id del sector svg

``` html
 <BaseIcon name="users"/>
```


## API calls with Axios

- Get started with Axios
- Make API Calls
- Component LifeCycle, When to make API calls,
- Creating Services (encampsulate our api en el servicio)

Axios to do:
- GET, POST, PUT, Delete requests
- Add authentication to each request
- Set timeouts if request take too long
- Configurate defaults for everry request
- Intercept request to create middleware
- Handle error and cancel request properly
- Properly serialize and deserialize request & responses


GET REQUEST EXAMPLE

``` js
axios.get('/user?ID=12345')   // Call out to this URL
  .then(function (response) { 
    console.log(response);   // When the response returns,log it to the console
  })
  .catch(function (error) {
    console.log(error);   // log ani error
  })
  .then(function () {
    // always executed
  });
```

Apis can be build with framework like: Express, larael, raisl, django
Apis can be uilt using service like: Firebase, Parse, Graphcoll


Usaremos  Mock como API Server 

``` js
npm install -g json-server
``` 
Muestra: http://localhost:3000/events


Instalamos AXIOS
``` js
$ npm install axios
``` 
``` js
npm outdated // verifica si los paquetes estan actualizados
npm update @vue/cli-plugin-babel  // ejemplo de actualizar algún paquete
npm update // actualiza todos los componentes
```

En EventList.vue


``` js
import axios from 'axios'

export default {
  data() {
    return {
      events: []
    }
  },
   created() {
      axios
        .get('http://localhost:3000/events') 
        .then(response => {
          console.log(response.data,'load data')
          this.events = response.data // <--- set the events data
        })
        .catch(error => {
          console.log('There was an error:', error.response)
        })
    }
}
```
Realizarmos un for, 

``` html
<EventCard v-for="event in events" :key="event.id" :event="event"/>
``` 

La propiedad :event="event", referencia el prop creado en EventCard.

Creamdp un props event de tipo Object

``` js
export default {
  props: {
    event: Object
  }
}
```