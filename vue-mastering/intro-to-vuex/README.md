Intro Vuex

Administrar el estado en una aplicación llena de componentes puede ser difícil.
Vuex es el patrón y la biblioteca de administración de estado de Vue.

Cuando hablamos de estado, nos referimos a los datos de los que dependen y procesan sus componentes.

Sin Vuex, a medida que su aplicación crece, cada componente de Vue podría tener su propia versión de estado.

A Single Source of Truth : Esto es lo que proporciona Vuex, y cada componente tiene acceso directo a este Estado global.
Donde el etado es reactivo

Vue store tiene:
state (reactive)
actions, pueden actualizar en el state
getters, pueden acceder a state

La diferencia es que el store tiene:
mutations are used to commit and track state changes (inspector vue) (mutations se en tools )
    action, con mutations y actualiza el state

las acciones, llaman a la mutacion y luego al state

Vuex es un patrón de gestión de estado + biblioteca para aplicaciones Vue.js. Sirve como una tienda centralizada para todos los componentes de una aplicación, con reglas que aseguran que el estado solo pueda mutarse de manera predecible. También se integra con la extensión de devtools oficial de Vue para proporcionar funciones avanzadas como la depuración de viaje en el tiempo de configuración cero y la exportación / importación de instantáneas de estado.

npm install
npm install -g json-server
npm run serve

State + Getters - accesing state - Getter for derived state, - Mapping to computer