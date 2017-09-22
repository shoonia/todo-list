<template lang="pug">

  div
    form(@submit.prevent="addTask").mb-3
      div.input-group
        input(
          v-model="newTask",
          type="text",
          placeholder="What you should do...",
          autofocus
          class="form-control"
        )
        div.input-group-btn
          button.btn.btn-dark
            | Add

    div(v-for="task in tasks").list-group
      item-for-task(
        :task="task",
        :edit="editTask",
        :makeChange="makeTask", 
        :saveChange="saveTask"
      )

</template>

<script>
  import ItemForTask from './ItemForTask.vue';
  import getTasks from '../data/tasks';

  const TodoList = Vue.component( 'to-do-list', {
    components: {
      ItemForTask
    },

    data () {
      return {
        tasks: getTasks(),
        newTask: '',
        editTask: null
      }
    },

    methods: {
      addTask () {
        if (this.newTask.trim()) {

          this.tasks.push({
            id: Date.now(),
            text: this.newTask,
            done: false
          });

          this.newTask = '';
        }
      },

      makeTask (item) {
        this.editTask = item;
      },

      saveTask () {
        this.editTask = null;
      }
    }
  });

  export default TodoList;
</script>
