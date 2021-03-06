import Vue from 'vue'

export async function fetchTodos ({commit}) {
    try {
        const {data} = await Vue.axios({
            url: '/todos'
        })
       commit('setTodos', data)
    } catch (e) {
        commit('todosError', e.message)
    } finally {
        console.log('peticion get todos finalizada')
    }
}

export async function addTodo({commit}, todo) {
    try {
        await Vue.axios({
            method: 'POST',
            url: '/todos',
            data: {
                id: Date.now(),
                text: todo.text,
                done: false
            }
        })
    } catch (e) {
        commit('todosError', e.message, {root:true})
    } finally {
        console.log('peticion un solo get todos finalizada')
    }
}

export async function updateTodo({commit}, todo) {
    try {
        await Vue.axios({
            method: 'PUT',
            url: `/todos/${todo.id}`,
            data: {
                id: todo.id,
                text: todo.text,
                done: todo.done
            }
        })
    } catch (e) {
        commit('todosError', e.message, {root:true})
    } finally {
        console.log('peticion para actualizar un todo finalizada')
    }
}

export async function updateTodoStatus({commit, dispatch}, todo) {
    try {
        await Vue.axios({
            method: 'PUT',
            url: `/todos/${todo.id}`,
            data: {
                id: todo.id,
                text: todo.text,
                done: ! todo.done
            }
        })
        dispatch('fetchTodos')
    } catch (e) {
        commit('todosError', e.message, {root:true})
    } finally {
        console.log('peticion para actualizar el estado un todo finalizada')
    }
}

export async function removeTodo({commit, dispatch}, id) {
    try {
        await Vue.axios({
            method: 'DELETE',
            url: `/todos/${id}`,
        })
        dispatch('fetchTodos')
    } catch (e) {
        commit('todosError', e.message, {root:true})
    } finally {
        console.log('peticion para actualizar el estado un todo finalizada')
    }
}