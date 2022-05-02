<template>
  <NavbarPage />
  <section class="container bg-light">
    <div class="card mb-3">
      <div class="card-header">
        <h3 class="card-title">{{ usuario.nome }}</h3>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-4 text-center">
            <img class="img-fluid rounded col-12" alt="perfil" :src="perfil" />
            <div>
              <small class="text-muted">{{ usuario.foto_perfil }}</small>
            </div>
            <div class="form-group">
              <label for="">Foto Perfil</label>
              <input
                type="file"
                name="foto"
                class="form-control"
                placeholder=""
                aria-describedby="helpId"
                id="files"
                ref="files"
                multiple
                @change="upload()"
              />
              <small id="helpId" class="text-muted"></small>
            </div>
          </div>

          <div class="col-8">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">{{ usuario.email }}</li>
              <li class="list-group-item">{{ usuario.data_nasc }}</li>
              <li class="list-group-item">{{ usuario.tel }}</li>
              <li class="list-group-item">{{ usuario.cpf }}</li>
              <li class="list-group-item">{{ usuario }}</li>
            </ul>
          </div>
        </div>
      </div>
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
    // async sendFile() {
    //   let dataForm = new FormData();
    //   for (let file of this.$refs.files.files) {
    //     dataForm.append('file', file);
    //   }
    //   let res = await fetch('http://localhost/api/usuario/upload', {
    //     method: "POST",
    //     body: dataForm,
    //   });
    //   let data = await res.json();
    //   console.log(data);
    // },
    upload() {
      //Cria um novo data form (Dados do Formulario)
      let dataForm = new FormData();
      //Pega todos as referencias com o nome files
      for (let file of this.$refs.files.files) {
        dataForm.append("file", file);
      }
      //Adiciona a lista de objetos do formulario
      UsuarioService.upload(dataForm)
        .then((res) => {
          console.log(res);
          this.getUsuario();
          alert("Foto Alterada!");
        })
        .catch((err) => {
          console.log(err);
          alert("Erro ao alterar a foto!");
        });
    },
    getUsuario() {
      let user = JSON.parse(localStorage.getItem("user"));
      UsuarioService.get(user.id)
        .then((res) => {
          console.log(res);
          this.usuario = res.data.result[0];
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getUsuario();
  },
  // watch: {
  //   usuario: function () {
  //     this.getUsuario();
  //   },
  // },
  computed: {
    perfil() {
      if (
        typeof this.usuario.foto_perfil == undefined ||
        this.usuario.foto_perfil == ""
      ) {
        return "@/assets/perfil.png";
      }
      return "http://localhost/api/midias/user/" + this.usuario.foto_perfil;
    },
  },
};
</script>

<style>
</style>