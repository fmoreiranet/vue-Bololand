<template>
  <NavbarPage />
  <section class="container bg-light">
    <div class="form-group">
      <label for="">Nome</label>
      <input
        type="text"
        name="nome"
        v-model="usuario.nome"
        class="form-control"
        placeholder=""
        aria-describedby="helpId"
      />
      <small id="helpId" class="text-muted"></small>
    </div>

    <div class="form-group">
      <label for="">E-mail</label>
      <input
        type="email"
        name="email"
        v-model="usuario.email"
        class="form-control"
        placeholder=""
        aria-describedby="helpId"
      />
      <small id="helpId" class="text-muted"></small>
    </div>

    <div class="form-group">
      <label for="">Senha</label>
      <input
        type="password"
        name="senha"
        v-model="usuario.senha"
        class="form-control"
        placeholder=""
        aria-describedby="helpId"
      />
      <small id="helpId" class="text-muted"></small>
    </div>

    <div class="form-group">
      <label for="">Data Nasc.</label>
      <input
        type="date"
        name="data_nasc"
        v-model="usuario.data_nasc"
        class="form-control"
        placeholder=""
        aria-describedby="helpId"
      />
      <small id="helpId" class="text-muted"></small>
    </div>
    <div class="form-group">
      <label for="">Tel</label>
      <input
        type="number"
        name="tel"
        v-model="usuario.tel"
        class="form-control"
        placeholder=""
        aria-describedby="helpId"
      />
      <small id="helpId" class="text-muted"></small>
    </div>

    <div class="form-group">
      <label for="">CPF</label>
      <input
        type="number"
        name="cpf"
        v-model="usuario.cpf"
        class="form-control"
        placeholder=""
        aria-describedby="helpId"
        max="99999999999"
        min="00000000000"
      />
      <small id="helpId" class="text-muted"></small>
    </div>

    <div class="mb-3">
      <button type="button" class="btn btn-primary mx-1" @click="cadastrar()">
        Cadastrar
      </button>
      <button type="button" class="btn btn-danger" @click="$router.push('/')">
        Sair
      </button>
    </div>
  </section>
</template>

<script>
import NavbarPage from "@/components/NavbarPage.vue";
import { Usuario } from "@/models/Usuario"; //{} seve para pegar as classes com o nome defalt
import UsuarioService from "@/services/usuarioService";
import router from "@/router";

var usuario = new Usuario();

export default {
  components: {
    NavbarPage,
  },
  data() {
    return {
      usuario,
    };
  },
  methods: {
    cadastrar() {
      UsuarioService.add(this.usuario)
        .then((res) => {
          console.log(res);
          alert("Cadastrado!", res);
          router.push("/");
        })
        .catch((err) => {
          console.error(err);
          alert("Erro ao cadastrar!");
        });
    },
  },
};
</script>

<style>
</style>