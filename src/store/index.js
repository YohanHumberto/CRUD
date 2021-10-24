import { setBlockTracking } from 'vue';
import { createStore } from 'vuex'

export default createStore({
  state: {
    tareas: [],
    estadoFormulario: false,
    estadoFormularioUpdate: false,
    Total: 0,
    idTareaUpdate: null,
    idIndexDB: 9
  },
  mutations: {
    addTarea(state, payload) {
      try {
        state.tareas.push(payload);
        const { id, marca, modelo, stock } = payload
        fetch(`https://first-proyect-a2674-default-rtdb.firebaseio.com/.json`, {
          method: 'POST',
          body: JSON.stringify({
            id: id,
            marca: marca,
            modelo: modelo,
            stock: stock,
          }),
        })
          .then(res => console.log(res))
      } catch (error) {
        console.log(error)
      }
    },
    traerDatosDB(state) {
      try {
        fetch(`https://first-proyect-a2674-default-rtdb.firebaseio.com/.json`)
          .then(res => res.json())
          .then(data => {
            console.log(data)
            let newarray = []
            for (const id in data) {
              if (data[id].marca !== undefined) {
                newarray.push(data[id]);
              }
            }
            console.log(newarray)
            state.tareas = newarray
          })
      } catch (error) {
        console.log(error)
      }
    },
    removeTarea(state, payload) {

      state.tareas.forEach(el => {
        if (el.id === payload) {
          const index = state.tareas.findIndex(elemento => elemento == el)
          state.tareas.splice(index, 1)
        }
      })

      fetch('https://first-proyect-a2674-default-rtdb.firebaseio.com/.json')
        .then(res => res.json())
        .then(data => {
          console.log("ESTA ES LA DATA:::: ", data)
          for (const key in data) {
            if (data[key].id == payload) {
              fetch(`https://first-proyect-a2674-default-rtdb.firebaseio.com/${key}.json`, { method: 'DELETE' })
                .catch(error => console.log(error))
            }
          }
        }).catch(error=>console.log(error))

    },
    updateTarea(state, payload) {
      state.tareas.forEach(element => {
        if (element.id == payload.id) {
          element = payload
        }

        //PETICION

        fetch('https://first-proyect-a2674-default-rtdb.firebaseio.com/.json').then(res=>res.json())
        .then(data=>{
          for (const key in data) {
              if(data[key].id === payload.id){
                fetch(`https://first-proyect-a2674-default-rtdb.firebaseio.com/${key}/.json`, {
                  method: 'PATCH',
                  body: JSON.stringify(payload)
                })
              }
          }
        })


      });
    },
    btnUpdateTarea(state, id) {
      state.estadoFormularioUpdate = true
      state.idTareaUpdate = id
    },
    desplegarF(state) {
      state.estadoFormulario = true
    },
    salirF(state) {
      state.estadoFormulario = false
      state.estadoFormularioUpdate = false
    },
    calcularTotal(state) {

      if (state.tareas.length == 0) {
        state.Total = 0
        try {
          fetch(`https://first-proyect-a2674-default-rtdb.firebaseio.com/.json`)
            .then(res => res.json())
            .then(data => {
              for (const item in data) {
                if (data[item].stock !== undefined) {
                  state.Total += parseInt(data[item].stock)
                  console.log(data[item].stock)
                }

              }
              console.log("TOTAL::: ", state.Total)
            })
        } catch (error) {
          console.log(error)
        }
        return
      }
      state.Total = state.tareas.map(item => parseInt(item.stock)).reduce((acumulador, item) => acumulador + item)

    
    },
  },
  actions: {
    addTarea({ commit }, tarea) {
      commit('addTarea', tarea)
      commit('calcularTotal')
    },
    removeTarea({ commit }, id) {
      commit('removeTarea', id)
      commit('calcularTotal')
    },
    updateTarea({ commit }, objeto) {
      commit('updateTarea', objeto)
      commit('calcularTotal')
    },
    btnUpdateTarea({ commit }, id) {
      commit('btnUpdateTarea', id)
      commit('calcularTotal')
    },
    desplegarFormulario({ commit }) {
      commit('desplegarF')
    },
    salirFormulario({ commit }) {
      commit('salirF')
    },
     obtenerDatosDB({ commit }) {
       commit('traerDatosDB')
       commit('calcularTotal')
    }

  },
  modules: {
  }
})
