<template>
  <div>
    <div class="containerButton">
      <button @click="volverAJugar" style="">REINICIAR</button>
    </div>
    <div class="containerEstado">
      <h1>
        INTENTOS: <span>{{ Intentos }}</span>
      </h1>
      <h1>
        ESTADO: <span>{{ Estado }}</span>
      </h1>
    </div>

    <div class="padreContainer">
      <div id="container" class="container">
        <div
          @click="
            ClickIndeseado
              ? Switches
                ? MostrarItem1(index)
                : MostrarItem2(index)
              : (ClickIndeseado = false)
          "
          class="divimg"
          v-for="(item, index) of cuadro"
          :key="index"
        >
          <img :id="index" class="img" :src="cuadro[index]" alt="ficha" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.padreContainer {
  padding-top: 5px;
  display: grid;
}
.container {
  background: yellow;
  color: black;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 5px;
  max-height: 600px;
  height: 600px;
  width: 1000px;
}
.containerButton {
  display: grid;
  background: rgba(128, 128, 128, 0.53);
  height: 50px;
  margin: auto;
  width: 1000px;
  box-sizing: border-box;
}
.containerEstado {
  display: grid;
  grid-template-columns: 1fr 01.1fr;
  background: #626262;
  height: 50px;
  margin: auto;
  width: 1000px;
  box-sizing: border-box;
  border: 4px solid yellow;
  border-top: none;
}
.containerEstado > h1 {
  margin: auto;
}
.containerEstado > h1 > span {
  background: yellow;
  padding: 4px;
  border-radius: 5px;
}
.containerButton > button {
  background: #626262;
  border: 4px solid yellow;
  border-bottom: 1 solid yellow;
  font-size: 34px;
  font-style: oblique;
  font-weight: bold;
}
.containerButton > button:hover {
  background: #4f4f4f;
  border: 4px solid rgb(175, 175, 6);
  border-bottom: 1 solid rgb(175, 175, 6);
}
.container > div {
  box-sizing: border-box;
  background: #626262;
  color: black;
  height: 145px;
}
.container > div > img {
  height: 100%;
  width: 100%;
}
</style>


<script>
export default {
  data() {
    return {
      contador: 0,
      Switches: true,
      ClickIndex1: null,
      ClickIndeseado: true,
      cudroElemento: require("../assets/square-sharp.svg"),
      Intentos: 40,
      Estado: "Jugando",
      pokemon: [
        require("../assets/bulbasaur.svg"),
        require("../assets/ivysaur.svg"),
        require("../assets/venusaur.svg"),
        require("../assets/charmander.svg"),
        require("../assets/charmeleon.svg"),
        require("../assets/charizard.svg"),
        require("../assets/squirtle.svg"),
        require("../assets/wartortle.svg"),
        require("../assets/blastoise.svg"),
        require("../assets/caterpie.svg"),
        require("../assets/bulbasaur.svg"),
        require("../assets/ivysaur.svg"),
        require("../assets/venusaur.svg"),
        require("../assets/charmander.svg"),
        require("../assets/charmeleon.svg"),
        require("../assets/charizard.svg"),
        require("../assets/squirtle.svg"),
        require("../assets/wartortle.svg"),
        require("../assets/blastoise.svg"),
        require("../assets/caterpie.svg"),
      ],
      cuadro: [
        require("../assets/square-sharp.svg"),
        require("../assets/square-sharp.svg"),
        require("../assets/square-sharp.svg"),
        require("../assets/square-sharp.svg"),
        require("../assets/square-sharp.svg"),
        require("../assets/square-sharp.svg"),
        require("../assets/square-sharp.svg"),
        require("../assets/square-sharp.svg"),
        require("../assets/square-sharp.svg"),
        require("../assets/square-sharp.svg"),
        require("../assets/square-sharp.svg"),
        require("../assets/square-sharp.svg"),
        require("../assets/square-sharp.svg"),
        require("../assets/square-sharp.svg"),
        require("../assets/square-sharp.svg"),
        require("../assets/square-sharp.svg"),
        require("../assets/square-sharp.svg"),
        require("../assets/square-sharp.svg"),
        require("../assets/square-sharp.svg"),
        require("../assets/square-sharp.svg"),
      ],
    };
  },

  methods: {
    Mesclar() {
      this.pokemon = this.pokemon.sort(() => Math.random() - 0.5);
    },

    MostrarItem1(index) {
      if (this.Intentos > 0) {
        if (this.cuadro[index] === this.cudroElemento) {
          this.Switches = false;
          this.ClickIndex1 = index;
          this.cuadro[index] = this.pokemon[index];
        }
      }
    },

    MostrarItem2(index) {
      if (this.Intentos > 0) {
        if (this.cuadro[index] === this.cudroElemento) {
          this.ClickIndeseado = false;
          this.Switches = true;
          this.Intentos--;

          const URL1 = this.pokemon[this.ClickIndex1];
          const URL2 = this.pokemon[index];

          if (this.Intentos <= 0) {
            this.Estado = "PERDISTE";
          }

          if (URL1 == URL2) {
            this.cuadro[index] = this.pokemon[index];
            this.ClickIndeseado = true;
            this.contador++;

            if (this.contador == 10) {
              this.Estado = "GANASTE";
            }
          } else {
            this.cuadro[index] = this.pokemon[index];

            setTimeout(() => {
              this.cuadro[index] = this.cudroElemento;
              this.cuadro[this.ClickIndex1] = this.cudroElemento;
              this.ClickIndeseado = true;
            }, 1000);
          }
        }
      }
    },

    volverAJugar() {
      this.contador = 0;
      this.Switches = true;
      this.ClickIndex1 = null;
      this.ClickIndeseado = true;
      this.Intentos = 40;
      this.Estado = "Jugando";
      for (let index = 0; index < this.pokemon.length; index++) {
        this.cuadro[index] = this.cudroElemento;
      }
    },
  },

  created() {
    this.Mesclar();
  },
};
</script>