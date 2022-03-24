<template>
  <header>
    <div class="logo">
      <img
        src="@/assets/logo.png"
        alt="Logo marca da loja bololand."
        title="Logomarca Bololand"
      />
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderPage",
};
</script>

<style scoped>
header {
  background-image: url(@/assets/img/produtos/bake-1003685_960_720.jpg);
  background-position: center;
  background-size: cover;
  height: 100%;
  min-height: 230px;
  /* text-align: center; */
  /* padding: 60px; */
}
</style>