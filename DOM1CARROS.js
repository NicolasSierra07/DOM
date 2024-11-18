document.addEventListener("DOMContentLoaded", function(){

    let formulario=document.getElementById("frm")
    formulario.addEventListener("submit", function(e){
        e.preventDefault();

        let carro=document.getElementById("car").value
        console.log(carro)

        let alquiler=document.getElementById("alq").value
        console.log(alquiler) 

        let seguro=document.getElementById("seg").value
        console.log(seguro)
        

        let respuesta=document.getElementById("respuesta")

        // Precios base por vehículo
        let precios = {
            "BMW azul": 650000,
            "MEGANE rojo": 120000,
            "MERCEDES negro": 700000,
            "TWINGO verde": 100000,
            "CHEVROLET gris": 150000
        };


        // Calcula el descuento basado en los días de alquiler
        let descuento;
        if (alquiler >= 3 && alquiler <= 5) {
            descuento = seguro === "SI" ? 0.05 : 0.10;
        } else if (alquiler >= 6 && alquiler <= 10) {
            descuento = seguro === "SI" ? 0.10 : 0.15;
        } else if (alquiler > 10) {
            descuento = seguro === "SI" ? 0.15 : 0.20;
        } else {
            descuento = 0;
        }

        let precioBase = precios[carro];
        let preTotal = precioBase * alquiler;
        let total = preTotal - (preTotal * descuento);

        //Primer carro//

        if (carro == "BMW azul" && alquiler <= 2) {
            
            let imagenContainer = document.createElement("div");
            imagenContainer.style.background = "#1f618d"; 
            imagenContainer.innerHTML = '<img src="IMAGENES/BMW.png" alt="Texto alternativo" style="width:350px; height:300px;">';
        
            let textoContainer = document.createElement("div");
            textoContainer.style.background = "orange";
            textoContainer.innerHTML = "<p>El costo del alquiler del vehículo es de: " + total + "</p>";

        
            respuesta.innerHTML = "";
            respuesta.appendChild(imagenContainer);
            respuesta.appendChild(textoContainer);
        }
        else if (carro == "BMW azul" && alquiler <= 5) {
            
            let imagenContainer = document.createElement("div");
            imagenContainer.style.background = "#1f618d"; 
            imagenContainer.innerHTML = '<img src="IMAGENES/BMW.png" alt="Texto alternativo" style="width:350px; height:300px;">';
        
            let textoContainer = document.createElement("div");
            textoContainer.style.background = "yellow";
            textoContainer.innerHTML = "<p>El costo del alquiler del vehículo es de: " + total + "</p>";
        
            respuesta.innerHTML = "";
            respuesta.appendChild(imagenContainer);
            respuesta.appendChild(textoContainer);
        }
        else if (carro == "BMW azul" && alquiler <= 10) {
            
            let imagenContainer = document.createElement("div");
            imagenContainer.style.background = "#1f618d"; 
            imagenContainer.innerHTML = '<img src="IMAGENES/BMW.png" alt="Texto alternativo" style="width:350px; height:300px;">';
        
            let textoContainer = document.createElement("div");
            textoContainer.style.background = "green";
            textoContainer.innerHTML = "<p>El costo del alquiler del vehículo es de: " + total + "</p>";
        
            respuesta.innerHTML = "";
            respuesta.appendChild(imagenContainer);
            respuesta.appendChild(textoContainer);
        }
        else if (carro == "BMW azul" && alquiler > 10) {
            
            let imagenContainer = document.createElement("div");
            imagenContainer.style.background = "#1f618d"; 
            imagenContainer.innerHTML = '<img src="IMAGENES/BMW.png" alt="Texto alternativo" style="width:350px; height:300px;">';
        
            let textoContainer = document.createElement("div");
            textoContainer.style.background = "blue";
            textoContainer.innerHTML = "<p>El costo del alquiler del vehículo es de: " + total + "</p>";
        
            respuesta.innerHTML = "";
            respuesta.appendChild(imagenContainer);
            respuesta.appendChild(textoContainer);
        }

        //Segundo Carro// 

        else if(carro=="MERCEDES negro"  && alquiler <= 2){

            let imagenContainer = document.createElement("div");
            imagenContainer.style.background = "#17202a"; 
            imagenContainer.innerHTML = '<img src="IMAGENES/MERCEDES.png" alt="Texto alternativo" style="width:320px; height:340px;">';
        
            let textoContainer = document.createElement("div");
            textoContainer.style.background = "orange";
            textoContainer.innerHTML = "<p>El costo del alquiler del vehículo es de: " + total + "</p>";
        
            respuesta.innerHTML = "";
            respuesta.appendChild(imagenContainer);
            respuesta.appendChild(textoContainer); 
        }
        else if (carro == "MERCEDES negro" && alquiler <= 5) {
            
            let imagenContainer = document.createElement("div");
            imagenContainer.style.background = "#17202a"; 
            imagenContainer.innerHTML = '<img src="IMAGENES/MERCEDES.png" alt="Texto alternativo" style="width:320px; height:340px;">';
        
            let textoContainer = document.createElement("div");
            textoContainer.style.background = "yellow";
            textoContainer.innerHTML = "<p>El costo del alquiler del vehículo es de: " + total + "</p>";
        
            respuesta.innerHTML = "";
            respuesta.appendChild(imagenContainer);
            respuesta.appendChild(textoContainer);
        }
        else if (carro == "MERCEDES negro" && alquiler <= 10) {
            
            let imagenContainer = document.createElement("div");
            imagenContainer.style.background = "#17202a"; 
            imagenContainer.innerHTML = '<img src="IMAGENES/MERCEDES.png" alt="Texto alternativo" style="width:320px; height:340px;">';
        
            let textoContainer = document.createElement("div");
            textoContainer.style.background = "green";
            textoContainer.innerHTML = "<p>El costo del alquiler del vehículo es de: " + total + "</p>";
        
            respuesta.innerHTML = "";
            respuesta.appendChild(imagenContainer);
            respuesta.appendChild(textoContainer);
        }
        else if (carro == "MERCEDES negro" && alquiler > 10) {
            
            let imagenContainer = document.createElement("div");
            imagenContainer.style.background = "#17202a"; 
            imagenContainer.innerHTML = '<img src="IMAGENES/MERCEDES.png" alt="Texto alternativo" style="width:320px; height:340px;">';
        
            let textoContainer = document.createElement("div");
            textoContainer.style.background = "blue";
            textoContainer.innerHTML = "<p>El costo del alquiler del vehículo es de: " + total + "</p>";
        
            respuesta.innerHTML = "";
            respuesta.appendChild(imagenContainer);
            respuesta.appendChild(textoContainer);
        }

        //Tercer Carro// 
        
        else if(carro=="TWINGO verde"  && alquiler <= 2){

            let imagenContainer = document.createElement("div");
            imagenContainer.style.background = "#138d75"; 
            imagenContainer.innerHTML = '<img src="IMAGENES/TWINGO.png" alt="Texto alternativo" style="width:350px; height:250px;">';
        
            let textoContainer = document.createElement("div");
            textoContainer.style.background = "orange";
            textoContainer.innerHTML = "<p>El costo del alquiler del vehículo es de: " + total + "</p>";
        
            respuesta.innerHTML = "";
            respuesta.appendChild(imagenContainer);
            respuesta.appendChild(textoContainer); 
        }
        else if (carro == "TWINGO verde" && alquiler <= 5) {
            
            let imagenContainer = document.createElement("div");
            imagenContainer.style.background = "#138d75"; 
            imagenContainer.innerHTML = '<img src="IMAGENES/TWINGO.png" alt="Texto alternativo" style="width:350px; height:250px;">';
        
            let textoContainer = document.createElement("div");
            textoContainer.style.background = "yellow";
            textoContainer.innerHTML = "<p>El costo del alquiler del vehículo es de: " + total + "</p>";
        
            respuesta.innerHTML = "";
            respuesta.appendChild(imagenContainer);
            respuesta.appendChild(textoContainer);
        }
        else if (carro == "TWINGO verde" && alquiler <= 10) {
            
            let imagenContainer = document.createElement("div");
            imagenContainer.style.background = "#138d75"; 
            imagenContainer.innerHTML = '<img src="IMAGENES/TWINGO.png" alt="Texto alternativo" style="width:350px; height:250px;">';
        
            let textoContainer = document.createElement("div");
            textoContainer.style.background = "green";
            textoContainer.innerHTML = "<p>El costo del alquiler del vehículo es de: " + total + "</p>";
        
            respuesta.innerHTML = "";
            respuesta.appendChild(imagenContainer);
            respuesta.appendChild(textoContainer);
        }
        else if (carro == "TWINGO verde" && alquiler > 10) {
            
            let imagenContainer = document.createElement("div");
            imagenContainer.style.background = "#138d75"; 
            imagenContainer.innerHTML = '<img src="IMAGENES/TWINGO.png" alt="Texto alternativo" style="width:350px; height:250px;">';
        
            let textoContainer = document.createElement("div");
            textoContainer.style.background = "blue";
            textoContainer.innerHTML = "<p>El costo del alquiler del vehículo es de: " + total + "</p>";
        
            respuesta.innerHTML = "";
            respuesta.appendChild(imagenContainer);
            respuesta.appendChild(textoContainer);
        }

        //Cuarto Carro// 

        else if(carro=="MEGANE rojo"  && alquiler <= 2){

            let imagenContainer = document.createElement("div");
            imagenContainer.style.background = "#c0392b"; 
            imagenContainer.innerHTML = '<img src="IMAGENES/MEGANE.png" alt="Texto alternativo" style="width:350px; height:250px;">';
        
            let textoContainer = document.createElement("div");
            textoContainer.style.background = "orange";
            textoContainer.innerHTML = "<p>El costo del alquiler del vehículo es de: " + total + "</p>";
        
            respuesta.innerHTML = "";
            respuesta.appendChild(imagenContainer);
            respuesta.appendChild(textoContainer); 
        }
        else if (carro == "MEGANE rojo" && alquiler <= 5) {
            
            let imagenContainer = document.createElement("div");
            imagenContainer.style.background = "#c0392b"; 
            imagenContainer.innerHTML = '<img src="IMAGENES/MEGANE.png" alt="Texto alternativo" style="width:350px; height:250px;">';
        
            let textoContainer = document.createElement("div");
            textoContainer.style.background = "yellow";
            textoContainer.innerHTML = "<p>El costo del alquiler del vehículo es de: " + total + "</p>";
        
            respuesta.innerHTML = "";
            respuesta.appendChild(imagenContainer);
            respuesta.appendChild(textoContainer);
        }
        else if (carro == "MEGANE rojo" && alquiler <= 10) {
            
            let imagenContainer = document.createElement("div");
            imagenContainer.style.background = "#c0392b"; 
            imagenContainer.innerHTML = '<img src="IMAGENES/MEGANE.png" alt="Texto alternativo" style="width:350px; height:250px;">';
        
            let textoContainer = document.createElement("div");
            textoContainer.style.background = "green";
            textoContainer.innerHTML = "<p>El costo del alquiler del vehículo es de: " + total + "</p>";
        
            respuesta.innerHTML = "";
            respuesta.appendChild(imagenContainer);
            respuesta.appendChild(textoContainer);
        }
        else if (carro == "MEGANE rojo" && alquiler > 10) {
            
            let imagenContainer = document.createElement("div");
            imagenContainer.style.background = "#c0392b"; 
            imagenContainer.innerHTML = '<img src="IMAGENES/MEGANE.png" alt="Texto alternativo" style="width:350px; height:250px;">';
        
            let textoContainer = document.createElement("div");
            textoContainer.style.background = "blue";
            textoContainer.innerHTML = "<p>El costo del alquiler del vehículo es de: " + total + "</p>";
        
            respuesta.innerHTML = "";
            respuesta.appendChild(imagenContainer);
            respuesta.appendChild(textoContainer);
        }

        //Quinto Carro// 

        else if(carro=="CHEVROLET gris"  && alquiler <= 2){

            let imagenContainer = document.createElement("div");
            imagenContainer.style.background = "#5f6a6a"; 
            imagenContainer.innerHTML = '<img src="IMAGENES/CHEVROLET.png" alt="Texto alternativo" style="width:450px; height:250px;">';
        
            let textoContainer = document.createElement("div");
            textoContainer.style.background = "orange";
            textoContainer.innerHTML = "<p>El costo del alquiler del vehículo es de: " + total + "</p>";
        
            respuesta.innerHTML = "";
            respuesta.appendChild(imagenContainer);
            respuesta.appendChild(textoContainer); 
        }
        else if (carro == "CHEVROLET gris" && alquiler <= 5) {
            
            let imagenContainer = document.createElement("div");
            imagenContainer.style.background = "#5f6a6a"; 
            imagenContainer.innerHTML = '<img src="IMAGENES/CHEVROLET.png" alt="Texto alternativo" style="width:450px; height:250px;">';
        
            let textoContainer = document.createElement("div");
            textoContainer.style.background = "yellow";
            textoContainer.innerHTML = "<p>El costo del alquiler del vehículo es de: " + total + "</p>";
        
            respuesta.innerHTML = "";
            respuesta.appendChild(imagenContainer);
            respuesta.appendChild(textoContainer);
        }
        else if (carro == "CHEVROLET gris" && alquiler <= 10) {
            
            let imagenContainer = document.createElement("div");
            imagenContainer.style.background = "#5f6a6a"; 
            imagenContainer.innerHTML = '<img src="IMAGENES/CHEVROLET.png" alt="Texto alternativo" style="width:450px; height:250px;">';
        
            let textoContainer = document.createElement("div");
            textoContainer.style.background = "green";
            textoContainer.innerHTML = "<p>El costo del alquiler del vehículo es de: " + total + "</p>";
        
            respuesta.innerHTML = "";
            respuesta.appendChild(imagenContainer);
            respuesta.appendChild(textoContainer);
        }
        else if (carro == "CHEVROLET gris" && alquiler > 10) {
            
            let imagenContainer = document.createElement("div");
            imagenContainer.style.background = "#5f6a6a"; 
            imagenContainer.innerHTML = '<img src="IMAGENES/CHEVROLET.png" alt="Texto alternativo" style="width:450px; height:250px;">';
        
            let textoContainer = document.createElement("div");
            textoContainer.style.background = "blue";
            textoContainer.innerHTML = "<p>El costo del alquiler del vehículo es de: " + total + "</p>";
        
            respuesta.innerHTML = "";
            respuesta.appendChild(imagenContainer);
            respuesta.appendChild(textoContainer);
        }
    })

})