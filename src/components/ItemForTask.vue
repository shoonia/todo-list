<template lang="pug">

  div(
    :class="{'list-group-item-success': task.done }",
    :key="task.id"
    class="list-group-item mb-1"
  )
    span(v-if="edit !== task")
      span(@click="task.done = !task.done")
        span(:class="{'icon-checked': task.done, 'icon-unchecked': !task.done }").icon  
        span {{ ' ' + task.text }}
      span.close
        span(v-if="task.done", @click="remove(task)", role="button").icon.icon-bin.text-danger
        span(v-else, @click="makeChange(task)", role="button").icon.icon-cog

    span(v-else).input-group
      input(
        v-model="task.text",
        @keyup.enter="saveChange(task)",
        type="text",
        class="form-control"
      )
      span.input-group-btn
        button(
          @click="remove(task)",
          type="button",
          title="remove?",
          class="btn btn-danger"
        )
          span.icon.icon-bin
        button(
          @click="saveChange",
          type="button",
          title="save",
          class="btn btn-success"
        )
          span.icon.icon-checkmark

</template>

<script>
  const ItemForTask = Vue.component( 'item-for-task', {
    props: [ 'task', 'edit', 'makeChange', 'saveChange', 'remove' ]
  });

  export default ItemForTask;
</script>
