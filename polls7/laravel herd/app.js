<!-- src/components/BettingForm.vue -->
<template>
  <div>
    <h2>Place Your Bet</h2>
    <form @submit.prevent="placeBet">
      <div>
        <label for="team">Team:</label>
        <input type="text" v-model="team" id="team">
      </div>
      <div>
        <label for="amount">Amount:</label>
        <input type="number" v-model="amount" id="amount">
      </div>
      <button type="submit">Bet</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: '',
      amount: '',
    };
  },
  methods: {
    placeBet() {
      // Logic to place a bet
      console.log(`Placing bet on ${this.team} with amount ${this.amount}`);
    },
  },
};
</script>

<style scoped>
/* Add component-specific styles here */
</style>
