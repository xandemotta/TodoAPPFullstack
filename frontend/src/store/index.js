import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],
  },
  mutations: {
    setTasks(state, tasks) {
      state.tasks = tasks;
    },
  },
  actions: {
    fetchTasks({ commit }) {
      axios.get("/api/tasks").then((response) => {
        commit("setTasks", response.data);
      });
    },
    createTask({ dispatch }, task) {
      axios.post("/api/tasks", task).then(() => {
        dispatch("fetchTasks");
      });
    },
    updateTask({ dispatch }, task) {
      axios.put(`/api/tasks/${task.id}`, task).then(() => {
        dispatch("fetchTasks");
      });
    },
    deleteTask({ dispatch }, taskId) {
      axios.delete(`/api/tasks/${taskId}`).then(() => {
        dispatch("fetchTasks");
      });
    },
  },
});
