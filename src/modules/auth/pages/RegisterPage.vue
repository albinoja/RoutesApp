<template>
  <div class="register-page">
    <h1 class="text-3xl font-bold underline">Registro</h1>
    <form @submit.prevent="register">
      <div>
        <label for="username">Nombre de usuario:</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div>
        <label for="password">Contraseña:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Registrarse</button>
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
    async register() {
      try {
        const response = await axios.post(
          "http://localhost:4000/api/auth/register",
          {
            username: this.username,
            password: this.password,
          }
        );
        alert("Registro exitoso");
        this.$router.push({ name: "LoginPage" }); // Redirigir a la página de login
      } catch (error) {
        console.error(error);
        alert("Error en el registro");
      }
    },
  },
};
</script>

<style scoped>
/* Estilos opcionales para tu página de registro */
</style>
