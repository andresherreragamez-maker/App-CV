/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */
// ===================================================
// Curriculum Vitae - Interacciones
// ===================================================

// ---------- 1. Datos del proyecto ----------
const btnDatosProyecto = document.getElementById("btnDatosProyecto");
const datosProyecto = document.getElementById("datosProyecto");

btnDatosProyecto.addEventListener("click", function () {
    const cantidadSecciones = document.querySelectorAll("section").length;
    const cantidadHabilidades = document.querySelectorAll("#listaHabilidades li").length;
    const fecha = new Date().toLocaleDateString("es-CR");

    datosProyecto.innerHTML =
        "<p><strong>Proyecto:</strong> Curriculum Vitae</p>" +
        "<p><strong>Versión:</strong> 01.02</p>" +
        "<p><strong>Tecnologías:</strong> HTML, CSS y JavaScript (NetBeans - Java Web)</p>" +
        "<p><strong>Secciones en la página:</strong> " + cantidadSecciones + "</p>" +
        "<p><strong>Habilidades registradas:</strong> " + cantidadHabilidades + "</p>" +
        "<p><strong>Fecha de consulta:</strong> " + fecha + "</p>";

    datosProyecto.classList.toggle("oculto");

    if (datosProyecto.classList.contains("oculto")) {
        btnDatosProyecto.textContent = "Ver datos del proyecto";
    } else {
        btnDatosProyecto.textContent = "Ocultar datos del proyecto";
    }
});

// ---------- 2. Modo oscuro ----------
const btnModo = document.getElementById("btnModo");

btnModo.addEventListener("click", function () {
    document.body.classList.toggle("oscuro");

    if (document.body.classList.contains("oscuro")) {
        btnModo.textContent = "Cambiar a modo claro";
    } else {
        btnModo.textContent = "Cambiar a modo oscuro";
    }
});

// ---------- 3. Leer más en el perfil ----------
const btnLeerMas = document.getElementById("btnLeerMas");
const perfilExtra = document.getElementById("perfilExtra");

btnLeerMas.addEventListener("click", function () {
    perfilExtra.classList.toggle("oculto");
    btnLeerMas.textContent = perfilExtra.classList.contains("oculto") ? "Leer más" : "Leer menos";
});

// ---------- 4. Calcular años de estudio ----------
const btnAniosEstudio = document.getElementById("btnAniosEstudio");
const resultadoAnios = document.getElementById("resultadoAnios");

btnAniosEstudio.addEventListener("click", function () {
    // Toma los años de la primera columna de la tabla
    const celdas = document.querySelectorAll("table tr td:first-child");
    const anios = [];

    celdas.forEach(function (celda) {
        anios.push(parseInt(celda.textContent));
    });

    const anioMenor = Math.min(...anios);
    const anioMayor = Math.max(...anios);
    const anioActual = new Date().getFullYear();

    resultadoAnios.innerHTML =
        "<p>Títulos obtenidos: <strong>" + anios.length + "</strong></p>" +
        "<p>Años entre el primer y el último título: <strong>" + (anioMayor - anioMenor) + "</strong></p>" +
        "<p>Años desde el primer título hasta hoy: <strong>" + (anioActual - anioMenor) + "</strong></p>";

    resultadoAnios.classList.remove("oculto");
});

// ---------- 5. Agregar habilidades ----------
const listaHabilidades = document.getElementById("listaHabilidades");
const inputHabilidad = document.getElementById("nuevaHabilidad");
const btnAgregarHabilidad = document.getElementById("btnAgregarHabilidad");
const contadorHabilidades = document.getElementById("contadorHabilidades");

function actualizarContador() {
    const total = listaHabilidades.querySelectorAll("li").length;
    contadorHabilidades.textContent = "Total de habilidades: " + total;
}

