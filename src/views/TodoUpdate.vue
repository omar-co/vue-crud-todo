<template>
    <div v-if="selectedTodo">
        <todo-form :todo="selectedTodo" @processTodo="editTodo" todo-submit="Guardar Todo"></todo-form>
    </div>
</template>

<script>
    import { mapActions, mapState} from 'vuex'
    import TodoForm from "../components/TodoForm";
    export default {
        components: {
            TodoForm
        },
        computed:{
            ...mapState('todos', ['selectedTodo'])
        },
        methods: {
            ...mapActions('todos', ['updateTodo']),
            editTodo (todo) {
                this.updateTodo(todo).then(() => {
                    this.$router.push('/todos')
                })
            }
        }
    }
</script>