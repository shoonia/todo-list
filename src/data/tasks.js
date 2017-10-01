const initialState = {
    tasks: [{ id: 0, text: 'Hi and welcom :)', done: true }],
    newTask: ''
};

export default function getTasks () {
    const store = localStorage.getItem('tasks');
    if (store !== null) {
        try {
            return JSON.parse( store );
        } catch (e) { /* ¯\_(°╭╮°)_/¯ */ }
    }
    return initialState;
}
