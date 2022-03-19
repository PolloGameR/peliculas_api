import { createWebHistory, createRouter } from "vue-router";
//import About from "@/views/About.vue";
import Login from "@/components/Login.vue"
import Ventana from "@/components/ventanapincipal.vue"
import Pelicula from "@/components/Pelicula.vue"
import Serie from "@/components/Serie.vue"

const routes = [  
  
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/ventana/:user",
    name: "Ventana",
    component: Ventana,    
    props: true,
  },
  {
    path: "/Pelicula/:user/:id",
    name: "Pelicula",
    component: Pelicula,
    props: true,
  },
  {
    path: "/Serie/:user/:id",
    name: "Serie",
    component: Serie,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;