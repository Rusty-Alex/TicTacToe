let field = [
    null, 'cross', null,
    'circle', null, null,
    null, null, null
];
function init() {
    render();
    
}
function render() {
    const content = document.getElementById('content');
    let tableHTML = '<table>';

    for (let i = 0; i < 3; i++) {
        tableHTML += '<tr>';
        for (let j = 0; j < 3; j++) {
            const index = i * 3 + j;
            let symbol =  '';
            if (field[index] === 'circle'){
                symbol = '0';
            }else if(field[index] === 'cross'){
                symbol = 'x';
            }
            tableHTML += `<td>${symbol}</td>`;
        }
        tableHTML += '</tr>';
    }

    tableHTML += '</table>';
    content.innerHTML = tableHTML;
}




