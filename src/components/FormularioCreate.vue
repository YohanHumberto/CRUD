<template>
  <div class="container">
    <form @submit.prevent="procesarFormulario">
      <h1>NUEVO</h1>
      <input type="text" placeholder="Marca" v-model="tarea.marca" required />
      <input type="text" placeholder="Modelo" v-model="tarea.modelo" required />
      <input type="number" placeholder="Stock" v-model="tarea.stock" required />
      <div>
        <button type="submit" class="btn-1">Guardar</button>
        <button @click.prevent="salirFormulario" class="btn-2">Cancelar</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      tarea: {
        id: null,
        marca: null,
        modelo: null,
        stock: null,
      },
    };
  },

  methods: {
    ...mapActions(["salirFormulario", "addTarea"]),

    procesarFormulario() {
      fetch("https://first-proyect-a2674-default-rtdb.firebaseio.com/.json")
        .then((res) => res.json())
        .then((data) => {

          let ID = data["index"];
          this.tarea.id = ID;
          this.addTarea(this.tarea);

          this.tarea = {
            id: null,
            marca: null,
            modelo: null,
            stock: null,
          };

          fetch('https://first-proyect-a2674-default-rtdb.firebaseio.com/index/.json',{
            method: 'PUT',
            body: ID + 1
          })
          
        });


    },
  },
  computed: {},
};
</script>

<style scoped>
.container {
  position: absolute;
  height: 98.8%;
  width: 99%;
  /* opacity: 0.1; */
}
form {
  display: grid;
  grid-gap: 13px;
  align-items: center;
  height: 300px;
  width: 350px;
  background: rgb(255, 255, 255);
  margin: auto;
  padding: 30px;
  border: 4px solid rgb(88, 88, 88);
  border-radius: 9px;
}
h1 {
  height: 45px;
  margin: 0;
}
input {
  height: 40px;
  width: 90%;
  margin: auto;
  font-size: 20px;
  border-radius: 3px;
  border: 1px solid rgb(88, 88, 88);
}
input:focus {
  border: none;
}
button {
  width: 40%;
  height: 45px;
  margin: auto;
  font-size: 20px;
  color: white;
  border-radius: 3px;
  border: none;
  padding: 5px;
}
div {
  display: flex;
  align-content: space-between;
}
.btn-1 {
  cursor: pointer;
  background: #28a745;
}
.btn-2 {
  cursor: pointer;
  background: #007bff;
}
</style>
   