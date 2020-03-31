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