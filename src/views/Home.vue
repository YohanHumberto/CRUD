<template>
  <div>
    <div v-if="estadoFormulario">
      <FormularioCreate />
    </div>
    <div v-if="estadoFormularioUpdate">
      <FormularioUpdate />
    </div>

    <header>
      <div>
        <h3>CRUD con VueJS</h3>
      </div>
      <div>
        <button @click="desplegarFormulario">
          <img src="../assets/add-circle.svg" alt="" />
        </button>
        <div>
          Stock Total: <span>{{ Total }}</span>
        </div>
      </div>
    </header>

    <div>
      <div class="table">
        <ul class="PF">
          <div>ID</div>
          <div>Marca</div>
          <div>Modelo</div>
          <div>Stock</div>
          <div>Acciones</div>
        </ul>

        <ul
          class="PD"
          v-for="(item, index) in tareas"
          :key="item"
          :style="
            index % 2 == 0
              ? 'background:rgba(178, 181, 181, 0.836)'
              : 'background:rgba(216, 218, 218, 0.836)'
          "
        >
          <div>{{ item.id }}</div>
          <div>{{ item.marca }}</div>
          <div>{{ item.modelo }}</div>
          <div>{{ item.stock }}</div>
          <div>
            <button @click="btnUpdateTarea(item.id)" class="btn-edit-parent">
              <img class="btn-edit" src="../assets/pencil-sharp.svg" alt="" />
            </button>
            <button @click="removeTarea(item.id)" class="btn-delete-parent">
              <img class="btn-delete" src="../assets/trash-sharp.svg" alt="" />
            </button>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import FormularioCreate from "../components/FormularioCreate.vue";
import FormularioUpdate from "../components/FormularioUpdate.vue";
import { mapState, mapActions } from "vuex";
export default {
  components: {
    FormularioCreate,
    FormularioUpdate,
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["desplegarFormulario", "removeTarea", "btnUpdateTarea","obtenerDatosDB"]),
  },
  computed: {
    ...mapState([
      "estadoFormulario",
      "estadoFormularioUpdate",
      "tareas",
      "Total",
    ]),
  },
  created() {
   this.obtenerDatosDB();
  },
};
</script>

<style scoped>
.table {
  display: grid;
  height: auto;
}
.PF {
  display: grid;
  grid-template-columns: 0.2fr 1.1fr 1.1fr 2.1fr 2fr;
  padding: 0;
  height: 100%;
  background: blue;
  color: white;
}
.PF > div {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: 0;
}
.PD {
  display: grid;
  grid-template-columns: 0.2fr 1.1fr 1.1fr 2.1fr 2fr;
  padding: 0;
  height: 100%;
}
.PD > div {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: 0;
}
span {
  background: #28a745;
  border-radius: 2px;
  padding: 4px;
  color: white;
}
header > div {
  padding: 0;
  margin-top: -10px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
}
header > div > div {
  width: 180px;
}
header > div > button {
  background: #28a745;
  padding: 5px;
  border: none;
  border-radius: 5px;
  height: 50px;
  width: 50px;
  cursor: pointer;
}
header > div > button > img {
  height: 40px;
  width: 40px;
  cursor: pointer;
}
header > div > h3 {
  display: flex;
  margin: auto;
  padding: 9px;
  background: #007bff;
  color: white;
  border-radius: 3px;
}
.btn-edit {
  height: 40px;
  width: 40px;
  cursor: pointer;
}
.btn-delete {
  height: 40px;
  width: 40px;
  cursor: pointer;
}
.btn-edit-parent {
  background: #424242;
  padding: 5px;
  border: none;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  height: 50px;
  width: 50px;
  cursor: pointer;
}
.btn-delete-parent {
  background: #d30628;
  padding: 5px;
  border: none;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  height: 50px;
  width: 50px;
  cursor: pointer;
}
</style>