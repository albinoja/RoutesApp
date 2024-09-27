<template>
  <div
    class="register-page min-h-screen flex items-center justify-center bg-gray-100"
  >
    <div class="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
      <h1 class="text-3xl font-bold text-center mb-6 text-gray-800">
        Registro
      </h1>
      <form @submit.prevent="register">
        <div class="mb-4">
          <label for="username" class="block text-gray-700 font-medium mb-2"
            >Nombre de usuario:</label
          >
          <input
            type="text"
            id="username"
            v-model="username"
            required
            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Ingresa tu nombre de usuario"
          />
        </div>
        <div class="mb-6">
          <label for="password" class="block text-gray-700 font-medium mb-2"
            >Contraseña:</label
          >
          <input
            type="password"
            id="password"
            v-model="password"
            required
            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Ingresa tu contraseña"
          />
        </div>
        <button
          type="submit"
          class="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Registrarse
        </button>
      </form>
    </div>
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
          "https://bkn-swart.vercel.app/api/auth/register",
          {
            username: this.username,
            password: this.password,
          }
        );
        alert("Registro exitoso");
        this.$router.push({ name: "LoginPage" });
      } catch (error) {
        console.error(error);
        alert("Error en el registro");
      }
    },
  },
};
</script>

<style scoped>
.register-page {
  background-color: #f0f4f8;
}

.shadow-md {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
