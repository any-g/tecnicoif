console.log("Script Carregado")
function calcularAnos() {
console.log("Botom de Calcular Clicando")
let popAInput=document.getElementById("popA").value.trim()
let taxaAInput=document.getElementById("taxaA").value.trim()
let popBInput=document.getElementById("popB").value.trim()
let taxaBInput=document.getElementById("taxaB").value.trim()

if(popAInput===""|| taxaAInput==="" || popBInput==="" || taxaBInput==="")
alert("Por favor, preencha todos os campos!")

return
}
