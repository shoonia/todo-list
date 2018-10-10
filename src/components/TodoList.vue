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
        :saveChange="writeChange",
        :remove="removeTask"
      )
    div(v-else).text-center.text-secondary.lead
      | You don't have any tasks

</template>

<script>
import TaskItem from './TaskItem.vue';

const defaultTasks = [{ id: 0, text: 'Hi and welcom :)', done: true }];

export default {
  name: 'todo-list',
  components: {
    TaskItem,
  },
  data() {
    return {
      tasks: [],
      newTask: '',
      editTask: null,
    };
  },
  mounted() {
    this.tasks = this.$ls.get('tasks', defaultTasks, Array);
    this.newTask = this.$ls.get('newTask', '', String);
  },
  methods: {
    addTask() {
      if (this.newTask.trim()) {
        this.tasks.unshift({
          id: Date.now(),
          text: this.newTask,
          done: false,
        });
        this.newTask = '';
        this.writeChange();
      }
    },
    changeTask(item) {
      this.editTask = item;
    },
    writeChange() {
      this.editTask = null;
      this.$ls.set('tasks', JSON.stringify(this.tasks));
    },
    removeTask(item) {
      this.tasks.splice(this.tasks.indexOf(item), 1);
      this.writeChange();
    },
  },
  watch: {
    newTask(txt) {
      this.$ls.set('newTask', txt);
    }
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .3s, transform .3s;
  transform-origin: center;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: scale(.5);
}

.fx-content {
  box-sizing: border-box;
  min-height: 300px;
  padding-bottom: 50px;
}
</style>
