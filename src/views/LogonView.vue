<template>
  <div>
    <NavbarPage />
    <form action="" class="col-12 col-md-6 m-auto bg-white p-5">
      <div class="form-group">
        <label>E-mail</label>
        <input type="email" class="form-control" />
      </div>
      <div class="form-group">
        <span class="d-flex justify-content-between"
          ><label>Senha</label> <i>esqueceu senha!</i></span
        >
        <input type="password" class="form-control" />
      </div>
    </form>
  </div>
</template>

<script>
import NavbarPage from "@/components/NavbarPage.vue";
export default {
  components: {
    NavbarPage,
  },
};
</script>

<style>
</style>