function gerar() {
    let num = document.getElementById('num');
    let tab = document.getElementById('tab');
    

    if (num.value.length == 0) {
        alert('É necessario digitar um número para gerar a tabuada!');
    } else {
        let n = Number(num.value);
        let c = 1;

        while(c <= 10){
            let option = document.createElement('option');
            option.text = `${c} X ${n} = ${c*n}`;
            option.value = `tab ${c}`;
            tab.appendChild(option);
            c++;
        }
    }
}