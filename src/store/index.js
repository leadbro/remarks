import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    list: [
      {
        id: 0,
        text: "Сварить суп",
        isDone: false,
        tasks: [
          {
            id: 0,
            text: "Овощи (лук, морковь)",
            isDone: false,
            order: 1
          },
          {
            id: 1,
            text: "Курица",
            isDone: true,
            order: 0
          }
        ]
      },
      {
        id: 1,
        text: "Сделать тестовое",
        isDone: true,
        tasks: []
      },
      {
        id: 3,
        text: "Помыть посуду",
        isDone: false,
        tasks: [
          {
            id: 0,
            text: "Лук",
            isDone: false,
            order: 1
          },
          {
            id: 1,
            text: "Курица",
            isDone: true,
            order: 0
          }
        ]
      }
    ]
  },
  getters: {
    getList(s) {
      return s.list;
    }
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
