document.addEventListener("DOMContentLoaded", function() {
    let formulario = document.getElementById("frm");
    formulario.addEventListener("submit", function(e) {
        e.preventDefault();

        let salario = parseFloat(document.getElementById("sal_bas").value);
        console.log(salario);

        let fallos = parseInt(document.getElementById("dia_fal").value);
        console.log(fallos);

        let diurna = parseInt(document.getElementById("diurna").value);
        console.log(diurna);

        let nocturna = parseInt(document.getElementById("nocturna").value);
        console.log(nocturna);

        let festiva = parseInt(document.getElementById("festiva").value);
        console.log(festiva);

        let dominical = parseInt(document.getElementById("dominical").value);
        console.log(dominical);

        let respuesta = document.getElementById("respuesta");

        let tarifaDiaria = salario / 30;
        let horaNormal = salario / 240;
        let totalExtraDiurna = 0;
        let totalExtraNocturna = 0;
        let totalExtraFestiva = 0;
        let totalExtraDominical = 0;

        function extraDiurna() {
            let tarifaExtraDiurna = horaNormal * 1.25;
            totalExtraDiurna = diurna * tarifaExtraDiurna;
        }

        function extraNocturna() {
            let tarifaExtraNocturna = horaNormal * 1.35;
            totalExtraNocturna = nocturna * tarifaExtraNocturna;
        }

        function extraFestiva() {
            let tarifaExtraFestiva = horaNormal * 1.75;
            totalExtraFestiva = festiva * tarifaExtraFestiva;
        }

        function extraDominical() {
            let tarifaExtraDominical = horaNormal * 2;
            totalExtraDominical = dominical * tarifaExtraDominical;
        }

        extraDiurna();
        extraNocturna();
        extraFestiva();
        extraDominical();

        let descuentoDiasFallados = fallos * tarifaDiaria;
        let totalExtras = totalExtraDiurna + totalExtraNocturna + totalExtraFestiva + totalExtraDominical;
        let salarioTotal = salario + totalExtras;
        let descuentos = salarioTotal * 0.08 + descuentoDiasFallados;
        let totalPagar = salarioTotal - descuentos;

        let salarioContainer = document.createElement("div");
        salarioContainer.style.background = "blue";
        salarioContainer.innerHTML = "<p>El total a pagar es: $" + totalPagar.toFixed(0) + "</p>";

        let ingresosContainer = document.createElement("div");
        ingresosContainer.style.background = "green";
        ingresosContainer.innerHTML = "<p>El total de ingresos extras es: $" + totalExtras.toFixed(0) + "</p>";

        let egresosContainer = document.createElement("div");
        egresosContainer.style.background = "red";
        egresosContainer.innerHTML = "<p>El total de egresos es: $" + descuentos.toFixed(0) + "</p>";

        respuesta.innerHTML = "";
        respuesta.appendChild(salarioContainer);
        respuesta.appendChild(ingresosContainer);
        respuesta.appendChild(egresosContainer);
    });
});