function agregarHabilidad() {
    const texto = inputHabilidad.value.trim();

    if (texto === "") {
        alert("Escriba una habilidad antes de agregarla.");
        return;
    }

    const nuevoItem = document.createElement("li");
    nuevoItem.textContent = texto;
    listaHabilidades.appendChild(nuevoItem);

    inputHabilidad.value = "";
    inputHabilidad.focus();
    actualizarContador();
}

btnAgregarHabilidad.addEventListener("click", agregarHabilidad);

// Permite agregar presionando Enter
inputHabilidad.addEventListener("keydown", function (evento) {
    if (evento.key === "Enter") {
        agregarHabilidad();
    }
});

actualizarContador();

// ---------- 6. Calculadora de promedio ----------
const btnCalcular = document.getElementById("btnCalcular");
const btnLimpiar = document.getElementById("btnLimpiar");
const resultadoPromedio = document.getElementById("resultadoPromedio");

btnCalcular.addEventListener("click", function () {
    const n1 = parseFloat(document.getElementById("nota1").value);
    const n2 = parseFloat(document.getElementById("nota2").value);
    const n3 = parseFloat(document.getElementById("nota3").value);

    resultadoPromedio.classList.remove("oculto", "exito", "error");

    // Validación
    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        resultadoPromedio.classList.add("error");
        resultadoPromedio.textContent = "Complete las tres notas para calcular el promedio.";
        return;
    }

    if (n1 < 0 || n1 > 100 || n2 < 0 || n2 > 100 || n3 < 0 || n3 > 100) {
        resultadoPromedio.classList.add("error");
        resultadoPromedio.textContent = "Las notas deben estar entre 0 y 100.";
        return;
    }

    const promedio = (n1 + n2 + n3) / 3;
    let estado;

    if (promedio >= 70) {
        estado = "Aprobado";
        resultadoPromedio.classList.add("exito");
    } else {
        estado = "Reprobado";
        resultadoPromedio.classList.add("error");
    }

    resultadoPromedio.innerHTML =
        "<p>Promedio: <strong>" + promedio.toFixed(2) + "</strong></p>" +
        "<p>Estado: <strong>" + estado + "</strong></p>";
});

btnLimpiar.addEventListener("click", function () {
    document.getElementById("nota1").value = "";
    document.getElementById("nota2").value = "";
    document.getElementById("nota3").value = "";
    resultadoPromedio.classList.add("oculto");
});

// ---------- 7. Formulario de contacto ----------
const formContacto = document.getElementById("formContacto");
const resultadoFormulario = document.getElementById("resultadoFormulario");

formContacto.addEventListener("submit", function (evento) {
    evento.preventDefault(); // Evita que la página se recargue

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const motivo = document.getElementById("motivo").value;
    const mensaje = document.getElementById("mensaje").value.trim();

    const errores = [];

    if (nombre === "") {
        errores.push("Escriba su nombre.");
    }
    if (!correo.includes("@") || !correo.includes(".")) {
        errores.push("Escriba un correo válido.");
    }
    if (motivo === "") {
        errores.push("Seleccione un motivo.");
    }
    if (mensaje.length < 10) {
        errores.push("El mensaje debe tener al menos 10 caracteres.");
    }

    resultadoFormulario.classList.remove("oculto", "exito", "error");

    if (errores.length > 0) {
        resultadoFormulario.classList.add("error");
        resultadoFormulario.innerHTML = "<p><strong>Revise lo siguiente:</strong></p><ul><li>" +
            errores.join("</li><li>") + "</li></ul>";
        return;
    }

    resultadoFormulario.classList.add("exito");
    resultadoFormulario.innerHTML =
        "<p><strong>Mensaje enviado.</strong> Gracias, " + nombre + ".</p>" +
        "<p>Motivo: " + motivo + "</p>" +
        "<p>Le responderé a " + correo + " lo antes posible.</p>";

    formContacto.reset();
});

// ---------- 8. Año automático en el pie de página ----------
document.getElementById("anioActual").textContent = new Date().getFullYear();

