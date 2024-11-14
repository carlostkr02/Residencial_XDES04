from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.firefox.service import Service
import time
from selenium.webdriver.common.alert import Alert

# Caminho do arquivo HTML
caminho_arquivo = 'C:\\Users\\carlosvinicius\\Documents\\carlos v\\htmlcod.html'

# Configuração do WebDriver do Firefox
service = Service('/snap/bin/geckodriver')  # Substitua pelo caminho correto para o geckodriver
driver = webdriver.Firefox(service=service)

def digitar_lentamente(element, texto, atraso=0.1):
    """Função para digitar o texto lentamente no elemento."""
    for caractere in texto:
        element.send_keys(caractere)
        time.sleep(atraso)

def esperar_alerta_e_fechar():
    """Função para esperar e fechar o alerta."""
    try:
        # Espera o alerta aparecer
        alerta = Alert(driver)
        alerta.accept()  # Aceita o alerta para continuar
        time.sleep(10)  # Aumentei o tempo de espera após o alerta
    except:
        pass  # Caso não haja alerta, ignora e continua

def mostrar_popup(mensagem):
    """Função para exibir um pop-up com a mensagem."""
    alert = driver.execute_script(f"alert('{mensagem}');")
    time.sleep(5)  # Aumentei o tempo de espera para você clicar no pop-up

try:
    # Abre o arquivo HTML no navegador
    driver.get("file://" + caminho_arquivo)

    # Tempo para o carregamento da página
    time.sleep(2)

    # --- Cadastro de Morador ---
    # Preenche o campo Nome completo
    campo_nome = driver.find_element(By.ID, "nome")
    digitar_lentamente(campo_nome, "João Silva")

    # Preenche o campo Endereço
    campo_endereco = driver.find_element(By.ID, "endereco")
    digitar_lentamente(campo_endereco, "Rua das Flores, 123")

    # Preenche o campo Data de Nascimento
    campo_data_nascimento = driver.find_element(By.ID, "dataNascimento")
    digitar_lentamente(campo_data_nascimento, "01/01/1980")

    # Preenche o campo CPF
    campo_cpf = driver.find_element(By.ID, "cpf")
    digitar_lentamente(campo_cpf, "123.456.789-00")

    # Preenche o campo Telefone
    campo_telefone = driver.find_element(By.ID, "telefone")
    digitar_lentamente(campo_telefone, "(11) 98765-4321")

    # Preenche o campo Celular
    campo_celular = driver.find_element(By.ID, "celular")
    digitar_lentamente(campo_celular, "(11) 91234-5678")

    # Preenche o campo Unidade
    campo_unidade = driver.find_element(By.ID, "unidade")
    digitar_lentamente(campo_unidade, "101")

    # Preenche o campo Email
    campo_email = driver.find_element(By.ID, "email")
    digitar_lentamente(campo_email, "joao.silva@email.com")

    # Submete o formulário de cadastro de morador
    driver.find_element(By.CSS_SELECTOR, "#formCadastroMorador button[type='submit']").click()

    # Espera e fecha o alerta de cadastro de morador (se existir)
    esperar_alerta_e_fechar()

    # Exibe pop-up de confirmação de cadastro
    mostrar_popup("Cadastro de Morador realizado com sucesso!")

    time.sleep(1)  # Pausa para visualizar a ação

    # --- Cadastro de Pagamento ---
    # Preenche o campo Nome do Morador
    campo_nome_pagamento = driver.find_element(By.ID, "nomePagamento")
    digitar_lentamente(campo_nome_pagamento, "João Silva")

    # Preenche o campo Data do Pagamento
    campo_data_pagamento = driver.find_element(By.ID, "dataPagamento")
    digitar_lentamente(campo_data_pagamento, "10/10/2023")

    # Preenche o campo Valor do Pagamento
    campo_valor_pagamento = driver.find_element(By.ID, "valorPagamento")
    digitar_lentamente(campo_valor_pagamento, "150.00")

    # Seleciona o Tipo de Taxa
    campo_tipo_taxa = driver.find_element(By.ID, "tipoTaxa")
    digitar_lentamente(campo_tipo_taxa, "Taxa de Manutenção")

    # Seleciona a Forma de Pagamento
    campo_forma_pagamento = driver.find_element(By.ID, "formaPagamento")
    digitar_lentamente(campo_forma_pagamento, "Transferência Bancária")

    # Submete o formulário de cadastro de pagamento
    driver.find_element(By.CSS_SELECTOR, "#formCadastroPagamento button[type='submit']").click()

    # Espera e fecha o alerta de cadastro de pagamento (se existir)
    esperar_alerta_e_fechar()

    # Exibe pop-up de confirmação de pagamento
    mostrar_popup("Cadastro de Pagamento realizado com sucesso!")

    time.sleep(2)  # Pausa para visualizar a ação

    # --- Consulta de Pagamento ---
    # Preenche o campo Nome do Morador para consulta
    campo_filtro_nome_pagamento = driver.find_element(By.ID, "filtroNomePagamento")
    digitar_lentamente(campo_filtro_nome_pagamento, "João Silva")

    # Seleciona o Tipo de Taxa para consulta
    campo_filtro_tipo_taxa = driver.find_element(By.ID, "filtroTipoTaxa")
    campo_filtro_tipo_taxa.send_keys("Taxa de Manutenção")

    # Seleciona o Status de Pagamento para consulta
    campo_filtro_status_pagamento = driver.find_element(By.ID, "filtroStatusPagamento")
    campo_filtro_status_pagamento.send_keys("Todos")

    # Submete o formulário de consulta de pagamento
    driver.find_element(By.CSS_SELECTOR, "#formConsultaPagamento button[type='submit']").click()

    # Espera e fecha o alerta de consulta de pagamento (se existir)
    esperar_alerta_e_fechar()

    # Exibe pop-up de resultados da consulta
    mostrar_popup("Consulta de Pagamento realizada com sucesso!")

    time.sleep(50)  # Pausa para visualizar a ação

    # Exibe os resultados da consulta de pagamento na tabela
    resultados = driver.find_elements(By.CSS_SELECTOR, "#tabelaResultadoPagamento tr")
    for resultado in resultados:
        print(resultado.text)

finally:
    # Fecha o navegador
    driver.quit()
