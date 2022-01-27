var tam = 0
var values = [];


function addRows() {

    tam++;
    console.log(tam.toString());

    var tbodyRef = document.getElementById("tableblocos").getElementsByTagName('tbody')[0];

    // Insert a row at the end of table
    var newRow = tbodyRef.insertRow();

    // Insert a cell at the end of the row
    var newBloco = newRow.insertCell();

    // Insert a cell at the end of the row
    var newValue = newRow.insertCell();

    // Append a text node to the cell
    var newText = document.createTextNode('Bloco #' + tam);
    newBloco.appendChild(newText);

    // Append a text node to the cell
    var textField = document.createElement("input");
    textField.type = "text";
    textField.value = "";
    newValue.appendChild(textField);




}


function submitValues() {


    var elems = document.getElementsByTagName('input');


    if (elems.length <= 3) {
        alert("Inválido!");
        return;
    }


    for (var i = 0; i <= elems.length - 4; i++) {

        if (elems[i].value == '') {
            $('#submitbtn').click(() => { ToastMaker(`Bloco #${i+1} está vazio`) });
            return;
        }
        values[i] = parseFloat(elems[i].value);
    }

    console.log(values);


    var media_text = document.getElementById("media").innerHTML;
    var somatorio_text = document.getElementById("somatorio").innerHTML;
    var desviopadrao_text = document.getElementById("desviopadrao").innerHTML;
    var variacao_text = document.getElementById("variacao").innerHTML;
    var fck_text = document.getElementById("fck").innerHTML;



    document.getElementById("media").innerHTML = media_text + media();
    document.getElementById("somatorio").innerHTML = somatorio_text + media();
    document.getElementById("desviopadrao").innerHTML = desviopadrao_text + media();
    document.getElementById("variacao").innerHTML = variacao_text + media();
    document.getElementById("fck").innerHTML = fck_text + media();
}

function deleteRows() {

}


function media() {

    var aux = 0;

    for (let i = 0; i < values.length; i++) {
        aux += values[i];
        console.log(values[i]);
    }


    return (aux / values.length);
}

function somatorio() {

}


function desvio_padrao() {

}

function variacao() {

}

function fck() {

}