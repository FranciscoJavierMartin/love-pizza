<template>
  <div>
    <h1 class="text-center mb-5">Love Pizza</h1>
    <div class="row">
      <div class="col-12 col-md-8 d-flex flex-column">
        <h4 class="text-center mb-3">Top 10 pizza lovers</h4>
        <bar-chart
          class="chart"
          :data-set="users"
          :margin-left="40"
          :margin-top="40"
          :tick-count="5"
          :bar-padding="0.5"
        />
      </div>
      <div v-if="currentUser" class="col-12 col-md-4 mt-4 align-self-center">
        <h2>Do you like pizza?</h2>
        <span class="text-secondary">Show us how much</span>
        <button class="btn btn-primary btn-block mt-3" @click="likePizza">
          Click here
        </button>
      </div>
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
      const users = this.$store.getters["users/top10Users"];
      return users;
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
  created() {
    this.$store.dispatch("users/getUsers");
  },
};
</script>
