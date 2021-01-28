<template>
  <div>
    <h1>Home</h1>
    <bar-chart
      class="chart"
      :data-set="data"
      :margin-left="40"
      :margin-top="40"
      :tick-count="5"
      :bar-padding="0.5"
    />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import BarChart from '../components/BarChart.vue';

export default defineComponent({
  components: {
    BarChart,
  },
  setup() {
    return {
      data: [
        ['Bob', 1],
        ['Robin', 3],
        ['Mark', 2],
        ['Joe', 3],
        ['Eve', 4],
      ],
    };
  },
});
</script>

<style scoped>
.chart {
  margin: 40px auto 0;
  display: block;
}
</style>