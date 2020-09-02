
var vt
var vma
var vmo
var vano

function TypeCar(){
    let tipo = document.getElementById('tipoVeiculo')
    const type = tipo.options[tipo.selectedIndex].value
    vt = type
    

    fetch(`https://parallelum.com.br/fipe/api/v1/${vt}/marcas`)
    .then(res => res.json())
    .then(json =>{
        console.log(json)
        let marca = document.getElementById('marca')

        marca.innerHTML=""
        for(let i=0; i<json.length; i++){
        marca.innerHTML +=`<option value="${json[i].codigo}">${json[i].nome}</option>`
        }
    })
}

function MarcaCar(){
    let marca = document.getElementById('marca')
    const marc = marca.options[marca.selectedIndex].value
    vma = marc

    fetch(`https://parallelum.com.br/fipe/api/v1/${vt}/marcas/${vma}/modelos`)
    .then(resp => resp.json())
    .then(json1 =>{
        console.log(json1)
        let modelo = document.getElementById('modelo')

        modelo.innerHTML=""
        for(let i=0; i<json1.modelos.length; i++){
        modelo.innerHTML +=`<option value="${json1.modelos[i].codigo}">${json1.modelos[i].nome}</option>`
        }
    })
}

function ModeloCar(){
    let modelo =document.getElementById('modelo')
    const model = modelo.options[modelo.selectedIndex].value
    vmo = model
    

    fetch(`https://parallelum.com.br/fipe/api/v1/${vt}/marcas/${vma}/modelos/${vmo}/anos`)
    .then(resp => resp.json())
    .then(json2 =>{
        console.log(json2)
        let ano = document.getElementById('ano')

        ano.innerHTML=""
        for(let i=0; i<json2.length; i++){
        ano.innerHTML +=`<option value="${json2[i].codigo}">${json2[i].nome}</option>`
        }
    })
 }

 function AnoCar(){
    let ano = document.getElementById('ano')
    const year = ano.options[ano.selectedIndex].value
    vano = year

    fetch(`https://parallelum.com.br/fipe/api/v1/${vt}/marcas/${vma}/modelos/${vmo}/anos/${vano}`)
    .then(resp => resp.json())
    .then(json3 =>{
        console.log(json3)
        let final = document.getElementById('finalmente')

        let anoFabric = json3.AnoModelo
        let codFrabric = json3.CodigoFipe
        let combusFabric = json3.Combustivel
        let marcaFabric = json3.Marca
        let modelFabric = json3.Modelo
        let valor = json3.Valor

        final.innerHTML += `<br><h2>Marca</h2><p>${marcaFabric}</p>
        <h2>Modelo</h2><p>${modelFabric}</p>
        <h2>Ano</h2><p>${anoFabric}</p>
        <h2>Código FIPE:</h2><p> ${codFrabric}</p>
        <h2>Combustivel</h2><p>  ${combusFabric}</p>
        <h2>Preço:</h2><p>${valor}</p>`
        
    })
 }


