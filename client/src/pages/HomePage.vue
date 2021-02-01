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

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from '../store';
import { AllMutationTypes } from '../store/mutation-types';
import { AllActionTypes } from '../store/action-types';

import { IUser } from '../models/user';
import BarChart from '../components/BarChart.vue';

export default defineComponent({
  components: {
    BarChart,
  },
  setup() {
    const data: IUser[] = [
      { name: 'Alice', likes: 1 },
      { name: 'Bob', likes: 3 },
      { name: 'Carol', likes: 2 },
      { name: 'David', likes: 3 },
      { name: 'Eve', likes: 4 },
      { name: 'Frank', likes: 5 },
      { name: 'Geraldine', likes: 3 },
      { name: 'Hector', likes: 4 },
      { name: 'Irene', likes: 2 },
      { name: 'Jack', likes: 1 },
    ];
    const store = useStore();

    const likePizza = () => {
      console.log('Like Pizza');
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