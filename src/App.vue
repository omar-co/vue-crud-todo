<template>
  <div id="app">
    <b-container>
      <b-nav tabs>
        <b-nav-item exact to="/todos">Listado de Todos</b-nav-item>
        <b-nav-item exact to="/todos/create">Nuevo Todo</b-nav-item>
        <b-nav-item exact to="/todos/update">Modificar Todo</b-nav-item>
      </b-nav>
    </b-container>
    <router-view/>
  </div>
</template>
