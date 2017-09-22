<template lang="pug">

  -const placeholder = "What you should do...";

  div
    form(@submit.prevent="addTask").mb-2
      div.input-group
        input(v-model="newTask", placeholder=placeholder, autofocus).form-control
        div.input-group-btn
          button.btn.btn-dark Add

    div(v-for="t in tasks").list-group
      item-for-task(:id="t.id", :text="t.text", :done="t.done")

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
        newTask: ''
      }
    },

    methods: {
      addTask () {
        if (this.newTask.trim()) {

          this.tasks = this.tasks.concat({
            id: Date.now(),
            text: this.newTask,
            done: false
          });

          this.newTask = '';
        }
      }
    }
  });

  export default TodoList;
</script>
