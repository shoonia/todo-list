<template lang="pug">

  div
    form.mb-2
      div.input-group
        input.form-control
        div.input-group-btn
          button.btn.btn-outline-dark Add

    div(v-for="t in tasks").list-group
      item-for-task(:id="t.id", :text="t.text", :done="t.done")

</template>

<script>
  import ItemForTask from './ItemForTask.vue';

  const TodoList = Vue.component( 'to-do-list', {
    components: {
      ItemForTask
    },

    data () {
      return {
        tasks: [
          { id: 0, text: 'test', done: false },
          { id: 1, text: 'next', done: false }
        ]
      }
    }
  });

  export default TodoList;
</script>
