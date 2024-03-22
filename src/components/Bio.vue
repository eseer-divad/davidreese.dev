<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="peach">{{ msg }}</h1>
    <h3>
      I am a <span class="orange">software engineer, designer,</span> and
      <span class="orange">IT specialist</span> in the
      <span class="white">Greater Cleveland</span> area. I am an undergraduate student of
      <span class="white">Computer Science @ The University of Akron.</span>
    </h3>
  </div>
</template>

<style scoped>
.peach {
  color: rgb(255, 227, 203);
}

.orange {
  color: rgb(255, 172, 100);
}

.white {
  color: rgb(255, 255, 255);
}

h1 {
  font-weight: 500;
  font-size: 4rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.3rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
