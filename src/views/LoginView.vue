<script setup lang="ts">
import { login } from '@/services/api'
import { reactive, ref } from 'vue'
import { RouterLink } from 'vue-router'

const visible = ref<boolean>()
const credentials = reactive({
  email: '',
  password: ''
})

async function handleLogin() {
  const response = await login(credentials)
  console.log(response)
}
</script>

<template>
  <form @submit.prevent="handleLogin">
    <h1 class="text-center my-5 text-blue">Sign in</h1>
    <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
      <div class="text-subtitle-1 text-medium-emphasis">Account</div>

      <v-text-field
        density="compact"
        placeholder="Email address"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
        v-model="credentials.email"
      ></v-text-field>

      <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
        Password

        <a
          class="text-caption text-decoration-none text-blue"
          href="#"
          rel="noopener noreferrer"
          target="_blank"
        >
          Forgot login password?</a
        >
      </div>

      <v-text-field
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        density="compact"
        placeholder="Enter your password"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        @click:append-inner="visible = !visible"
        v-model="credentials.password"
      ></v-text-field>

      <v-btn
        :disabled="credentials.email.length === 0 && credentials.password.length < 4"
        type="submit"
        class="mb-8"
        color="blue"
        size="large"
        variant="tonal"
        block
      >
        Log In
      </v-btn>

      <v-card-text class="text-center">
        <RouterLink to="/register" class="text-blue text-decoration-none" rel="noopener noreferrer">
          Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
        </RouterLink>
      </v-card-text>
    </v-card>
  </form>
</template>
<style scoped></style>
