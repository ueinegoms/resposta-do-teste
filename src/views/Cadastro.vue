<template>
  <div class="flex">
    <!-- <h1>This is an about page</h1> -->
    <div class="fullwidth flexcolumn space-top">
      <label for="nome">
        Nome
        <span class="red">*</span>
      </label>
      <input
        id="nome"
        type="text"
        placeholder
        v-model="cadastros.nome"
        class="obligatory"
        name="Nome"
      />
    </div>
    <div class="fullwidth flexcolumn">
      <label for="email">Email</label>
      <input id="email" type="text" placeholder v-model="cadastros.email" />
    </div>
    <div class="fullwidth flexcolumn">
      <label for="cpf">
        Cpf
        <span class="red">*</span>
      </label>
      <input
        id="cpf"
        type="text"
        placeholder="111.111.111-01"
        v-model="cadastros.cpf"
        v-mask="'###.###.###-##'"
        class="obligatory"
        name="CPF"
      />
    </div>
    <div class="halfwidth flexcolumn">
      <label for="endereco">Endereço</label>
      <input
        id="endereco"
        type="text"
        placeholder="Rua, Número e Bairro"
        v-model="cadastros.endereco"
      />
    </div>
    <div class="halfwidthSpace"></div>
    <div class="halfwidth flexcolumn">
      <label for="estado">Estado</label>
      <input id="estado" type="text" placeholder="Selecione o Estado" v-model="cadastros.estado" />
    </div>
    <div class="halfwidth flexcolumn">
      <label for="cep">Cep</label>
      <input
        id="cep"
        type="text"
        placeholder="22.222-000"
        v-model="cadastros.cep"
        v-mask="'##.###-###'"
      />
    </div>
    <div class="halfwidthSpace"></div>
    <div class="halfwidth flexcolumn">
      <label for="cidade">Cidade</label>
      <input id="cidade" type="text" placeholder="Selecione a Cidade" v-model="cadastros.cidade" />
    </div>
    <div class="fullwidth flexcolumn space-top">
      <label class="blue">Forma de Pagamento</label>
    </div>
    <div class="fullwidth flexcolumn hr"></div>
    <div class="fullwidth flex space-top">
      <div class="fullwidth">
        <div class="fullwidthmobile">
          <input
            type="radio"
            id="credito"
            name="opcaopagamento"
            value="1"
            @click="removeClass('cartaoForm', 'collapsed')"
            v-model="cadastros.cartaoBool"
          />
          <label for="credito">Cartão de Crédito</label>
        </div>
        <div class="fullwidthmobile">
          <input
            type="radio"
            id="boleto"
            name="opcaopagamento"
            value="0"
            @click="addClass('cartaoForm', 'collapsed')"
            v-model="cadastros.cartaoBool"
          />
          <label for="boleto">Boleto Bancário</label>
        </div>
      </div>
      <div class="fullwidth flex transition collapsable" id="cartaoForm">
        <div class="halfwidth flexcolumn">
          <label for="nome">Nome do Cartão</label>
          <input
            id="nome"
            type="text"
            placeholder="Nome Impresso no Cartão"
            v-model="cadastros.cartao.nome"
          />
        </div>
        <div class="halfwidthSpace"></div>
        <div class="halfwidth flexcolumn">
          <label for="cidade">Data de expiração</label>
          <div class="flex">
            <select class="halfwidthfixed" id="cidade" v-model="cadastros.cartao.mes">
              <option value disabled selected hidden>Mês</option>
              <option value="1">Janeiro</option>
              <option value="2">Fevereiro</option>
              <option value="3">Março</option>
              <option value="4">Abril</option>
              <option value="5">Maio</option>
              <option value="6">Junho</option>
              <option value="7">Julho</option>
              <option value="8">Agosto</option>
              <option value="9">Setembro</option>
              <option value="10">Outubro</option>
              <option value="11">Novembro</option>
              <option value="12">Dezembro</option>
            </select>
            <div class="selectArrow"></div>
            <div class="halfwidthfixedspace"></div>
            <select class="halfwidthfixed" id="cidade" v-model="cadastros.cartao.ano">
              <option value disabled selected hidden>Ano</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
              <option value="2028">2028</option>
              <option value="2029">2029</option>
              <option value="2030">2030</option>
              <option value="2031">2031</option>
              <option value="2032">2032</option>
              <option value="2033">2033</option>
              <option value="2034">2034</option>
              <option value="2035">2035</option>
              <option value="2036">2036</option>
              <option value="2037">2037</option>
              <option value="2038">2038</option>
              <option value="2039">2039</option>
              <option value="2040">2040</option>
              <option value="2041">2041</option>
              <option value="2042">2042</option>
              <option value="2043">2043</option>
              <option value="2044">2044</option>
              <option value="2045">2045</option>
              <option value="2046">2046</option>
              <option value="2047">2047</option>
              <option value="2048">2048</option>
              <option value="2049">2049</option>
              <option value="2050">2050</option>
            </select>
            <div class="selectArrow"></div>
          </div>
        </div>
        <div class="halfwidth flexcolumn">
          <label for="nome">Número do Cartão</label>
          <input
            id="nome"
            type="text"
            placeholder="5555 5555 5555 5555"
            v-model="cadastros.cartao.numero"
            v-mask="'#### #### #### ####'"
          />
        </div>
        <div class="halfwidthSpace"></div>
        <div class="halfwidth flexcolumn">
          <label for="nome">Código de Segurança</label>
          <input
            id="nome"
            type="text"
            placeholder="XXX"
            v-model="cadastros.cartao.codSeguranca"
            v-mask="'###'"
          />
        </div>
      </div>
    </div>
    <div class="fullwidth flexcolumn hr space-top"></div>
    <div class="fullwidth flexcolumn space-top">
      <span class="fontw-m mtop red" id="errorMessage">{{errorMessage}}</span>
      <span class="fontw-m mtop">Seu cartão será debitado em R$ 49,00</span>
      <button
        id="btmatricula"
        class="mtop"
        @click="addClassTemporary('btmatricula','animboinkwithbg', 250); postForm()"
      >Realizar Matrícula</button>
      <span class="fontw-l fonts-s mtop">Informações seguras e criptografadas</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cadastros: {
        id: "default",
        nome: null,
        email: null,
        cpf: null,
        endereco: null,
        estado: null,
        cep: null,
        cidade: null,
        cartaoBool: "1",
        cartao: {
          nome: null,
          mes: null,
          ano: null,
          numero: null,
          codSeguranca: null
        }
      },
      id: null,
      errorMessage: ""
    };
  },
  methods: {
    pushRouter: function(newUrl, data) {
      this.$router.push({ path: newUrl + data });
      console.log(data);
    },
    addClassTemporary: function(id, classname, time) {
      document.getElementById(id).classList.add(classname);
      setTimeout(() => {
        document.getElementById(id).classList.remove(classname);
      }, time);
    },
    addClass: function(id, classname) {
      document.getElementById(id).classList.add(classname);
    },
    removeClass: function(id, classname) {
      document.getElementById(id).classList.remove(classname);
    },
    setCollapsesHeight: function() {
      document.getElementsByClassName("collapsable").forEach(element => {
        element.style.height = "auto";
        element.style.height = element.offsetHeight + "px";
      });
    },
    validateForm: function() {
      let ok = true;
      let errorMessage = "Obrigatório os campos: ";
      document.getElementsByClassName("obligatory").forEach(element => {
        // element.style.height = "auto";
        // element.style.height = element.offsetHeight + "px";
        if (element.value == "" || element.value == null) {
          ok = false;
          errorMessage += element.name + "; ";
        }
      });
      if (!ok) {
        this.errorMessage = errorMessage;
      } else {
        this.errorMessage = "";
      }
      return ok;
    },
    postForm: async function() {
      if (this.validateForm()) {
        var requestOptions = {
          method: "POST",
          mode: "cors",
          // headers: { 'x-auth-token': user.token },
          body: JSON.stringify(this.cadastro),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        };
        return fetch(
          "https://my-json-server.typicode.com/ueinegoms/fakeApis/cadastros",
          requestOptions
        )
          .then(this.handleErrors)
          .then(e =>
            e.json().then(e => {
              // return e;
              this.pushRouter("/id/", e.id);
            })
          )
          .catch(() =>
            alert("Houve um problema de conexão, tente novamente mais tarde.")
          )
          .catch(error => console.log(`Erro no fetch: ${error}`));
      }
    }
  },
  mounted: function() {
    this.$nextTick(function() {
      window.addEventListener("resize", this.setCollapsesHeight);
      //Init
      this.setCollapsesHeight();
    });
  }
};
</script>