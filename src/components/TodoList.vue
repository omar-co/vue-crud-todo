<template>
    <div v-if="todos.length">
        <todo-item v-for="todo in todos" :key="todo.id" :todo="todo"></todo-item>
    </div>
    <b-alert v-else show variant="info">No hay Todos</b-alert>
</template>

<script>
    import TodoItem from "./TodoItem";
    export default {
        name: "TodoList",
        props: {
            todos: {
                type: Array,
                required: true
            }
        },
        components: {
            TodoItem
        }
    }
</script>
