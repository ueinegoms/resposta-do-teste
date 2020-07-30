<template>
  <div class="flex">
    <div class="fullwidth flexcolumn space-top">
      <label class="blue">Lista de Clientes</label>
    </div>
    <div class="fullwidth flexcolumn hr"></div>
    <div class="fullwidth flexcolumn">
      <label for="nome">Nome do Cliente</label>
      <input id="nome" type="text" placeholder v-model="cadastro.nome" />
    </div>
    <div class="fullwidth table-full space-top">
      <table>
        <tr>
          <th>Testeeeeeeeeeeeeeee</th>
          <th>Testeeeeeeeeeeeeeee1</th>
          <th>Testeeeeeeeeeeeeeee2</th>
          <th>Testeeeeeeeeeeeeeee3</th>
          <th>Testeeeeeeeeeeeeeee4</th>
          <th>Testeeeeeeeeeeeeeee5</th>
          <th>Testeeeeeeeeeeeeeee6</th>
        </tr>
        <tr>
          <td>teste</td>
          <td>teste1</td>
          <td>teste2</td>
          <td>teste3</td>
          <td>teste4</td>
          <td>teste5</td>
          <td>teste6</td>
        </tr>
        <tr>
          <td>teste</td>
          <td>teste1</td>
          <td>teste2</td>
          <td>teste3</td>
          <td>teste4</td>
          <td>teste5</td>
          <td>teste6</td>
        </tr>
        <tr>
          <td>teste</td>
          <td>teste1</td>
          <td>teste2</td>
          <td>teste3</td>
          <td>teste4</td>
          <td>teste5</td>
          <td>teste6</td>
        </tr>
        <tr>
          <td>teste</td>
          <td>teste1</td>
          <td>teste2</td>
          <td>teste3</td>
          <td>teste4</td>
          <td>teste5</td>
          <td>teste6</td>
        </tr>
        <tr>
          <td>teste</td>
          <td>teste1</td>
          <td>teste2</td>
          <td>teste3</td>
          <td>teste4</td>
          <td>teste5</td>
          <td>teste6</td>
        </tr>
        <tr>
          <td>teste</td>
          <td>teste1</td>
          <td>teste2</td>
          <td>teste3</td>
          <td>teste4</td>
          <td>teste5</td>
          <td>teste6</td>
        </tr>
        <tr>
          <td>teste</td>
          <td>teste1</td>
          <td>teste2</td>
          <td>teste3</td>
          <td>teste4</td>
          <td>teste5</td>
          <td>teste6</td>
        </tr>
        <tr>
          <td>teste</td>
          <td>teste1</td>
          <td>teste2</td>
          <td>teste3</td>
          <td>teste4</td>
          <td>teste5</td>
          <td>teste6</td>
        </tr>
        <tr>
          <td>teste</td>
          <td>teste1</td>
          <td>teste2</td>
          <td>teste3</td>
          <td>teste4</td>
          <td>teste5</td>
          <td>teste6</td>
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
  data() {
    return {
      cadastro: {
        nome: null,
        email: null,
        cpf: null,
        cartao: {}
      },
      id: null
    };
  }
};
</script>
