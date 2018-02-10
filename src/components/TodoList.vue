<template lang="pug">

div.col-md-10.col-12
    h1.display-4
        | Todo List
    form(@submit.prevent="addTask").mb-3
        div.input-group
            input(
                v-model="newTask",
                type="text",
                placeholder="What you should do...",
                autofocus
                class="form-control"
            )
            div.input-group-append
                button.btn.btn-dark
                    | Add
    div.fx-content
        transition-group(
            v-if="tasks.length > 0"
            name="fade",
            tag="div",
            class="list-group"
        )
            task-item(
                v-for="task in tasks",
                :key="task.id",
                :task="task",
                :editor="editTask",
                :setChange="changeTask",
                :saveChange="saveTask",
                :remove="removeTask"
            )
        div(v-else).text-center.text-secondary.lead
            | You don't have any tasks

</template>
<script>

import TaskItem from './TaskItem.vue';
import getTasks from '../data/tasks';
import '../styles/fade.css';
/* 
 * for "purgecss-webpack-plugin":
 * class="fade-enter-active fade-leave-active fade-enter fade-leave-to"
 */

const TodoList = Vue.component( 'todo-list', {
    components: {
        TaskItem
    },

    data () {
        const store = getTasks();
        return {
            tasks: Array.isArray( store.tasks ) ? store.tasks : [],
            newTask: String( store.newTask ),
            editTask: null
        }
    },

    methods: {
        addTask () {
            if (this.newTask.trim()) {
                this.tasks.unshift({
                    id: Date.now(),
                    text: this.newTask,
                    done: false
                });
                this.newTask = '';
            }
        },

        changeTask (item) {
            this.editTask = item;
        },

        saveTask () {
            this.editTask = null;
        },

        removeTask (item) {
            this.tasks.splice( this.tasks.indexOf(item), 1 );
        }
    }
});

export default TodoList;

</script>
