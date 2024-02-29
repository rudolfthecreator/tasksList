/* eslint-disable prettier/prettier */
import { createStore } from "vuex";

export default createStore({
  state: {
    tasks: [],
  },
  getters: {},
  mutations: {
    setTasks(state, newTasks) {
      Array.prototype.push.apply(state.tasks, newTasks);
    },
    pushTasks(state) {
      state.tasks.push({
        id: state.tasks.length > 0 ? state.tasks.at(-1).id + 1 : 0,
        title: "",
        body: "",
        edit: true,
      });
    },
   spliceTask(state, task) {
      state.tasks.splice(state.tasks.indexOf(task), 1);
    },
  },
  actions: {
    checkLocalStorage({ state, commit }) {
      if (state.tasks.length == 0) {
        let localTasks = JSON.parse(window.localStorage.getItem("tasks"));
        if (localTasks) commit("setTasks", localTasks);
      }
    },
    deleteTask({ state, commit }, task){
     commit("spliceTask", task)
     window.localStorage.removeItem("tasks");
     window.localStorage.setItem("tasks", JSON.stringify(state.tasks)); 
    },
    saveTask({ state }, task){
      if (task.title.length > 0 && task.body.length > 0) {
        task.edit = false;
        window.localStorage.removeItem("tasks");
        window.localStorage.setItem("tasks", JSON.stringify(state.tasks));
      }
    }
  },
  modules: {},
});
