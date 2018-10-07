<template lang="pug">
  main.container
    div.row.justify-content-center
      todo-list
</template>

<script>
import TodoList from './components/TodoList';

export default {
  name: 'app',
  components: {
    TodoList,
  },
};
</script>

<style>
@import url('./styles/links.css');
@import url('./fonts/style.css');

::selection {
  color: #F8F9FA;
  background-color: #212529;
}

body {
  background-color: #F8F9FA; 
}
</style>
