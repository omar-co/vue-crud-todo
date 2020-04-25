<template>
    <b-form @submit.prevent="$emit('processTodo', todo)">
        <b-form-group id="todo" label="Todo" label-for="todo">
            <b-form-input
                    autocomplete="off"
                    id="todo"
                    v-model="todo.text"
                    :state="!$v.todo.text.$invalid"
                    @input="$v.todo.$touch"
            ></b-form-input>
            <b-form-invalid-feedback id="todoInfo" v-if="$v.todo.$dirty">
                Este campo es requerido y debe tener una longuitud minima de 4
            </b-form-invalid-feedback>
            <b-button type="submit" variant="primary" :disabled="$v.todo.$invalid">
                {{ todoSubmit }}
            </b-button>
        </b-form-group>
    </b-form>
</template>

<script>
    import {validationMixin} from 'vuelidate'
    import { required, minLength } from 'vuelidate/lib/validators'
    export default {
        name: "TodoForm",
        props: {
            todo: {
                type: Object,
                required: true
            },
            todoSubmit: {
                type: String,
                required: true,
                default: 'Crear Todo'
            }
        },
        mixins: ['validationMixin'],
        validations: {
            todo: {
                text: {
                    required, minLength: minLength(4)
                }
            }
        }
    }
</script>

<style scoped>

</style>