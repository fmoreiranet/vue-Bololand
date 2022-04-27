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
        <div>
          <input type="button" value="salvar" @click="loganUsuario()" />
        </div>
      </form>
    </section>
  </div>
</template>

<script>
import NavbarPage from "@/components/NavbarPage.vue";
import UsuarioService from "@/services/usuario";
import { RouterLink } from "vue-router";
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
    loganUsuario() {
      UsuarioService.login(this.dadosUsuario)
        .then((res) => {
          console.log(res);
          Storage.setItem("token", res.data.token);
          Storage.setItem("user", res.data);
          alert("Usuario logado!");
          RouterLink("/");
        })
        .catch((err) => {
          console.log(err);
          //alert("Erro ao fazer o login!");
        });
    },
  },
};
</script>

<style>
</style>