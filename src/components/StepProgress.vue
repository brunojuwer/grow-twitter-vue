<script setup lang="ts">
defineProps<{
  step: number
  steps: Array<number>
}>()
</script>
<template>
  <ul>
    <li :class="steps[0] === 0 ? 'active-step' : ''">1</li>
    <div :class="steps[1] === 1 ? 'active-progress-line' : ''" class="progress-line"></div>
    <li :class="steps[1] === 1 ? 'active-step' : ''">2</li>
    <div :class="steps[2] === 2 ? 'active-progress-line' : ''" class="progress-line"></div>
    <li :class="steps[2] === 2 ? 'active-step' : ''">3</li>
  </ul>
</template>

<style scoped lang="css">
.progress-line {
  background-color: var(--gray-soft);
  max-width: 200px;
  width: 100%;
  height: 4px;
  border-radius: 20px;
  align-self: center;
}

.active-progress-line {
  background-color: var(--blue);
  animation:
    change-background 500ms linear,
    typing 1s ease-in-out 1;
}

@keyframes change-background {
  from {
    background-color: var(--gray-soft);
  }
  to {
    background-color: var(--blue);
  }
}

ul {
  padding: 0 1.5rem;
  margin-top: 1rem;
  list-style: none;
  display: flex;
  justify-content: space-around;
}

li {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.75rem;
  padding: 1rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: var(--white);
  border: 3px solid var(--gray-soft);
  color: var(--gray-soft);
}

.active-step {
  color: var(--blue-dark);
  border: 3px solid var(--blue);
  animation:
    change-border 500ms linear,
    typing 1s ease-in-out 1;
}

@keyframes change-border {
  from {
    color: var(--gray-soft);
    border: 3px solid var(--gray-soft);
  }
  to {
    color: var(--blue-dark);
    border: 3px solid var(--blue);
  }
}
</style>
