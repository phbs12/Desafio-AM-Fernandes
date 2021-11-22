function criaLinha(imovel) {
    linha = document.createElement("tr");
    tdCidade = document.createElement("td");
    tdBairro = document.createElement("td");
    tdRua = document.createElement("td");
    tdNome = document.createElement("td");
    tdDorms = document.createElement("td");
    tdVagas = document.createElement("td");
    tdMetragem = document.createElement("td");
    tdPreco = document.createElement("td");

    tdCidade.innerHTML = imovel.cidade
    tdBairro.innerHTML = imovel.bairro
    tdRua.innerHTML = imovel.rua
    tdNome.innerHTML = imovel.nome
    tdDorms.innerHTML = imovel.planta.dorms
    if(imovel.planta.vagas>0) {
        tdVagas.innerHTML = imovel.planta.vagas
    }
    else {
        tdVagas.innerHTML = 0
    }
    tdMetragem.innerHTML = imovel.planta.metragem
    tdPreco.innerHTML = imovel.planta.preco 

    linha.appendChild(tdCidade);
    linha.appendChild(tdBairro);
    linha.appendChild(tdRua);
    linha.appendChild(tdNome);
    linha.appendChild(tdDorms);
    linha.appendChild(tdVagas);
    linha.appendChild(tdMetragem);
    linha.appendChild(tdPreco);

    return linha;
}

function main() {
    let request = new XMLHttpRequest()
    request.open("GET", "https://api.estagio.amfernandes.com.br/imoveis", false)
    request.send();
    let data = request.responseText
    let imoveis = JSON.parse(data);
    let tabela = document.getElementById("tabela");
    imoveis.forEach(element => {
        let linha = criaLinha(element);
        tabela.appendChild(linha);
    });
}

main()