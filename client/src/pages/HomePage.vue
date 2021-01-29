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
    <div>
      <h2>Do you like pizza?</h2>
      <button @click="likePizza">Click here</button>
    </div>
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
    const data = [
      ['Alice', 1],
      ['Bob', 3],
      ['Carol', 2],
      ['David', 3],
      ['Eve', 4],
      ['Frank', 5],
      ['Geraldine', 3],
      ['Hector', 4],
      ['Irene', 2],
      ['Jack', 1],
    ];

    const likePizza = () => {
      console.log('like pizza');
    };

    return {
      data,
      likePizza,
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