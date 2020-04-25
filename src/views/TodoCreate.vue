<template>
    <div>
        <todo-form :todo="todo" @processTodo="createTodo" todo-submit="Crear Todo"></todo-form>
    </div>
</template>

<script>
    import { mapActions} from 'vuex'
    import TodoForm from "../components/TodoForm";
    export default {
        components: {
            TodoForm
        },
        data() {
            return {
                todo: {
                    id: null,
                    text: '',
                    done: false
                }
            }
        },
        methods: {
            ...mapActions('todos', ['addTodo']),
            createTodo (todo) {
                this.addTodo(todo).then(() => {
                    this.$router.push('/todos')
                })
            }
        }
    }
</script>