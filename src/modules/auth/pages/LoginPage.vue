<template>
  <div class="login-page">
    <h1 class="text-3xl font-bold underline">Iniciar Sesión</h1>
    <form @submit.prevent="login">
      <div>
        <label for="username">Nombre de usuario:</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div>
        <label for="password">Contraseña:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Iniciar Sesión</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post(
          "http://localhost:4000/api/auth/login",
          {
            username: this.username,
            password: this.password,
          }
        );
        localStorage.setItem("token", response.data.token); // Guardar el token en localStorage
        alert("Inicio de sesión exitoso");
        this.$router.push({ name: "PrincipalPagina" }); // Redirigir a la página principal
      } catch (error) {
        console.error(error);
        alert("Error en el inicio de sesión");
      }
    },
  },
};
</script>

<style scoped>
/* Estilos opcionales para tu página de inicio de sesión */
</style>
