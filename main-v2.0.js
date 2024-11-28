// Função para alternar entre páginas (Início, Documentos, Manutenções)
function showPage(pageId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.classList.remove('active')); // Remove a classe ativa de todas as seções
    const activeSection = document.getElementById(pageId);
    if (activeSection) activeSection.classList.add('active'); // Ativa a seção clicada
}

// Função para exibir o CRUD correspondente dentro das abas de Documentos ou Manutenções
function showCrud(crudId) {
    const crudContainerDocumentos = document.getElementById('crudDocumentos');
    const crudContainerManutencoes = document.getElementById('crudManutencoes');

    // Limpa os conteúdos de ambos os contêineres antes de adicionar novo conteúdo
    if (crudContainerDocumentos) crudContainerDocumentos.innerHTML = '';
    if (crudContainerManutencoes) crudContainerManutencoes.innerHTML = '';

    switch (crudId) {
        // CRUD para Documentos
        case 'cadastrarDocumento':
            crudContainerDocumentos.innerHTML = `
                <h2>Cadastrar Documento</h2>
                <form>
                    <label>Tipo de Documento: <input type="text" required></label><br>
                    <label>Título: <input type="text" required></label><br>
                    <label>Data de Emissão: <input type="date" required></label><br>
                    <label>Data de Vencimento: <input type="date"></label><br>
                    <label>Arquivo: <input type="text"></label><br>
                    <label>Observações: <textarea></textarea></label><br>
                    <button type="submit">Salvar</button>
                </form>`;
            break;
        case 'consultarDocumento':
            crudContainerDocumentos.innerHTML = `
                <h2>Consultar Documentos</h2>
                <form>
                    <label>Tipo de Documento: <select><option>Todos</option><option>Contrato</option></select></label><br>
                    <label>Título: <input type="text"></label><br>
                    <label>Data de Emissão: <input type="date"></label><br>
                    <label>Data de Vencimento: <input type="date"></label><br>
                    <button type="submit">Pesquisar</button>
                </form>`;
            break;

        // CRUD para Manutenções
        case 'cadastrarManutencao':
            crudContainerManutencoes.innerHTML = `
                <h2>Cadastrar Manutenção</h2>
                <form>
                    <label>Título: <input type="text" required></label><br>
                    <label>Descrição: <textarea required></textarea></label><br>
                    <label>Data de Solicitação: <input type="date" required></label><br>
                    <label>Local: <input type="text" required></label><br>
                    <label>Prioridade: 
                        <select>
                            <option>Baixa</option>
                            <option>Média</option>
                            <option>Alta</option>
                            <option>Urgente</option>
                        </select>
                    </label><br>
                    <button type="submit">Salvar</button>
                </form>`;
            break;
        case 'consultarManutencao':
            crudContainerManutencoes.innerHTML = `
                <h2>Consultar Manutenções</h2>
                <form>
                    <label>Status: 
                        <select>
                            <option>Todos</option>
                            <option>Solicitada</option>
                            <option>Em andamento</option>
                            <option>Concluída</option>
                            <option>Cancelada</option>
                        </select>
                    </label><br>
                    <label>Prioridade: 
                        <select>
                            <option>Todos</option>
                            <option>Baixa</option>
                            <option>Média</option>
                            <option>Alta</option>
                            <option>Urgente</option>
                        </select>
                    </label><br>
                    <label>Data de Solicitação: <input type="date"></label><br>
                    <label>Local: <input type="text"></label><br>
                    <button type="submit">Pesquisar</button>
                </form>`;
            break;
        default:
            crudContainerManutencoes.innerHTML = `<p>Selecione uma opção válida.</p>`;
    }
}
