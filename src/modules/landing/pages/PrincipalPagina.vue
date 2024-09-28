<template>
  <div
    class="bg-gray-100 min-h-screen flex flex-col items-center justify-center"
  >
    <img
      src="../../../assets/uls.png"
      alt="Logo de tu Universidad"
      class="rounded-full w-48 h-48 mb-8"
    />

    <h1 class="text-4xl font-bold text-gray-800 mb-4">
      Parcial 2: Rafael Albino Jovel Alfaro
    </h1>

    <p class="text-lg text-gray-600 text-center mb-8">
      Este proyecto representa una aplicación web de una sola página (SPA)
      desarrollada con Vue.js y diseñada con Tailwind CSS. Ofrece una interfaz
      intuitiva y responsiva para diversos usuarios. La aplicación frontend se
      encuentra desplegada en Netlify y se integra con un backend construido en
      Express.js y desplegado en Vercel. El backend se conecta a una base de
      datos PostgreSQL alojada en Render para gestionar la información de los
      usuarios y otras operaciones críticas.
    </p>
    <br />
    <div class="flex flex-col space-y-4">
      <h2 class="text-2xl font-semibold text-gray-800">
        Funcionalidades Principales
      </h2>
      <ul class="list-disc list-inside">
        <li>Registro de usuarios</li>
        <li>Inicio de sesión seguro</li>
        <li>Formulario de contacto con envio de correo</li>
        <li>Consulta api pokemon</li>
        <li>Logout</li>
      </ul>
    </div>

    <br />
    <br />  
  </div>
</template>
