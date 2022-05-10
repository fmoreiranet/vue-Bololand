<template>
  <NavbarPage />
  <section class="container bg-light">
    <div class="form-group">
      <label for="">Nome</label>
      <input
        type="text"
        name="nome"
        v-model="produto.nome"
        class="form-control"
        placeholder=""
        aria-describedby="helpId"
      />
      <small id="helpId" class="text-muted"></small>
    </div>

    <div class="form-group">
      <label for="">Descricao</label>
      <input
        type="text"
        name="descricao"
        v-model="produto.descricao"
        class="form-control"
        placeholder=""
        aria-describedby="helpId"
      />
      <small id="helpId" class="text-muted"></small>
    </div>

    <div class="form-group">
      <label for="">Quantidade</label>
      <input
        type="number"
        name="quant"
        step="1"
        v-model="produto.quant"
        class="form-control"
        placeholder=""
        aria-describedby="helpId"
      />
      <small id="helpId" class="text-muted"></small>
    </div>

    <div class="form-group">
      <label for="">Valor</label>
      <input
        type="number"
        name="valor"
        step="0.01"
        v-model="produto.valor"
        class="form-control"
        placeholder=""
        aria-describedby="helpId"
      />
      <small id="helpId" class="text-muted"></small>
    </div>

    <div class="form-group">
      <label for="">Largura</label>
      <input
        type="number"
        name="largura"
        step="0.001"
        v-model="produto.largura"
        class="form-control"
        placeholder=""
        aria-describedby="helpId"
      />
      <small id="helpId" class="text-muted"></small>
    </div>

    <div class="form-group">
      <label for="">Altura</label>
      <input
        type="number"
        name="altura"
        step="0.001"
        v-model="produto.altura"
        class="form-control"
        placeholder=""
        aria-describedby="helpId"
      />
      <small id="helpId" class="text-muted"></small>
    </div>

    <div class="form-group">
      <label for="">Comprimento</label>
      <input
        type="number"
        name="comprimento"
        step="0.001"
        v-model="produto.comprimento"
        class="form-control"
        placeholder=""
        aria-describedby="helpId"
      />
      <small id="helpId" class="text-muted"></small>
    </div>

    <div class="form-group">
      <label for="">Peso</label>
      <input
        type="number"
        name="peso"
        step="0.001"
        v-model="produto.peso"
        class="form-control"
        placeholder=""
        aria-describedby="helpId"
      />
      <small id="helpId" class="text-muted"></small>
    </div>

    <div class="form-group">
      <label for="">Foto Produtos</label>
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
import { Produto } from "@/models/Produto"; //{} seve para pegar as classes com o nome defalt
import ProdutoService from "@/services/produtoService";
//import router from "@/router";

var produto = new Produto();

export default {
  components: {
    NavbarPage,
  },
  data() {
    return {
      produto,
    };
  },
  methods: {
    cadastrar() {
      ProdutoService.add(this.produto)
        .then((res) => {
          console.log(res);
          alert("Cadastrado!");
          this.produto = res;
          //router.push("/");
        })
        .catch((err) => {
          console.error(err);
          alert("Erro ao cadastrar!");
        });
    },
    upload() {
      //Cria um novo data form (Dados do Formulario)
      let dataForm = new FormData();
      //Pega todos as referencias com o nome files
      for (let file of this.$refs.files.files) {
        dataForm.append("file", file);
      }
      //Adiciona a lista de objetos do formulario
      ProdutoService.upload(dataForm)
        .then((res) => {
          console.log(res);
          this.produto.fotos = res.data.result;
        })
        .catch((err) => {
          console.log(err);
          alert("Erro ao alterar a foto!");
        });
    },
  },
};
</script>

<style>
</style>