<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h1
          class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"
        >
          Busca tu Pokémon
        </h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
          Ingresa un número para obtener información del Pokémon.
        </p>
      </div>

      <!-- Input para ingresar el número -->
      <div class="flex justify-center mb-4">
        <input
          v-model="pokemonId"
          type="number"
          placeholder="Ingresa un número"
          class="border-2 border-gray-300 rounded-lg p-2"
        />
        <button
          @click="getPokemon"
          class="ml-4 bg-indigo-500 text-white px-4 py-2 rounded-lg"
        >
          Buscar Pokémon
        </button>
      </div>

      <!-- Mostrar información del Pokémon -->
      <div v-if="pokemonData" class="text-center">
        <h2 class="title-font font-medium text-3xl text-gray-900">
          {{ pokemonData.name }}
        </h2>
        <img
          :src="pokemonData.photo"
          alt="Imagen de Pokémon"
          class="mx-auto my-4 w-32 h-32"
        />
      </div>

      <!-- Mensaje de error en caso de que falle -->
      <div v-if="error" class="text-center text-red-500">
        <p>Error al obtener el Pokémon. Intenta con otro número.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      pokemonId: "", // Valor que se ingresará
      pokemonData: null, // Datos del Pokémon
      error: false, // Para manejar errores
    };
  },
  methods: {
    async getPokemon() {
      if (this.pokemonId) {
        try {
          this.error = false;
          const response = await fetch(
            `https://bkn-swart.vercel.app/api/auth/pokemon/${this.pokemonId}`
          );
          const data = await response.json();
          this.pokemonData = {
            name: data.name,
            photo: data.photo,
          };
        } catch (err) {
          this.error = true;
          this.pokemonData = null;
        }
      } else {
        this.error = true;
      }
    },
  },
  filters: {
    capitalize(value) {
      if (!value) return "";
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
  },
};
</script>

<style scoped>
/* Estilos personalizados */
.pokemon-card {
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease;
}
.pokemon-card:hover {
  transform: scale(1.05);
}
</style>
