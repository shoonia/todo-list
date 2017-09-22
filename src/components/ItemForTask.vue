<template lang="pug">

  div(
    :class="{'list-group-item-success': task.done }",
    :key="task.id"
    class="list-group-item mb-1"
  )
    span(v-if="edit !== task")
      span {{ task.text }}
      span(@click="makeChange(task)").close
        | edit

    span(v-else).input-group
      input(
        v-model="task.text",
        @keyup.enter="saveChange(task)",
        type="text",
        class="form-control"
      )
      span.input-group-btn
        button(
          @click.prevent="saveChange",
          type="button",
          title="save",
          class="btn btn-success"
        )
          | save

</template>

<script>
  const ItemForTask = Vue.component( 'item-for-task', {
    props: [ 'task', 'edit', 'makeChange', 'saveChange' ]
  });

  export default ItemForTask;
</script>
