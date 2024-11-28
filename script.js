let moradores = [];
let pagamentos = [];
let documentos = [];
let manutencoes = [];

// Função para carregar o conteúdo da seção
function carregarSecao(secao) {
  const conteudo = document.getElementById("conteudo");
  conteudo.innerHTML = ""; // Limpa o conteúdo atual

  switch (secao) {
    case "moradores":
      conteudo.innerHTML = `
        <h2>Gerenciamento de Moradores</h2>
        <form id="form-moradores">
          <div class="mb-3">
            <label for="nome" class="form-label">Nome</label>
            <input type="text" id="nome" class="form-control" required>
          </div>
          <div class="mb-3">
            <label for="endereco" class="form-label">Endereço</label>
            <input type="text" id="endereco" class="form-control" required>
          </div>
          <div class="mb-3">
            <label for="dataNascimento" class="form-label">Data de Nascimento</label>
            <input type="date" id="dataNascimento" class="form-control" required>
          </div>
          <div class="mb-3">
            <label for="cpf" class="form-label">CPF</label>
            <input type="text" id="cpf" class="form-control" required>
          </div>
          <div class="mb-3">
            <label for="telefone" class="form-label">Telefone</label>
            <input type="text" id="telefone" class="form-control" required>
          </div>
          <div class="mb-3">
            <label for="celular" class="form-label">Celular</label>
            <input type="text" id="celular" class="form-control" required>
          </div>
          <div class="mb-3">
            <label for="unidade" class="form-label">Unidade</label>
            <input type="text" id="unidade" class="form-control" required>
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">E-mail</label>
            <input type="email" id="email" class="form-control" required>
          </div>
          <button type="submit" class="btn btn-primary">Adicionar Morador</button>
        </form>
        <ul id="lista-moradores" class="mt-4"></ul>
      `;
      const formMoradores = document.getElementById("form-moradores");
      formMoradores.onsubmit = function (e) {
        e.preventDefault();
        const nome = document.getElementById("nome").value;
        const endereco = document.getElementById("endereco").value;
        const dataNascimento = document.getElementById("dataNascimento").value;
        const cpf = document.getElementById("cpf").value;
        const telefone = document.getElementById("telefone").value;
        const celular = document.getElementById("celular").value;
        const unidade = document.getElementById("unidade").value;
        const email = document.getElementById("email").value;

        moradores.push({ nome, endereco, dataNascimento, cpf, telefone, celular, unidade, email });
        atualizarListaCRUD("lista-moradores", moradores, "moradores");
        formMoradores.reset();
        gerarGraficoMoradores(); // Gera o gráfico de moradores após adicionar
      };
      atualizarListaCRUD("lista-moradores", moradores, "moradores");
      break;

    case "pagamentos":
      conteudo.innerHTML = `
        <h2>Gerenciamento de Pagamentos</h2>
        <form id="form-pagamentos">
          <div class="mb-3">
            <label for="nomeMorador" class="form-label">Nome do Morador</label>
            <input type="text" id="nomeMorador" class="form-control" required>
          </div>
          <div class="mb-3">
            <label for="dataPagamento" class="form-label">Data do Pagamento</label>
            <input type="date" id="dataPagamento" class="form-control" required>
          </div>
          <div class="mb-3">
            <label for="valorPagamento" class="form-label">Valor do Pagamento</label>
            <input type="number" id="valorPagamento" class="form-control" required>
          </div>
          <div class="mb-3">
            <label for="tipoTaxa" class="form-label">Tipo de Taxa</label>
            <select id="tipoTaxa" class="form-control" required>
              <option value="manutencao">Taxa de Manutenção</option>
              <option value="agua">Taxa de Água</option>
              <option value="luz">Taxa de Luz</option>
              <option value="condominio">Condomínio</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="formaPagamento" class="form-label">Forma de Pagamento</label>
            <select id="formaPagamento" class="form-control" required>
              <option value="dinheiro">Dinheiro</option>
              <option value="cartaoCredito">Cartão de Crédito</option>
              <option value="transferencia">Transferência Bancária</option>
            </select>
          </div>
          <button type="submit" class="btn btn-primary">Adicionar Pagamento</button>
        </form>
        <ul id="lista-pagamentos" class="mt-4"></ul>
      `;
      const formPagamentos = document.getElementById("form-pagamentos");
      formPagamentos.onsubmit = function (e) {
        e.preventDefault();
        const nomeMorador = document.getElementById("nomeMorador").value;
        const dataPagamento = document.getElementById("dataPagamento").value;
        const valorPagamento = parseFloat(document.getElementById("valorPagamento").value);
        const tipoTaxa = document.getElementById("tipoTaxa").value;
        const formaPagamento = document.getElementById("formaPagamento").value;

        pagamentos.push({ nomeMorador, dataPagamento, valorPagamento, tipoTaxa, formaPagamento });
        atualizarListaCRUD("lista-pagamentos", pagamentos, "pagamentos");
        formPagamentos.reset();
        gerarGraficoFaturamento(); // Gera o gráfico de faturamento após adicionar
      };
      atualizarListaCRUD("lista-pagamentos", pagamentos, "pagamentos");
      break;

    case "documentos":
      conteudo.innerHTML = `
        <h2>Gerenciamento de Documentos</h2>
        <form id="form-documentos">
          <div class="mb-3">
            <label for="titulo" class="form-label">Título</label>
            <input type="text" id="titulo" class="form-control" required>
          </div>
          <div class="mb-3">
            <label for="data" class="form-label">Data</label>
            <input type="date" id="data" class="form-control" required>
          </div>
          <button type="submit" class="btn btn-primary">Adicionar Documento</button>
        </form>
        <ul id="lista-documentos" class="mt-4"></ul>
      `;
      const formDocumentos = document.getElementById("form-documentos");
      formDocumentos.onsubmit = function (e) {
        e.preventDefault();
        const titulo = document.getElementById("titulo").value;
        const data = document.getElementById("data").value;
        documentos.push({ titulo, data });
        atualizarListaCRUD("lista-documentos", documentos, "documentos");
        formDocumentos.reset();
      };
      atualizarListaCRUD("lista-documentos", documentos, "documentos");
      break;

    case "manutencoes":
      conteudo.innerHTML = `
        <h2>Gerenciamento de Manutenções</h2>
        <form id="form-manutencoes">
          <div class="mb-3">
            <label for="descricao" class="form-label">Descrição</label>
            <input type="text" id="descricao" class="form-control" required>
          </div>
          <div class="mb-3">
            <label for="data" class="form-label">Data</label>
            <input type="date" id="data" class="form-control" required>
          </div>
          <button type="submit" class="btn btn-primary">Adicionar Manutenção</button>
        </form>
        <ul id="lista-manutencoes" class="mt-4"></ul>
      `;
      const formManutencoes = document.getElementById("form-manutencoes");
      formManutencoes.onsubmit = function (e) {
        e.preventDefault();
        const descricao = document.getElementById("descricao").value;
        const data = document.getElementById("data").value;
        manutencoes.push({ descricao, data });
        atualizarListaCRUD("lista-manutencoes", manutencoes, "manutencoes");
        formManutencoes.reset();
      };
      atualizarListaCRUD("lista-manutencoes", manutencoes, "manutencoes");
      break;

    case "relatorios":
      conteudo.innerHTML = `
        <h2>Relatórios</h2>
        <div class="mt-4">
          <h4>Gráfico de Faturamento</h4>
          <canvas id="grafico-faturamento"></canvas>
        </div>
        <div class="mt-4">
          <h4>Relatório de Moradores</h4>
          <canvas id="grafico-moradores"></canvas>
        </div>
      `;
      gerarGraficoFaturamento();
      gerarGraficoMoradores();
      break;

    default:
      conteudo.innerHTML = `<h2>Bem-vindo ao Residencial Village Inn</h2>`;
  }
}

