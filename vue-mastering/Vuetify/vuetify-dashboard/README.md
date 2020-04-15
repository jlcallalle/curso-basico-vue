# vuetify dashboard

## Project setup
Install Proyect CLI
```
vue create vuetify-dashboard
```

## Install Vuetify
```
vue add vuetify
```
Se añaden cambios al cli automaticamente, las etiquetas comienzan con 'v-'

Módulo Login:
```html
 <v-app>
    <v-card width="400" class="mx-auto mt-5">
      <v-card-title>
        <h1 class="display-1">Login</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field 
            label="Username"
            prepend-icon="mdi-account-circle"/>
          <v-text-field 
            :type="showPassword ? 'text ': 'password'"   
            label="Password"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"/>
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="success">Register</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="info">Login</v-btn>
      </v-card-actions>
    </v-card>
  </v-app>
```

```js
export default {
  name: 'App',
  data: () => ({
    showPassword: false
  }),
};
```

## Componentes 1 - Materia Desgin
NavBar (AppBar)
```html
<v-app-bar app color="primary" dark>
    <v-toolbar-title>Wuetify Dashboard</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text rounded>Home</v-btn>
    <v-btn text rounded>Login</v-btn>
</v-app-bar>
```

Contenedor (v-content) , se separa del header, footer y dentro va contenido 
```html
<v-content>
</v-content>
```


Footer (v-footer)
```html
<v-footer
    color="primary lighten-1"
    padless
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        text
        rounded
        class="my-2"
      >
        {{ link }}
      </v-btn>
      <v-col
        class="primary lighten-2 py-4 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
    </v-row>
  </v-footer>
```

```js
export default {
  name: 'App',
   data: () => ({
    showPassword: false,
    links: [
        'Home',
        'About Us',
        'Team',
        'Services',
        'Blog',
        'Contact Us',
      ],
  }),
};
```

API Section
contiene propiedades y slots
See UI Componentes [Material Design](https://vuetifyjs.com/en/getting-started/quick-start/).