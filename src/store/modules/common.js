const ENDPOINT = "https://jsonplaceholder.typicode.com/todos";

const state = {
  todos: [],
};

const getters = {
  allTodos: (state) => state.todos,
};

const actions = {
  fetchTodos: async ({ commit }, limit = 5) => {
    try {
      const data = await fetch(`${ENDPOINT}?_limit=${limit}`);

      commit("setTodos", await data.json());
    } catch (e) {
      console.error(e);
      commit("setTodos", []);
    }
  },
  deleteTodo: async ({ commit }, id) => {
    try {
      commit("deleteTodo", id);

      await fetch(`${ENDPOINT}/${id}`, { method: "DELETE" });
    } catch (e) {
      console.error(e);
    }
  },
  addTodo: async ({ commit }, title) => {
    const todo = { title, completed: false };

    try {
      const data = await fetch(ENDPOINT, {
        body: JSON.stringify(todo),
        method: "POST",
      });

      const { id } = await data.json();

      commit("addTodo", { id, ...todo });
    } catch (e) {
      console.error(e);
    }
  },
  updateTodo: async ({ commit }, updTodo) => {
    try {
      commit("updateTodo", updTodo);

      await fetch(`${ENDPOINT}/${updTodo.id}`, {
        body: JSON.stringify(updTodo),
        method: "PUT",
      });
    } catch (e) {
      console.error(e);
    }
  },
};

const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  deleteTodo: (state, id) =>
    (state.todos = state.todos.filter((t) => t.id !== id)),
  addTodo: (state, todo) => state.todos.unshift(todo),
  updateTodo: (state, todo) => {
    const idx = state.todos.findIndex((x) => x.id === todo.id);
    if (idx !== -1) state.todos[idx] = todo;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};