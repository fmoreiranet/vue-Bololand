<template>
  <main id="home">
    <div class="btnVoltar">
      <a href="#home"><i class="bi bi-arrow-up-circle"></i></a>
    </div>

    <HeaderPage />
    <NavbarPage />

    <section id="propaganda1" class="container bg-black p-0">
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active imgBG1">
            <!-- <img src="img/produtos/p1.jpg" class="d-block w-100" alt="..."> -->
          </div>
          <div class="carousel-item imgBG2">
            <!-- <img src="img/produtos/produto02.jpg" class="d-block w-100" alt="..."> -->
          </div>
          <div class="carousel-item imgBG3">
            <!-- <img src="img/produtos/p3.jpg" class="d-block w-100" alt="..."> -->
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>

    <section id="demostracao" class="container bg-white">
      <div class="row">
        <div class="col-md-2 col-4 text-center py-2">
          <img
            src="icone.png"
            alt="Demostração"
            class="img-fluid imgSocial rounded-circle"
          />
          <h4>Produto</h4>
        </div>
        <div class="col-md-2 col-4 text-center py-2">
          <img
            src="icone.png"
            alt="Demostração"
            class="img-fluid imgSocial rounded-circle"
          />
          <h4>Produto</h4>
        </div>
        <div class="col-md-2 col-4 text-center py-2">
          <img
            src="icone.png"
            alt="Demostração"
            class="img-fluid imgSocial rounded-circle"
          />
          <h4>Produto</h4>
        </div>
        <div class="col-md-2 col-4 text-center py-2">
          <img
            src="icone.png"
            alt="Demostração"
            class="img-fluid imgSocial rounded-circle"
          />
          <h4>Produto</h4>
        </div>
        <div class="col-md-2 col-4 text-center py-2">
          <img
            src="icone.png"
            alt="Demostração"
            class="img-fluid imgSocial rounded-circle"
          />
          <h4>Produto</h4>
        </div>
        <div class="col-md-2 col-4 text-center py-2">
          <img
            src="icone.png"
            alt="Demostração"
            class="img-fluid imgSocial rounded-circle"
          />
          <h4>Produto</h4>
        </div>

        <div class="col-1"></div>
        <div class="demostracaoDetalhe col-10">
          <div
            class="
              bg-black
              text-white
              col-6
              mt-5
              p-2
              position-relative
              top-0
              start-50
            "
          >
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
              adipisci blanditiis, iste debitis.
            </p>
          </div>
        </div>
        <div class="col-1"></div>
      </div>
    </section>

    <section
      id="propaganda2"
      class="clearfix container center bg-black"
    ></section>

    <section id="produtos" class="container clearfix bg-white">
      <!-- <h2>Produto de demostração</h2> -->

      <div class="row">
        <div class="col-6 col-md-3">
          <div class="produtos">
            <div class="p-0">
              <a href="pages/produto-detalhe.html" target="_self">
                <img
                  src="img/produtos/produto01.jpg"
                  alt="Produto 1"
                  class="img-fluid p-0"
                />
              </a>
            </div>
            <div class="p-2">
              <h3>Produto 1</h3>
            </div>
            <div class="px-1">
              <p>Descricação produtos</p>
              <p>Valor produtos</p>
            </div>
            <div class="row px-3">
              <div class="col-md-6 col-12 p-2">
                <div class="form-group">
                  <input
                    type="number"
                    step="1"
                    min="0"
                    max="10"
                    value="0"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="col-md-6 col-12 p-2">
                <div class="">
                  <a href="pages/produto-detalhe.html" target="_blank">
                    <button type="button" class="btn bg-yellow col-12">
                      Comprar
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="container bg-white bg-black p-0">
      <a href="https://www.w3schools.com" target="_blank">
        <img src="img/propaganda/p200x1000-01-2.jpg" alt="" class="img-fluid" />
      </a>
    </section>

    <section id="areaSocial" class="container bg-white">
      <div class="row">
        <div class="col-md-8 col-12 px-5">
          <div class="row produtos p-2 border-circle">
            <div class="col-md-4 col-12 text-center my-auto">
              <img
                src="https://picsum.photos/200/200"
                class="img-fluid rounded-circle"
              />
            </div>
            <div class="col-md-8 col-12 pt-4">
              <div class="border-bottom">
                <h2>Comentario</h2>
                <p>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div class="p-2 text-end fs-3">
                <i class="bi bi-star px-1"></i>
                <i class="bi bi-heart px-1"></i>
                <i class="bi bi-chat-dots px-1"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 retirarElemento">
          <img src="/img/propaganda/p300x800-01.jpg" class="img-fluid" />
        </div>
      </div>
    </section>

    <section class="p-0">
      <a href="https://www.w3schools.com" target="_blank" class="nolink">
        <div id="propaganda4" class="container pt-5">
          <div class="bg-blue white col-md-6 col-12 ms-auto p-2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloremque officiis fuga blanditiis non iste, explicabo aliquid,
              voluptas voluptate neque unde reiciendis libero natus id aut ab
              rerum reprehenderit quidem quisquam.
            </p>
          </div>
        </div>
      </a>
    </section>

    <section id="contatoMap" class="container bg-white">
      <div class="row">
        <div class="col-md-6 col-12">
          <h2 class="text-center text-uppercase">
            Inscreva-se e Receba<br />nossas promoções!
          </h2>
          <form>
            <div class="form-group">
              <label for="" class="form-label"></label>
              <input type="text" class="form-control" placeholder="Nome" />
            </div>
            <div class="row pt-4">
              <div class="form-group col-8">
                <!-- <label for="" class="form-label"></label> -->
                <input
                  type="text"
                  class="form-control"
                  placeholder="E-mail ou telefone"
                />
              </div>

              <div class="form-group col-4">
                <!-- <label for="" class="form-label"></label> -->
                <button type="button" class="btn btn-danger form-control">
                  Submit
                </button>
              </div>
            </div>
          </form>
          <div class="row text-center pt-2">
            <div class="col-6">
              <a href="https://www.instagram.com/bololandmx/" class="nolink">
                <i class="bi bi-instagram icon"></i>
                <b class="fontIcon"> @bololand</b>
              </a>
            </div>
            <div class="col-6">
              <a
                href="https://api.whatsapp.com/send?l=pt-BR&phone=5521981766143&text=Oi"
                class="nolink"
              >
                <i class="bi bi-whatsapp icon"></i>
              </a>
              <a href="tel:+55 21 5555-55555" class="nolink">
                <!-- <i class="bi bi-whatsapp icon"></i> -->
                <b class="fontIcon"> (21)5555-55555</b>
              </a>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2584.1478118994096!2d-46.59717141063949!3d-23.65675093718646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1643415486843!5m2!1spt-BR!2sbr"
            width="99%"
            height="250"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
          >
          </iframe>
          <div class="text-center">
            <b
              >Venha nos visitar ou peça que entragamos!<br />
              Rua dos bolos, 234, São paulo - SP</b
            >
          </div>
        </div>
      </div>
    </section>

    <footer class="bg-blue black bg-gray-light">
      <div class="row">
        <div class="col-12 py-3">
          <div class="row">
            <div class="col-md-2">
              <h4 class="ps-4">Navegação</h4>
              <ul class="listLink">
                <li class="listLink">
                  <a class="nolink" href="#demostracao">Demostração</a>
                </li>
                <li class="listLink">
                  <a class="nolink" href="#produtos">Produtos</a>
                </li>
                <li class="listLink">
                  <a class="nolink" href="#areaSocial">Clientes</a>
                </li>
                <li class="listLink">
                  <a class="nolink" href="#contatoMap">Locais</a>
                </li>
              </ul>
            </div>
            <div class="col-md-3">
              <h4 class="ps-4">Formas de Pagamento</h4>
              <img src="img/pagamento.jpg" alt="" class="img-fluid" />
            </div>
            <div class="col-md-2">
              <h4 class="ps-4">Contatos</h4>
            </div>
            <div class="col-md-2">
              <h4 class="ps-4">Social</h4>
            </div>
            <div class="col-md-3">
              <h4 class="ps-4">Segurança</h4>
            </div>
          </div>
        </div>
        <div class="col-12 bg-gray white copyRight pt-2">
          <a href="" class="nolink">
            <p>Feito por Fabiano</p>
          </a>
        </div>
      </div>
    </footer>
  </main>
