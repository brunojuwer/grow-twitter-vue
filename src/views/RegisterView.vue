<script setup lang="ts">
import type { ICreateAccount } from '@/types'

import { reactive, ref, watch } from 'vue'

import StepProgress from '@/components/StepProgress.vue'
import LoadingSpinner from '@/components/icons/LoadingSpinner.vue'
import { verifyUsernameOrEmailAvailability } from '@/services/api'
import { isAValidEmail } from '@/utils/email'

const signingIn = ref(false)
const currentStep = ref(0)
const steps = ref<Array<number>>([0])

const account = reactive<ICreateAccount>({
  username: '',
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  avatar: ''
})

const validators = reactive({
  username: false,
  email: false,
  passwordRetype: ''
})

async function handleCreateAccount() {
  signingIn.value = true
}

watch(
  () => account.username,
  async () => {
    const response = await verifyUsernameOrEmailAvailability(account.username)
    if (response.status === 200) {
      validators.username = true
    } else {
      validators.username = false
    }
  }
)

watch(
  () => account.email,
  async () => {
    const response = await verifyUsernameOrEmailAvailability(account.email)
    if (response.status === 200) {
      validators.email = true
    } else {
      validators.email = false
    }
  }
)

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
        <input type="text" id="username" placeholder="Ex: johndoe" v-model="account.username" />
        <div class="message-container">
          <p v-if="account.username.length >= 1 && !validators.username" class="error-message">
            Username already in use.
          </p>
          <p v-if="account.username.length >= 1 && validators.username" class="success-message">
            Username is available.
          </p>
        </div>
        <label for="first-name">First name:</label>
        <input type="text" id="first-name" placeholder="Ex: John" v-model="account.firstName" />
        <div class="message-container"></div>
        <label for="last-name">Last name:</label>
        <input type="text" id="last-name" placeholder="Ex: Doe" v-model="account.lastName" />
        <div class="message-container"></div>
      </div>

      <div class="input-container" v-if="currentStep === 1">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Ex: jonndoe@email.com.br"
          v-model="account.email"
        />
        <div class="message-container">
          <p v-if="account.email.length >= 4 && !validators.email" class="error-message">
            Email already in use.
          </p>
          <p
            v-if="!isAValidEmail(account.email) && account.email.length >= 4"
            class="error-message"
          >
            Please provide a valid email.
          </p>
          <p v-if="isAValidEmail(account.email) && validators.email" class="success-message">
            Email is valid and available.
          </p>
        </div>
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Ex: 78asd%$@aAjmB0"
          v-model="account.password"
        />
        <div class="message-container">
          <p
            v-if="account.password.length > 0 && account.password.length < 5"
            class="error-message"
          >
            Password must have more than five characters.
          </p>
        </div>
        <label for="password-retype">Confirm password</label>
        <input
          type="password"
          id="password-retype"
          placeholder="Ex: 78asd%$@aAjmB0"
          v-model="validators.passwordRetype"
        />
        <div class="message-container">
          <p
            v-if="
              account.password !== validators.passwordRetype && validators.passwordRetype.length > 0
            "
            class="error-message"
          >
            Passwords doesn't match.
          </p>
        </div>
      </div>

      <div class="input-container" v-if="currentStep === 2">
        <label for="avatar">Choose an avatar</label>
        <input type="file" id="avatar" v-on:change="account.avatar" />
        <div class="message-container">
          <p v-if="false" class="error-message">Username already in use.</p>
          <p v-if="false" class="success-message">Username is available.</p>
        </div>
      </div>

      <button
        :disabled="currentStep === 0"
        class="default_button"
        type="button"
        @click="previousStep"
      >
        Previous
      </button>
      <button
        :disabled="!(validators.username && account.firstName && account.lastName)"
        v-if="currentStep === 0"
        class="default_button"
        type="button"
        @click="nextStep"
      >
        Next
      </button>
      <button
        :disabled="
          !(
            validators.email &&
            isAValidEmail(account.email) &&
            validators.passwordRetype === account.password
          )
        "
        v-if="currentStep === 1"
        class="default_button"
        type="button"
        @click="nextStep"
      >
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
  font-size: 0.75rem;
}

.message-container {
  margin-bottom: 1rem;
}

.success-message {
  color: var(--green-success);
  font-size: 0.75rem;
}

.error-message {
  color: var(--red-danger);
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
