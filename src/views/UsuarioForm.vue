<template>
  <section>
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
import { Usuario } from "@/models/Usuario";
import UsuarioService from '@/services/usuario';
var user = new Usuario();
export default {

    data(){
        return{
            usuario = user
        }
    }

};
</script>

<style>
</style>