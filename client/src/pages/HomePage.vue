<template>
  <div>
    <h1 class="text-center mb-5">Love Pizza</h1>
    <div class="row">
      <div class="col-12 col-md-8 d-flex flex-column">
        <h4 class="text-center mb-3">Top 10 pizza lovers</h4>
        <bar-chart
          class="chart w-100"
          :data-set="users"
          :margin-left="40"
          :margin-top="40"
          :tick-count="5"
          :bar-padding="0.5"
        />
      </div>
      <div
        class="col-12 col-md-4 mt-4 align-self-center text-center text-md-left"
      >
        <h2>Do you love pizza?</h2>
        <span class="text-secondary">Show us how much</span>
        <button
          v-if="currentUser"
          class="btn btn-primary btn-block mt-3"
          @click="lovePizza"
        >
          I love pizza
        </button>
        <div v-else>
          <router-link class="mt-3" :to="LOGIN_PAGE_ROUTE">
            Login to show your love to pizza
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import BarChart from "../components/BarChart.vue";
import { LOGIN_PAGE_ROUTE } from "../constants/routes";

export default {
  components: {
    BarChart,
  },
  computed: {
    LOGIN_PAGE_ROUTE() {
      return LOGIN_PAGE_ROUTE;
    },
    users() {
      return this.$store.getters["users/top10Users"];
    },
    currentUser() {
      return this.$store.getters["auth/currentUser"];
    },
  },
  methods: {
    lovePizza() {
      this.$store
        .dispatch("users/vote", this.currentUser.username)
        .then(() => {
          this.$toast.success("You love pizza");
        })
        .catch(() => {
          this.$toast.error("Something goes wrong with your vote");
        });
    },
  },
  created() {
    this.$store.dispatch("users/getUsers");
  },
};
</script>
