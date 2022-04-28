<template>
  <div>
    <NavbarPage />
    <section class="container">
      <form action="" class="col-12 col-md-6 m-auto bg-white p-5">
        <div class="form-group">
          <label>E-mail</label>
          <input
            type="email"
            v-model="dadosUsuario.usuario"
            class="form-control"
          />
        </div>
        <div class="form-group">
          <span class="d-flex justify-content-between"
            ><label>Senha</label> <i>esqueceu senha!</i></span
          >
          <input
            type="password"
            v-model="dadosUsuario.senha"
            class="form-control"
          />
        </div>

        <div class="form-group my-1">
          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <button
              type="button"
              class="btn btn-primary mx-1"
              @click="logonUsuario()"
            >
              Entrar
            </button>
            <button
              type="button"
              class="btn btn-danger"
              @click="logoffUsuario()"
            >
              Sair
            </button>
          </div>
        </div>
        <hr />
        <div class="form-group right my-1">
          <!-- <button type="button" @click="$router.push('usuario_add')" class="btn btn-danger mx-1">
            Cadastrar
          </button> -->
          <div class="d-grid gap-2">
            <router-link to="usuario_add" class="btn btn-outline-warning mx-1">
              Cadastrar
            </router-link>
          </div>
        </div>
      </form>
    </section>
  </div>
</template>

<script>
import NavbarPage from "@/components/NavbarPage.vue";
import UsuarioService from "@/services/usuarioService";
import router from "@/router";

export default {
  components: {
    NavbarPage,
  },
  data() {
    return {
      dadosUsuario: {
        usuario: "",
        senha: "",
      },
    };
  },
  mounted() {
    //this.loadDoc("http://localhost/api/usuario/list", myFunction);
    //this.listarUsuarios();
  },
  methods: {
    // function loadDoc(url, xFunction) {
    //   const xhttp = new XMLHttpRequest();
    //   xhttp.onload = function () {
    //     xFunction(this);
    //   };
    //   xhttp.open("GET", url);
    //   xhttp.send();
    // }
    // function myFunction(xhttp) {
    //   console.log(xhttp.responseText);
    // }

    listarUsuarios() {
      UsuarioService.list().then((res) => {
        console.log(res);
      });
    },
    logonUsuario() {
      UsuarioService.login(this.dadosUsuario)
        .then((res) => {
          console.log(res);
          localStorage.setItem("token", res.data.result.token);
          localStorage.setItem("user", JSON.stringify(res.data.result));
          alert("Usuario logado!");
          router.push("/");
        })
        .catch((err) => {
          console.log(err);
          alert("Erro ao fazer o login!");
        });
    },
    logoffUsuario() {
      localStorage.clear();
      router.push("/");
    },
  },
};
</script>

<style>
</style>