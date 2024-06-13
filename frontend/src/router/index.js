import Vue from "vue";
import Router from "vue-router";
import TaskList from "@/components/TaskList.vue";
import TaskForm from "@/components/TaskForm.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "TaskList",
      component: TaskList,
    },
    {
      path: "/task",
      name: "TaskForm",
      component: TaskForm,
    },
    {
      path: "/task/:id",
      name: "TaskForm",
      component: TaskForm,
    },
  ],
});
