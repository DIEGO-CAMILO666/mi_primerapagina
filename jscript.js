const nombre=document.getElementById("Name");
const precio=document.getElementById("Price");
const inventario=document.getElementById("Inventory");
const form=document.getElementById("form");

function Mensaje(){
    document.write("El producto fue creado");

}

form.addEventListener("submit",Mensaje ,true);



