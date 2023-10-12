class Ciudad {
  constructor(nombre) {
    this.nombre = nombre;
    this.residentes = [];
  }

  agregarResidente(persona) {
    this.residentes.push(persona);
  }

  imprimirResidentes() {
    console.log(`Residentes de ${this.nombre}:`);
    this.residentes.forEach((residente) => {
      console.log(`Nombre: ${residente.nombre}, Edad: ${residente.edad}`);
    });
  }

  buscarPersona(nombre) {
    return this.residentes.find((residente) => residente.nombre === nombre);
  }
}

class Persona {
  constructor(nombre, edad, ciudad) {
    this.nombre = nombre;
    this.edad = edad;
    this.ciudad = ciudad;
  }
}

// Crear ciudades
const ciudad1 = new Ciudad("Cali");
const ciudad2 = new Ciudad("Ibague");
const ciudad3 = new Ciudad("Medellin")

// Crear personas y agregarlas a las ciudades
const persona1 = new Persona("Ana", 15, ciudad1);
const persona2 = new Persona("Ronal", 30, ciudad2);
const persona3 = new Persona("Emily", 45, ciudad3);
const persona4 = new Persona("Miguel", 24, ciudad3);

ciudad1.agregarResidente(persona1);
ciudad1.agregarResidente(persona3);
ciudad2.agregarResidente(persona2);
ciudad2.agregarResidente(persona4);

// Imprimir residentes de una ciudad específica
ciudad1.imprimirResidentes();

// Buscar una persona por nombre en una ciudad
const nombreABuscar = "Angie";
const personaEncontrada = ciudad1.buscarPersona(nombreABuscar);
if (personaEncontrada) {
  console.log(`Persona encontrada: Nombre: ${personaEncontrada.nombre}, Edad: ${personaEncontrada.edad}, Ciudad: ${personaEncontrada.ciudad.nombre}`);
} else {
  console.log(`No se encontró a ${nombreABuscar} en ${ciudad1.nombre}`);
}
