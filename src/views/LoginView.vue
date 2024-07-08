<template>
  <main>
    <section class="grow-info">
      <h4>Growtwitter</h4>
      <span>Trabalho final do bloco intermediário</span>
      <p>
        O Growtwitter é a plataforma definitiva para todos os apaixonados por redes sociais que
        buscam uma experiência familiar e poderosa, semelhante ao Twitter, mas com um toque único.
        Seja parte desta comunidade que valoriza a liberdade de expressão, a conexão com pessoas de
        todo o mundo e a disseminação de ideias.
      </p>
    </section>
    <section class="login-container">
      <h4>Entrar no Growtwitter</h4>
      <form>
        <label for="username">Username</label>
        <input type="text" id="username" />
        <label for="password">Password</label>
        <input type="password" id="password" />
        <button class="default_button" type="submit">Sign in</button>
      </form>
    </section>
  </main>
</template>
<style scoped>
main {
  max-width: 700px;
  margin: 2rem auto;
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

.login-container {
  width: 100%;
  background-color: var(--white);
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;

  display: flex;
  flex-direction: column;
  padding: 1.875rem;
}

.login-container h4 {
  text-align: center;
  color: var(--black);
  font-size: 1.25rem;
  margin-top: 1.75rem;
  font-weight: 600;
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
  border: 2px solid var(--gray-soft);
  padding: 0.25rem 1rem;
}

button {
  margin-top: 1rem;
}
</style>
