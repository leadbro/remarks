import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    list: [
      {
        id: 0,
        text: "Сварить суп",
        isDone: false
      }
    ]
  },
  mutations: {
    updateList(s, n) {
      s.list = n;
    },
    addTask(s, p) {
      s.list = {
        ...s.list,
        p
      };
    },
    removeTask() {},
    updateTask() {}
  },
  actions: {},
  modules: {}
});
