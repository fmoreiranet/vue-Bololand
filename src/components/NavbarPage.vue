<template>
  <nav class="navbar navbar-expand-lg sticky-top navbar-dark bg-blue">
    <div class="container">
      <!-- <a class="navbar-brand" href="#">Navbar</a> -->
      <button
        class="navbar-toggler ms-auto"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
        <!--Icone no Menu Celular-->
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link" aria-current="page"
              >Inicio</router-link
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#demostracao">Demostração</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#produtos">Produtos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#areaSocial">Clientes</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contatoMap">Locais</a>
          </li>
        </ul>
        <!-- <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form> -->
        <div v-if="usuario == null">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <!-- <a class="nav-link" href="/logon">Entrar</a> -->
              <router-link to="/logon" class="nav-link">Entrar</router-link>
            </li>
          </ul>
        </div>
        <div v-else>
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/usuario_perfil" class="nav-link">
                {{ usuario.nome }}
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/pedidos" class="nav-link">Pedidos</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="logoffUsuario()">Sair</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { Usuario } from "@/models/Usuario";
import router from "@/router";

var usuario = new Usuario();

export default {
  name: "NavbarPage",
  data() {
    return {
      usuario,
    };
  },
  methods: {
    getUsuario() {
      let user = JSON.parse(localStorage.getItem("user"));
      this.usuario = typeof user === undefined ? null : user;
    },
    logoffUsuario() {
      localStorage.clear();
      this.usuario = null;
      router.push("/");
    },
  },
  mounted() {
    this.getUsuario();
  },
  watch() {
    this.usuario;
  },
};
</script>

<style scoped>
.navbar {
  padding: 0;
}

.nav-link a {
  color: #fff !important;
}

.nav-link a:hover {
  color: #0022cc !important;
  background-color: #ffffff;
  border-bottom: solid 5px #ecdd0b;
  font-weight: bold;
}
</style>