<template>
  <div>
    <h1>Home</h1>
    <bar-chart
      class="chart"
      :data-set="users"
      :margin-left="40"
      :margin-top="40"
      :tick-count="5"
      :bar-padding="0.5"
    />
    <div v-if="currentUser">
      <h2>Do you like pizza?</h2>
      <button @click="likePizza">Click here</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import BarChart from "../components/BarChart.vue";

export default {
  components: {
    BarChart,
  },
  computed: {
    users() {
      const users = this.$store.getters['users/top10Users'];
      console.log(users);
      return users;
      // return [
      //   { name: "Alice", likes: 1 },
      //   { name: "Bob", likes: 3 },
      //   { name: "Carol", likes: 2 },
      //   { name: "David", likes: 3 },
      //   { name: "Eve", likes: 4 },
      //   { name: "Frank", likes: 5 },
      //   { name: "Geraldine", likes: 3 },
      //   { name: "Hector", likes: 4 },
      //   { name: "Irene", likes: 2 },
      //   { name: "Jack", likes: 1 },
      // ];
    },
    currentUser() {
      return this.$store.getters["auth/currentUser"];
    },
  },
  methods: {
    likePizza() {
      this.$store.dispatch("users/vote", this.currentUser.username);
    },
  },
  mounted() {
    this.$store.dispatch("users/getUsers");
  },
};
</script>
