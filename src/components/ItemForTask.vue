<template lang="pug">

  div(
    :class="{'list-group-item-success': task.done }",
    :key="task.id"
    class="list-group-item mb-1"
  )
    span(v-if="edit !== task", @click="task.done = !task.done")
      span {{ task.text }}
      span.close
        span(v-if="task.done", @click="remove(task)")
          | remove
        span(v-else, @click="makeChange(task)")
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
          @click="saveChange",
          type="button",
          title="save",
          class="btn btn-success"
        )
          | save
        button(
          @click="remove(task)",
          type="button",
          title="remove?",
          class="btn btn-danger"
        )
          | remove

</template>

<script>
  const ItemForTask = Vue.component( 'item-for-task', {
    props: [ 'task', 'edit', 'makeChange', 'saveChange', 'remove' ]
  });

  export default ItemForTask;
</script>
