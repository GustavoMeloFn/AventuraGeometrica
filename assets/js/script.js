function calcCirculo(){
    let raioCirculo = document.getElementById("raio").value;

    raioCirculo = parseInt(raioCirculo);

    let area = (raioCirculo * raioCirculo) * Math.PI;

    document.getElementById("resultado").textContent = area.toFixed(2);
}

function calcTronco(){

    let raioMaior = parseFloat(document.getElementById('raioMaior').value); //20.0
    let raioMenor = parseFloat(document.getElementById('raioMenor').value);
    let altura = parseFloat(document.getElementById('altura').value);
    let area = Math.PI * (raioMaior + raioMenor) * (raioMaior - raioMenor + Math.sqrt(Math.pow(altura, 2) + Math.pow(raioMaior - raioMenor, 2)));

    document.getElementById("resultado").textContent = area.toFixed(2);
}

function calcRetangulo(){
    let ladoMaior = document.getElementById("ladoMaior").value;
    let ladoMenor = document.getElementById("ladoMenor").value;

    ladoMaior = parseInt(ladoMaior);
    ladoMenor = parseInt(ladoMenor);

    let result = ladoMaior * ladoMenor;

    document.getElementById("resultado").textContent = result;
}

function calcCoroa(){
    let raioExterno = document.getElementById("raioExterno").value;
    let raioInterno = document.getElementById("raioInterno").value;

    raioExterno = parseInt(raioExterno);
    raioInterno = parseInt(raioInterno);

    raioExterno = raioExterno * raioExterno;
    raioInterno = raioInterno * raioInterno;

    let area = (raioExterno - raioInterno) * Math.PI;

    document.getElementById("resultado").textContent = area.toFixed(2);
}

function calcTrapezoid(){
    let baseMaior = parseInt(document.getElementById("baseMaior").value);
    let baseMenor = parseInt(document.getElementById("baseMenor").value);
    let altura = parseInt(document.getElementById("alturaTrapezoid").value);

    let area = ((baseMaior + baseMenor) / 2) * altura;

    document.getElementById("resultado").textContent = area.toFixed(2);
 
}

function calcPoligon(){
    /*querySelector vai verificar qual elemento dentre os radio buttom foi selecionado dentro do agrupamento    
    " name='choose' ", me possibilitando uma futura verificação*/
    let choose = document.querySelector('input[name="choose"]:checked');
    let valorEscolhido = choose.value;
    let comprimentoLado = parseInt(document.getElementById("comprimentoLado").value);

    if(valorEscolhido == "1"){
        let areaTotal = ((Math.pow(comprimentoLado, 2) * 5)/(4 * Math.tan(Math.PI / 5)));
        document.getElementById("resultado").textContent = areaTotal.toFixed(2);

    }else if(valorEscolhido == "2"){
        let areaTotal = ((Math.pow(comprimentoLado, 2) * 6)/(4 * Math.tan(Math.PI / 6)));
        document.getElementById("resultado").textContent = areaTotal.toFixed(2);

    }else if(valorEscolhido == "3"){
        let areaTotal = ((Math.pow(comprimentoLado, 2) * 7)/(4 * Math.tan(Math.PI / 7)));
        document.getElementById("resultado").textContent = areaTotal.toFixed(2);
    }
}

function calcQuadrado(){
    let lado = document.getElementById("ladoQuadrado").value;
    lado = parseInt(lado);

    let area = lado * lado;

    document.getElementById("resultado").textContent = area;
}

function calcSetorCircular(){
    let raioMaior = parseFloat(document.getElementById("raioMaior").value);
    let angulo = parseFloat(document.getElementById("angulo").value);
    
    let area = Math.PI * (Math.pow(raioMaior, 2) - Math.pow(angulo, 2));
    document.getElementById("resultado").textContent = area.toFixed(2);
}