function gerarGraficoFaturamento() {
  const ctx = document.getElementById('grafico-faturamento').getContext('2d');
  const totalPorTaxa = pagamentos.reduce((acc, pagamento) => {
    acc[pagamento.tipoTaxa] = (acc[pagamento.tipoTaxa] || 0) + pagamento.valorPagamento;
    return acc;
  }, {});

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: Object.keys(totalPorTaxa),
      datasets: [{
        label: 'Faturamento por Taxa',
        data: Object.values(totalPorTaxa),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

function gerarGraficoMoradores() {
  const ctx = document.getElementById('grafico-moradores').getContext('2d');
  const totalMoradoresPorUnidade = moradores.reduce((acc, morador) => {
    acc[morador.unidade] = (acc[morador.unidade] || 0) + 1;
    return acc;
  }, {});

  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: Object.keys(totalMoradoresPorUnidade),
      datasets: [{
        label: 'Moradores por Unidade',
        data: Object.values(totalMoradoresPorUnidade),
        backgroundColor: ['#FF5733', '#33FF57', '#3357FF', '#F1C40F'],
        borderWidth: 1
      }]
    }
  });
}

function atualizarListaCRUD(elementId, lista, tipo) {
  const listaElement = document.getElementById(elementId);
  listaElement.innerHTML = lista
    .map((item, index) =>
      tipo === "moradores"
        ? `<li>${item.nome} (${item.unidade}) 
          <button class="btn btn-sm btn-warning" onclick="editarItem('${tipo}', ${index})">Editar</button>
          <button class="btn btn-sm btn-danger" onclick="removerItem('${tipo}', ${index})">Remover</button>
        </li>`
        : tipo === "pagamentos"
        ? `<li>${item.nomeMorador} - R$${item.valorPagamento.toFixed(2)} (${item.tipoTaxa} - ${item.formaPagamento}) 
          <button class="btn btn-sm btn-warning" onclick="editarItem('${tipo}', ${index})">Editar</button>
          <button class="btn btn-sm btn-danger" onclick="removerItem('${tipo}', ${index})">Remover</button>
        </li>`
        : tipo === "documentos"
        ? `<li>${item.titulo} (${item.data}) 
          <button class="btn btn-sm btn-warning" onclick="editarItem('${tipo}', ${index})">Editar</button>
          <button class="btn btn-sm btn-danger" onclick="removerItem('${tipo}', ${index})">Remover</button>
        </li>`
        : `<li>${item.descricao} (${item.data}) 
          <button class="btn btn-sm btn-warning" onclick="editarItem('${tipo}', ${index})">Editar</button>
          <button class="btn btn-sm btn-danger" onclick="removerItem('${tipo}', ${index})">Remover</button>
        </li>`
    )
    .join("");
}

document.addEventListener("DOMContentLoaded", function () {
  carregarSecao("moradores");

  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const secao = this.getAttribute("data-section");
      carregarSecao(secao);

      document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
      this.classList.add("active");
    });
  });
});
