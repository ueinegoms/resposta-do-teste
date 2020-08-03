<template>
  <div class="flex">
    <div class="fullwidth flexcolumn space-top">
      <label class="blue">Lista de Clientes</label>
    </div>
    <div class="fullwidth flexcolumn hr"></div>
    <div class="fullwidth flexcolumn">
      <!-- <label for="nome">{{$route.params.id}}</label> -->
      <label for="nome">Nome do Cliente</label>
      <input
        id="nome"
        type="text"
        placeholder="Digite um ID ou Nome"
        v-model="pesquisa"
        @change="criarQueryPesquisar"
      />
    </div>
    <div class="fullwidth table-full space-top">
      <table>
        <tr>
          <th
            v-for="itemCabecalho in tableContent.cabecalho"
            :key="itemCabecalho.id"
            :style="itemCabecalho.style"
          >{{itemCabecalho.valor}}</th>
        </tr>

        <tr v-for="item in itensArray" :key="item.id">
          <td>{{item.nome}}</td>
          <td>{{item.email}}</td>
          <td>{{item.cpf}}</td>
          <td>{{item.cpf}}</td>
        </tr>
      </table>
    </div>

    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Lista",
  components: {
    // HelloWorld
  },
  props: {
    tableContent: {
      type: Object,
      default: () => {
        return {
          // cabeçalho
          cabecalho: [
            // { id: 0, valor: "Nome", style: "text-align: center" },
            { id: 0, valor: "Nome", style: "" },
            { id: 1, valor: "Email", style: "" },
            { id: 2, valor: "Cpf", style: "" },
            { id: 3, valor: "Criado em", style: "" }
          ]
          // conteúdo
          // agora refere à itensArray
        };
      }
    }
  },
  data() {
    return {
      itensArray: [],
      id: null,
      pesquisa: "",
      pesquisaTexto: true,
      query: ""
    };
  },
  mounted: function() {
    if (this.$route.params.id) {
      let actualQuery = new URLSearchParams();
      actualQuery.append("id", this.$route.params.id);
      this.query = `?${actualQuery}`;
    }

    this.mountList();
  },
  methods: {
    mountList: async function() {
      var requestOptions = {
        method: "GET",
        mode: "cors",
        // headers: { 'x-auth-token': user.token },
        // body: JSON.stringify(this.cadastro),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      };
      fetch(
        "https://my-json-server.typicode.com/ueinegoms/fakeApis/cadastros" +
          this.query,
        requestOptions
      ).then(e => {
        e.json().then(e => {
          this.itensArray = e;
        });
      });
    },
    atualizarPagina: function(e) {
      this.pagina = e;
    },
    searchHasChanged: function(val) {
      if (isNaN(parseInt(val))) {
        // se for texto
        console.log("TEXTO");
        this.pesquisaTexto = true;
      } else {
        // se for número
        console.log("NÚMERO");
        this.pesquisaTexto = false;
      }
    },
    criarQueryPesquisar: function() {
      let actualQuery = new URLSearchParams();
      if (this.pesquisaTexto) {
        actualQuery.append("nome", this.pesquisa);
      } else {
        actualQuery.append("id", this.pesquisa);
      }
      this.query = `?${actualQuery}`;
      if (this.pesquisa == "") {
        this.query = "";
      }
      // this.pagina = 1;
      this.mountList();
    }
  },
  watch: {
    pesquisa: function(val) {
      this.searchHasChanged(val);
    },
    '$route.params.id': function(){
      // console.log('route changed' + id)
      this.criarQueryPesquisar();
      this.mountList();
    }
  }
};
</script>