</template>

<script>
import HeaderPage from "./HeaderPage.vue";
import NavbarPage from "./NavbarPage.vue";
export default {
  components: {
    HeaderPage,
    NavbarPage,
  },
};
</script>

<style scope>
/* 
Fonte: https://fonts.google.com/specimenTab?standard-styles#about
*/

@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
#propaganda2,
#propaganda3,
#propaganda4 {
  padding: 0;
  background-image: url(../../assets/img/propaganda/p200x1000-01-2.jpg);
  width: 100%;
  height: 100%;
  min-height: 250px;
}

/* Corpo */

body {
  font-family: "Roboto", sans-serif;
  font-size: 1em;
  /*16px*/
  background-color: #a0affb;
}

/* Areas */

section {
  height: 100%;
  min-height: 250px;
  padding: 80px 0;
}

.slides {
  min-height: 500px;
  background-size: cover;
}

.logo {
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 1000;
}

.logo img {
  max-height: 200px;
}

.produtos {
  border-radius: 5px;
  border: solid 1px #bbb;
}

.produtos input,
.produtos button {
  border-radius: 5px;
  border: solid 1px #bbb;
  padding: 5px;
}

.demostracaoDetalhe {
  height: auto;
  min-height: 450px;
  background-image: url(../../assets/img/produtos/produto01.jpg);
  background-position: center;
  background-size: cover;
  font-size: 1.2222em;
}

.vertical {
  display: table-cell;
  vertical-align: middle;
}

.border-circle {
  border-radius: 25px;
}

.imgBG1,
.imgBG2,
.imgBG3 {
  background-size: cover;
  background-position: center;
  min-height: 500px;
}

.imgBG1 {
  background-image: url(../../assets/img/produtos/p1.jpg);
}

.imgBG2 {
  background-image: url(../../assets/img/produtos/produto02.jpg);
}

.imgBG3 {
  background-image: url(../../assets/img/produtos/p3.jpg);
}

.imgSocial {
  padding: 30px;
}

.conteudoCentro {
  height: 100%;
  min-height: 250px;
}

.respansive {
  width: 100%;
}

.listLink {
  text-decoration: none;
  list-style: none;
}

.btnVoltar {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px;
  font-size: 2em;
  /* border: solid 3px;
    border-radius: 50px; */
}

.btnVoltar a {
  text-decoration: none;
}

a {
  color: #555;
}

.nolink {
  text-decoration: none;
  color: inherit;
}

.icon {
  /*32px*/
  font-size: 2em;
}

.fontIcon {
  font-size: 1.2em;
}

.copyRight {
  font-size: 0.8em;
  text-align: right;
}

footer {
  font-size: 0.9em;
}

footer h4 {
  font-size: 0.9em;
  font-weight: bold;
}

/* Media */

@media screen and (max-width: 768px) {
  .retirarElemento {
    display: none;
  }
  .logo {
    width: 100%;
    text-align: center;
  }
  .imgSocial {
    padding: 20px;
  }
}

@media print {
  #propaganda2,
  #propaganda3,
  #propaganda4 {
    display: none;
  }
}
</style>
