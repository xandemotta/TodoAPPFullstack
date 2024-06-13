<template>
  <v-container>
    <v-row>
      <v-col>
        <v-btn @click="$router.push('/task')">Create Task</v-btn>
        <v-list>
          <v-list-item v-for="task in tasks" :key="task.id">
            <v-list-item-content>
              <v-list-item-title>{{ task.title }}</v-list-item-title>
              <v-list-item-subtitle>{{
                task.description
              }}</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn
                icon
                @click="
                  $router.push({ name: 'TaskForm', params: { id: task.id } })
                "
              >
                <v-icon>edit</v-icon>
              </v-btn>
              <v-btn icon @click="deleteTask(task.id)">
                <v-icon>delete</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState(["tasks"]),
  },
  methods: {
    ...mapActions(["fetchTasks", "deleteTask"]),
  },
  created() {
    this.fetchTasks();
  },
};
</script>
