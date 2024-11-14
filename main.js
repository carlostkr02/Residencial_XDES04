document.addEventListener("DOMContentLoaded", function () {

    // Dados simulados
    let moradores = [];
    let pagamentos = [];

    // Função para validar CPF
    function validarCPF(cpf) {
        const regex = /^\d{11}$/;
        return regex.test(cpf);
    }

    // Função para validar data de pagamento
    function validarData(data) {
        const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
        return regex.test(data);
    }

    // Função para cadastrar morador
    document.getElementById("formCadastroMorador").addEventListener("submit", function (event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value;
        const endereco = document.getElementById("endereco").value;
        const dataNascimento = document.getElementById("dataNascimento").value;
        const cpf = document.getElementById("cpf").value;
        const telefone = document.getElementById("telefone").value;
        const celular = document.getElementById("celular").value;
        const unidade = document.getElementById("unidade").value;
        const email = document.getElementById("email").value;

        // Validações
        if (!nome || !dataNascimento || !cpf || !celular || !unidade) {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        // Simula a adição do morador
        moradores.push({ nome, endereco, dataNascimento, cpf, telefone, celular, unidade, email });
        alert("Morador cadastrado com sucesso!");

        // Limpar o formulário
        document.getElementById("formCadastroMorador").reset();
    });

    // Função para cadastrar pagamento
    document.getElementById("formCadastroPagamento").addEventListener("submit", function (event) {
        event.preventDefault();

        const nome = document.getElementById("nomePagamento").value;
        const dataPagamento = document.getElementById("dataPagamento").value;
        const valorPagamento = document.getElementById("valorPagamento").value;
        const tipoTaxa = document.getElementById("tipoTaxa").value;
        const formaPagamento = document.getElementById("formaPagamento").value;

        // Validações
        if (!nome || !dataPagamento || !valorPagamento || !tipoTaxa || !formaPagamento) {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        if (!validarData(dataPagamento)) {
            alert("Data de pagamento inválida.");
            return;
        }

        // Adicionando o pagamento
        const pagamento = {
            nome,
            dataPagamento,
            valorPagamento,
            tipoTaxa,
            formaPagamento,
            status: "Pendente" // Status inicial
        };
        pagamentos.push(pagamento);
        alert("Pagamento cadastrado com sucesso!");

        // Limpar o formulário
        document.getElementById("formCadastroPagamento").reset();
    });

    // Função para consultar pagamentos
    document.getElementById("formConsultaPagamento").addEventListener("submit", function (event) {
        event.preventDefault();

        const filtroNomePagamento = document.getElementById("filtroNomePagamento").value.toLowerCase();
        const filtroTipoTaxa = document.getElementById("filtroTipoTaxa").value;
        const filtroStatusPagamento = document.getElementById("filtroStatusPagamento").value;

        const resultados = pagamentos.filter(pagamento => {
            return (
                (filtroNomePagamento === "" || pagamento.nome.toLowerCase().includes(filtroNomePagamento)) &&
                (filtroTipoTaxa === "" || pagamento.tipoTaxa === filtroTipoTaxa) &&
                (filtroStatusPagamento === "" || pagamento.status === filtroStatusPagamento)
            );
        });

        // Exibir os resultados na tabela
        const tabelaResultadoPagamento = document.getElementById("tabelaResultadoPagamento");
        tabelaResultadoPagamento.innerHTML = ""; // Limpar a tabela

        resultados.forEach((pagamento, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${pagamento.nome}</td>
                <td>${pagamento.dataPagamento}</td>
                <td>${pagamento.valorPagamento}</td>
                <td>${pagamento.tipoTaxa}</td>
                <td>${pagamento.status}</td>
                <td>
                    <button onclick="atualizarPagamento(${index})">Atualizar</button>
                    <button onclick="removerPagamento(${index})">Remover</button>
                </td>
            `;
            tabelaResultadoPagamento.appendChild(row);
        });
    });

    // Função para atualizar o status do pagamento
    window.atualizarPagamento = function (index) {
        const novoStatus = prompt("Digite o novo status do pagamento (Pago, Pendente, Atrasado):");
        if (novoStatus) {
            pagamentos[index].status = novoStatus;
            alert("Status atualizado!");
            document.getElementById("formConsultaPagamento").submit(); // Atualiza a lista de pagamentos
        }
    };

    // Função para remover um pagamento
    window.removerPagamento = function (index) {
        const confirmacao = confirm("Tem certeza que deseja remover este pagamento?");
        if (confirmacao) {
            pagamentos.splice(index, 1);
            alert("Pagamento removido com sucesso!");
            document.getElementById("formConsultaPagamento").submit(); // Atualiza a lista de pagamentos
        }
    };

});
