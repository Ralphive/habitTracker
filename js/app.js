$(document).ready(function () {
    $('#addLinha').on('click', function () {
        addLinha(31);
    })

});

inicializaTabela(31);

function inicializaTabela(dias) {
    // Criar a tabela inicial

    // Cria Primeira Coluna 
    $('#habitTable thead').append('<th>	Habito</th>')

    //Cria colunas para os dias
    for (var i = 1; i <= dias; i++) {
        var dia;

        if (i < 10) {
            dia = "0" + i
        } else {
            dia = i
        }

        $('#habitTable thead').append('<th>' + dia + '</th>')
    }


    var linhasIniciais = 5 //Mudar de acordo com o fregues

    for (var linha = 0; linha < linhasIniciais; linha++) {
        addLinha(dias)
    }

    $('#habitTable').DataTable();
}

function CarregaTabela() {
    //Carrega a tabela do usuario

}

function addLinha(dias){
    var strLinha = '<tr>'
        
    strLinha += '<td><input type="text" size="20"/></td>';
    for (var i = 1; i <= dias; i++) {
        strLinha += '<td><input type="checkBox"/></td>';
    }
    strLinha += '</tr>';
    $('#habitTable tbody').append(strLinha)
}
