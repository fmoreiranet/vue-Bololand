<template>
  <NavbarPage />
  <section class="container">
    <div class="form-group">
      <label for="">Nome</label>
      <input
        type="text"
        name="nome"
        v-model="usuario.nome"
        class="form-control"
        placeholder="Nome"
        aria-describedby="helpId"
      />
      <small id="helpId" class="text-muted"></small>
    </div>
  </section>
</template>

<script>
import NavbarPage from "@/components/NavbarPage.vue";
import { Usuario } from "@/models/Usuario"; //{} seve para pegar as classes com o nome defalt
import UsuarioService from "@/services/usuarioService";
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
      UsuarioService.add(this.usuario);
    },
  },
};
</script>

<style>
</style>