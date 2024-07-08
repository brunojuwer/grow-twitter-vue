<script setup lang="ts">
import { RouterLink } from 'vue-router'

async function handleCreateAccount() {
  console.log('Login')
}
</script>

<template>
  <main>
    <section class="register-container">
      <h4>Criar conta</h4>
      <form @submit.prevent="handleCreateAccount">
        <label for="username">Username</label>
        <input type="text" id="username" />
        <label for="email">Email</label>
        <input type="email" id="email" />
        <label for="password">Password</label>
        <input type="password" id="password" />
        <label for="password-retype">Confirm password</label>
        <input type="password" id="password-retype" />
        <button class="default_button" type="submit">Sign in</button>
      </form>
      <div>
        <p>Or</p>
      </div>
      <RouterLink class="login-link" to="/login">Sign in</RouterLink>
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
  display: flex;
  border-radius: 8px;
  background-color: var(--blue);
}

.grow-info {
  max-width: 370px;
  margin: 1.25rem;
  margin-bottom: 2.5rem;
}

.grow-info h4 {
  font-size: 1.375rem;
  margin-top: 1.25rem;
  margin-bottom: 0.875rem;
}

.grow-info span {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
}
.grow-info p {
  font-size: 0.875rem;
}

.register-container {
  width: 100%;
  background-color: var(--white);
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;

  display: flex;
  flex-direction: column;
  padding: 1.875rem;
}

.register-container h4 {
  text-align: center;
  color: var(--black);
  font-size: 1.25rem;
  margin-top: 1.75rem;
  font-weight: 600;
}

.register-container div {
  margin-top: 1.5rem;
  border-top: 1px solid var(--black);
  display: flex;
  justify-content: center;
}

.register-container div p {
  display: inline-block;
  margin-top: -0.97rem;
  background-color: white;
  padding: 0.25rem 0.75rem;
  color: var(--black-soft);
  text-align: center;
  font-size: 0.75rem;
}

form {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
}

label {
  color: var(--black);
  font-size: 0.75rem;
  font-weight: 600;
  opacity: 0.4;
}

input {
  border-radius: 6px;
  border: 1.5px solid var(--gray-soft);
  padding: 0.25rem 1rem;
}

button {
  margin-top: 1rem;
}

.login-link {
  margin-top: 0.875rem;
  text-align: center;
  text-decoration: none;
  font-size: 0.7rem;
  color: var(--blue);
}

.login-link:hover {
  text-decoration: underline;
}

@media (max-width: 1000px) {
  main {
    flex-direction: column-reverse;
  }

  .register-container {
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    border-bottom-right-radius: 0;
  }
}
</style>
