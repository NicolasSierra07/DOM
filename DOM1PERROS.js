document.addEventListener("DOMContentLoaded", function () {
    let formulario = document.getElementById("frm");

    formulario.addEventListener("submit", function (e) {
        e.preventDefault();

        let raza1 = document.getElementById("raza1").value;
        let puesto1 = parseInt(document.getElementById("puesto1").value);
        let raza2 = document.getElementById("raza2").value;
        let puesto2 = parseInt(document.getElementById("puesto2").value);
        let raza3 = document.getElementById("raza3").value;
        let puesto3 = parseInt(document.getElementById("puesto3").value);

        let respuesta = document.getElementById("respuesta");

        let valores = {
            "PITBULL": 6000000,
            "BULY": 6500000,
            "ROTTWHILLER": 4000000,
            "LABRADOR RETRIEVER": 3500000,
            "GOLDEN RETRIEVER": 3500000,
            "DOBERMAN": 5000000,
            "DOGO ARGENTINO": 5500000,
        };

        let imagenes = {
            "PITBULL": "IMAGENES/PITBULL.jpg",
            "BULY": "IMAGENES/BULLY.jpeg",
            "ROTTWHILLER": "IMAGENES/ROTWE.jpg",
            "LABRADOR RETRIEVER": "IMAGENES/LABRADOR.webp",
            "GOLDEN RETRIEVER": "IMAGENES/GOLDEN.webp",
            "DOBERMAN": "IMAGENES/DOBERMAN.webp",
            "DOGO ARGENTINO": "IMAGENES/DOGO.jpg",
        };

        // Primer Perro //
        let nuevoValor1 = 0;
        if (puesto1 === 1) {
            nuevoValor1 = valores[raza1] * 2;
        } else if (puesto1 === 2) {
            nuevoValor1 = valores[raza1] + 800000;
        } else if (puesto1 === 3) {
            nuevoValor1 = valores[raza1] + 200000;
        }

        let imagenContainer1 = document.createElement("div");
        imagenContainer1.style.background = "#b49e21";
        imagenContainer1.innerHTML = '<img src="' + (imagenes[raza1] ) + '" " style="width:400px; height:300px;">';

        let textoContainer1 = document.createElement("div");
        textoContainer1.style.background = "#b49e21";
        textoContainer1.innerHTML = "<p>El nuevo valor del " + raza1 + " es: $" + nuevoValor1 + "</p>";

        respuesta.appendChild(imagenContainer1);
        respuesta.appendChild(textoContainer1);

        // Segundo Perro //
        let nuevoValor2 = 0;
        if (puesto2 === 1) {
            nuevoValor2 = valores[raza2] * 2;
        } else if (puesto2 === 2) {
            nuevoValor2 = valores[raza2] + 800000;
        } else if (puesto2 === 3) {
            nuevoValor2 = valores[raza2] + 200000;
        }

        let imagenContainer2 = document.createElement("div");
        imagenContainer2.style.background = "#c0c0c0";
        imagenContainer2.innerHTML = '<img src="' + (imagenes[raza2] ) + '" " style="width:400px; height:300px;">';

        let textoContainer2 = document.createElement("div");
        textoContainer2.style.background = "#c0c0c0";
        textoContainer2.innerHTML = "<p>El nuevo valor del " + raza2 + " es: $" + nuevoValor2 + "</p>";

        respuesta.appendChild(imagenContainer2);
        respuesta.appendChild(textoContainer2);

        // Tercer Perro //
        let nuevoValor3 = 0;
        if (puesto3 === 1) {
            nuevoValor3 = valores[raza3] * 2;
        } else if (puesto3 === 2) {
            nuevoValor3 = valores[raza3] + 800000;
        } else if (puesto3 === 3) {
            nuevoValor3 = valores[raza3] + 200000;
        }

        let imagenContainer3 = document.createElement("div");
        imagenContainer3.style.background = "#bb7229";
        imagenContainer3.innerHTML = '<img src="' + (imagenes[raza3] ) + '" " style="width:400px; height:300px;">';

        let textoContainer3 = document.createElement("div");
        textoContainer3.style.background = "#bb7229";
        textoContainer3.innerHTML = "<p>El nuevo valor del " + raza3 + " es: $" + nuevoValor3 + "</p>";

        respuesta.appendChild(imagenContainer3);
        respuesta.appendChild(textoContainer3);
    });
});
