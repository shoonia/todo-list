<template lang="pug">

  div
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
        div.input-group-btn
          button.btn.btn-dark
            | Add

    div(v-for="task in tasks").list-group
      item-for-task(
        :task="task",
        :edit="editTask",
        :makeChange="makeTask", 
        :saveChange="saveTask",
        :remove="removeTask"
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
      },

      removeTask (item) {
        this.tasks = this.tasks.filter( task => task.id !== item.id );
      }
    }
  });

  export default TodoList;
</script>
