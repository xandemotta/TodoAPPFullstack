<template>
  <v-container>
    <v-row>
      <v-col>
        <v-form @submit.prevent="saveTask">
          <v-text-field v-model="task.title" label="Title"></v-text-field>
          <v-textarea
            v-model="task.description"
            label="Description"
          ></v-textarea>
          <v-btn type="submit">Save</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      task: {
        title: "",
        description: "",
      },
    };
  },
  methods: {
    ...mapActions(["createTask", "updateTask"]),
    saveTask() {
      if (this.task.id) {
        this.updateTask(this.task);
      } else {
        this.createTask(this.task);
      }
      this.$router.push("/");
    },
  },
  created() {
    if (this.$route.params.id) {
      // Fetch the task details from the store or API if necessary
      const task = this.$store.state.tasks.find(
        (task) => task.id === this.$route.params.id
      );
      if (task) {
        this.task = { ...task };
      }
    }
  },
};
</script>
