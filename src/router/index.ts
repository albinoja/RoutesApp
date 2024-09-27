import { createRouter, createWebHistory } from "vue-router";
import PrincipalPagina from "@/modules/landing/pages/PrincipalPagina.vue";
import RegisterPage from "@/modules/auth/pages/RegisterPage.vue"; // Asegúrate de la ruta correcta
import LoginPage from "@/modules/auth/pages/LoginPage.vue"; // Asegúrate de la ruta correcta

const routes = [
  {
    path: "/",
    name: "PrincipalPagina",
    component: PrincipalPagina,
    meta: { requiresAuth: true },
  },
  {
    path: "/registro",
    name: "RegisterPage",
    component: RegisterPage,
  },
  {
    path: "/login",
    name: "LoginPage",
    component: LoginPage,
  },
  {
    path: "/contacto",
    name: "ContactoPagina",
    component: () => import("@/modules/landing/pages/ContactoPagina.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/features",
    name: "FeaturesPagina",
    component: () => import("@/modules/landing/pages/FeaturesPagina.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/precios",
    name: "PreciosPagina",
    component: () => import("@/modules/landing/pages/PreciosPagina.vue"),
    meta: { requiresAuth: true },
  },
];

// Crear el router
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// Guardar navegación global
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem("token");

  if (
    to.matched.some((record) => record.meta.requiresAuth) &&
    !isAuthenticated
  ) {
    next({ name: "LoginPage" });
  } else {
    next();
  }
});

// Exporta el router
export default router;
