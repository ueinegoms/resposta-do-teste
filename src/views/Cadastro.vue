<template>
  <div class="flex">
    <!-- <h1>This is an about page</h1> -->
    <div class="fullwidth flexcolumn space-top">
      <label for="nome">Nome</label>
      <input id="nome" type="text" placeholder v-model="cadastro.nome" />
    </div>
    <div class="fullwidth flexcolumn">
      <label for="email">Email</label>
      <input id="email" type="text" placeholder v-model="cadastro.email" />
    </div>
    <div class="fullwidth flexcolumn">
      <label for="cpf">Cpf</label>
      <input id="cpf" type="text" placeholder v-model="cadastro.cpf" />
    </div>
    <div class="halfwidth flexcolumn">
      <label for="endereco">Endereço</label>
      <input id="endereco" type="text" placeholder v-model="cadastro.endereco" />
    </div>
    <div class="halfwidthSpace"></div>
    <div class="halfwidth flexcolumn">
      <label for="estado">Estado</label>
      <input id="estado" type="text" placeholder v-model="cadastro.estado" />
    </div>
    <div class="halfwidth flexcolumn">
      <label for="cep">Cep</label>
      <input id="cep" type="text" placeholder v-model="cadastro.cep" />
    </div>
    <div class="halfwidthSpace"></div>
    <div class="halfwidth flexcolumn">
      <label for="cidade">Cidade</label>
      <input id="cidade" type="text" placeholder v-model="cadastro.cidade" />
    </div>
    <div class="fullwidth flexcolumn space-top">
      <label class="blue">Forma de Pagamento</label>
    </div>
    <div class="fullwidth flexcolumn hr"></div>
    <div class="fullwidth flex space-top">
      <div class="fullwidthmobile">
        <input type="radio" id="credito" name="opcaopagamento" value="credito" />
        <label for="credito">Cartão de Crédito</label>
      </div>
      <div class="fullwidthmobile">
        <input type="radio" id="boleto" name="opcaopagamento" value="boleto" />
        <label for="boleto">Boleto Bancário</label>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cadastro: {
        nome: null,
        email: null,
        cpf: null
      },
      id: null
    };
  }
};
</script>