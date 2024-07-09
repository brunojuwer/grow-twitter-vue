<script setup lang="ts">
import { ref } from 'vue'
import StepProgress from '@/components/StepProgress.vue'
import LoadingSpinner from '@/components/icons/LoadingSpinner.vue'

const signingIn = ref(false)

async function handleCreateAccount() {
  signingIn.value = true
}
const currentStep = ref(0)
const steps = ref<Array<number>>([0])

function nextStep() {
  if (currentStep.value < 2) {
    currentStep.value++
    steps.value.push(currentStep.value)
  }
}

function previousStep() {
  if (currentStep.value >= 1) {
    currentStep.value--
    steps.value.pop()
  }
}
</script>

<template>
  <main>
    <h4>Create account</h4>
    <section class="progress-container">
      <StepProgress :step="currentStep" :steps="steps" />
    </section>

    <section class="register-container">
      <div class="input-container" v-if="currentStep === 0">
        <label for="username">Choose a username:</label>
        <input type="text" id="username" placeholder="Ex: jondoe" />

        <label for="first-name">First name:</label>
        <input type="text" id="first-name" placeholder="Ex: Jon" />

        <label for="last-name">First name:</label>
        <input type="text" id="last-name" placeholder="Ex: Doe" />
      </div>

      <div class="input-container" v-if="currentStep === 1">
        <label for="email">Email</label>
        <input type="email" id="email" placeholder="Ex: jondoo@email.com" />
        <label for="password">Password</label>
        <input type="password" id="password" placeholder="Ex: 78asd%$@aAjmB0" />
        <label for="password-retype">Confirm password</label>
        <input type="password" id="password-retype" placeholder="Ex: 78asd%$@aAjmB0" />
      </div>

      <div class="input-container" v-if="currentStep === 2">
        <label for="avatar">Chose an avatar</label>
        <input type="file" id="avatar" />
      </div>

      <button class="default_button" type="button" @click="previousStep">Previous</button>
      <button v-if="currentStep !== 2" class="default_button" type="button" @click="nextStep">
        Next
      </button>
      <button
        v-if="currentStep === 2"
        class="default_button"
        type="button"
        @click="handleCreateAccount"
      >
        <LoadingSpinner v-if="signingIn" />
        <p v-if="!signingIn">Create</p>
      </button>
    </section>
  </main>
</template>

<style scoped>
main {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  max-width: 700px;
  width: 100%;
  border-radius: 8px;
  background-color: var(--white);
}

.register-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1.875rem;
}

h4 {
  text-align: center;
  color: var(--black);
  font-size: 1.25rem;
  margin-top: 1.75rem;
  font-weight: 600;
}

.input-container {
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
}

label {
  color: var(--black);
  font-size: 0.75rem;
  font-weight: 600;
  opacity: 0.4;
  margin-bottom: 0.25rem;
}

input {
  border-radius: 6px;
  border: 1.5px solid var(--gray-soft);
  padding: 0.5rem 0.75rem;
  margin-bottom: 1rem;
  font-size: 0.75rem;
}

button {
  margin-top: 1rem;
}

@media (max-width: 1000px) {
  main {
    flex-direction: column-reverse;
  }
}
</style>
