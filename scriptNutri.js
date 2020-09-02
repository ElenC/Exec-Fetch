for(let i=0; i<5; i++){

fetch("https://www.themealdb.com/api/json/v1/1/random.php")
.then (resp => resp.json())
.then(json =>{

        let refeicao = json.meals[0].strMeal
        let categoria = json.meals[0].strCategory
        let receitaInstru = json.meals[0].strInstructions
        let pict = json.meals[0].strMealThumb   
        let ingrediente 
        let quant 
        console.log(json)

        for(let j = 0; j<21; j++){
            let ingred = json.meals[0]['strIngredient' + j]
            if(ingred != "" && ingred != null && ingred != undefined ){
                ingrediente += `<br>${ingred}`
            }
        }
        for(let k =0; k<21; k++){
            let quantidade = json.meals[0]['strMeasure' + k]
            if(quantidade != "" && quantidade != null && quantidade != undefined ){
                quant += `<br>${quantidade}`
            }
        }
        let days = ['Segunda-Feira', 'Terça-Feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira']
        let principal = document.getElementById('nutri-Principal')
        
        principal.innerHTML += `<div id="${i}" class="div-princ">
       
        <h1>${days[i]}</h1>
        <p>${refeicao}</p>
        <img src="${pict}" width="20%">
        <h2>Categoria</h2><p>${categoria}</p>
        <h2>Receita</h2><p>${receitaInstru}</p><br>
        <h2>Ingrediente</h2><p class="receita">${ingrediente}</p>
        <h2>Quantidade</h2><p class="receita">${quant}</p></div>`

})

}







