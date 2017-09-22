<template lang="pug">

  div(:class="{'list-group-item-success': done }", :key="id").list-group-item.mb-1
    span {{ text }}

</template>

<script>
  const ItemForTask = Vue.component( 'item-for-task', {
    props: [ 'id', 'text', 'done' ]
  });

  export default ItemForTask;
</script>
