import TodoList from './components/TodoList.vue';

const App = new Vue({
    component: {
        TodoList
    }
});

App.$mount('#app');

window.addEventListener( 'unload', function () {
    localStorage.setItem(
        'tasks',
        JSON.stringify( App.$children[0]._data )
    );
});
