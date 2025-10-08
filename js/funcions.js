function confirmaRegistre(){
    alert("registrant estudiant");
    document.getElementById("formDiv").innerHTML = "<p class='important'>T'has registrat amb èxit!</p>";
    console.log("registrant estudiant");
    return false;
}

async function carregaMencions(){
    //Step Zero
    let grau = document = getElementById("graus").value
    //Step One
    let response = await fetch("https://tdiw-d6.deic-docencia.uab.cat/problems/yc/pq/tdiw"+grau)
    //Step Two
    let options = response.text()
    //Step three
    document.getElementById("mencions").innerHTML = options
}