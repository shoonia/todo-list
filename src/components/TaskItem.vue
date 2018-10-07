<template lang="pug">

div(
  :class="{'list-group-item-success': task.done }",
  class="list-group-item mb-1"
)
  span(v-if="editor !== task")
    span(@click="task.done = !task.done")
      span(:class="{'icon-checked': task.done, 'icon-unchecked': !task.done }").icon
      span.fx-wrap {{ ' ' + task.text }}
    span.close
      span(v-if="task.done", @click="remove(task)", role="button").icon.icon-bin.text-danger
      span(v-else, @click="setChange(task)", role="button").icon.icon-cog

  span(v-else).input-group
    input(
      v-autofocus,
      v-model="task.text",
      @keyup.enter="saveChange(task)",
      type="text",
      class="form-control"
    )
    span.input-group-append
      button(
        @click="remove(task)",
        type="button",
        title="remove?",
        class="btn btn-danger"
      )
        span.icon.icon-bin
      button(
        @click="setChange",
        type="button",
        title="save",
        class="btn btn-success"
      )
        span.icon.icon-checkmark

</template>

<script>
export default {
  name: 'task-item',
  props: [ 'task', 'editor', 'setChange', 'saveChange', 'remove' ],
};
</script>

<style>
.fx-wrap {
  overflow-wrap: break-word;
}
</style>
