function getRandomInt() {
    return Math.floor(Math.random() * 100) + 1;
}

function createRandomTable() {
    var table = document.createElement('table');

        for (var i = 0; i < 4; i++) {
            var row = table.insertRow();

            for (var j = 0; j < 4; j++) {
                var cell = row.insertCell();
                cell.textContent = getRandomInt();
            }

        }

    document.body.appendChild(table);

}

window.onload = createRandomTable;
