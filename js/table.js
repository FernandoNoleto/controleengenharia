var tam = 0

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


    var values = [];

    for (var i = 0; i <= elems.length - 4; i++) {

        if (elems[i].value == '') {
            $('#submitbtn').click(() => { ToastMaker(`Bloco #${i+1} está vazio`) });
            return;
        }
        values[i] = elems[i].value;
    }


    document.getElementById("bloco1").innerHTML = values[0];
    console.log(values);

}

function deleteRows() {

}