<template>
  <div>
    <AdminView />
    <section class="container">
      <h2>Usuarios</h2>
      <table class="table">
        <thead>
          <th>ID</th>
          <th>Nome</th>
          <th>E-mail</th>
          <th>Data Nasc.</th>
          <th>CPF</th>
          <th>Foto Perfil</th>
          <!-- <th>Senha</th> -->
          <th>Tel.</th>
          <th>Ativo</th>
        </thead>
        <tbody>
          <tr v-for="usuario in Usuarios" :key="usuario">
            <td>{{ usuario.id }}</td>
            <td>{{ usuario.nome }}</td>
            <td>{{ usuario.email }}</td>
            <td>{{ usuario.data_nasc }}</td>
            <td>{{ usuario.cpf }}</td>
            <td>{{ usuario.foto_perfil }}</td>
            <!-- <td>{{ usuario.senha }}</td> -->
            <td>{{ usuario.tel }}</td>
            <td>{{ usuario.ativo }}</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
import AdminView from "@/views/UsuarioList.vue";
import UsuarioService from "@/services/usuarioService";
import router from "@/router";

export default {
  components: {
    AdminView,
  },
  data() {
    return {
      Usuarios: [],
    };
  },
  mounted() {
    this.listarUsuarios();
  },
  methods: {
    listarUsuarios() {
      UsuarioService.list()
        .then((res) => {
          console.log(res);
          this.Usuario = res.data.result;
        })
        .catch((err) => {
          console.log(err);
          alert("Usuario sem acesso!");
          router.push("/");
        });
    },
  },
};
</script>

<style>
</style>