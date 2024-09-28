<template>
  <section class="text-gray-600 body-font relative">
    <div class="absolute inset-0 bg-gray-300">
      <iframe
        width="100%"
        height="100%"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        title="map"
        scrolling="no"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.713329008969!2d-89.19672212556097!3d13.67518759906399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f63311954327075%3A0x28682274f5650dd1!2sUniversidad%20Luterana%20Salvadore%C3%B1a!5e0!3m2!1ses-419!2ssv!4v1727487229449!5m2!1ses-419!2ssv"
        style=""
      ></iframe>
    </div>
    <div class="container px-5 py-24 mx-auto flex">
      <div
        class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md"
      >
        <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
          Feedback
        </h2>
        <p class="leading-relaxed mb-5 text-gray-600">
          Envia un correo para ver el mensaje
        </p>
        <div class="relative mb-4">
          <label for="email" class="leading-7 text-sm text-gray-600"
            >Email</label
          >
          <input
            v-model="email"
            type="email"
            id="email"
            name="email"
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div class="relative mb-4">
          <label for="message" class="leading-7 text-sm text-gray-600"
            >Mensaje</label
          >
          <textarea
            v-model="message"
            id="message"
            name="message"
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          ></textarea>
        </div>
        <button
          @click="sendEmail"
          class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Enviar Correo
        </button>
        <!-- Mostrar mensaje de éxito o error -->
        <p v-if="successMessage" class="text-green-500 mt-3">
          {{ successMessage }}
        </p>
        <p v-if="errorMessage" class="text-red-500 mt-3">{{ errorMessage }}</p>
        <p class="text-xs text-gray-500 mt-3">Este es un texto de ejemplo.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      email: "", // Email del usuario
      message: "", // Mensaje del usuario
      successMessage: "", // Mensaje de éxito
      errorMessage: "", // Mensaje de error
    };
  },
  methods: {
    async sendEmail() {
      // Verificar que ambos campos estén llenos
      if (!this.email || !this.message) {
        this.errorMessage = "Por favor, complete todos los campos.";
        this.successMessage = "";
        return;
      }

      try {
        const response = await fetch(
          "https://bkn-swart.vercel.app/api/auth/send-email",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: this.email,
              mensaje: this.message,
            }),
          }
        );

        // Verificar si la respuesta es correcta
        if (response.ok) {
          this.successMessage = "Correo enviado con éxito.";
          this.errorMessage = "";
          // Limpiar los campos después de enviar el correo
          this.email = "";
          this.message = "";
        } else {
          this.errorMessage = "Hubo un error al enviar el correo.";
          this.successMessage = "";
        }
      } catch (error) {
        this.errorMessage = "Error en la conexión. Intente de nuevo.";
        this.successMessage = "";
      }
    },
  },
};
</script>

<style scoped>
/* Puedes agregar más estilos personalizados si lo deseas */
</style>
