<template>
  <div class="text-center">
    <span >404</span>
    <div class="msg">
      Maybe this page moved? Got deleted? Is hiding out in quarantine? Never
      existed in the first place?
      <p>Let's go <router-link to="/">home</router-link> and try from there.</p>
    </div>
  </div>
</template>

<style scoped>
span{
  font-size: 11rem;
}
.msg {
  text-align: left;
  font-size: 1.5rem;
}
</style>