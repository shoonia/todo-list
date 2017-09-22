<template lang="pug">

  div.list-group-item.mb-1 {{ id }} {{ text }} {{ done }}

</template>

<script>
  const ItemForTask = Vue.component( 'item-for-task', {
    props: [ 'id', 'text', 'done' ]
  });

  export default ItemForTask;
</script>
