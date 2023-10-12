//CHALLEGE ARBOLES
class Persona {
    constructor(nombreCompleto, fechaNacimiento) {
      this.nombreCompleto = nombreCompleto;
      this.fechaNacimiento = fechaNacimiento;
      this.hijos = [];
    }
  
    agregarHijo(hijo) {
      this.hijos.push(hijo);
    }
  }
  
  // Creando el árbol genealógico
  const abuelo = new Persona("Abuelo", "10/01/1970");
  const padre = new Persona("Padre", "24/12/1982");
  const hijo1 = new Persona("Hijo1", "23/07/2000");
  const hijo2 = new Persona("Hijo2", "14/11/2021");
  
  abuelo.agregarHijo(padre);
  padre.agregarHijo(hijo1);
  padre.agregarHijo(hijo2);
  
  // Agregando una nueva generación
  const nuevoHijo = new Persona("Nuevo Hijo", "04/08/2022");
  padre.agregarHijo(nuevoHijo);
  
  // Recorrido en preorden
  function preorden(nodo) {
    if (nodo) {
      console.log(nodo.nombreCompleto, nodo.fechaNacimiento);
      nodo.hijos.forEach((hijo) => {
        preorden(hijo);
      });
    }
  }
  
  // Recorrido en postorden
  function postorden(nodo) {
    if (nodo) {
      nodo.hijos.forEach((hijo) => {
        postorden(hijo);
      });
      console.log(nodo.nombreCompleto, nodo.fechaNacimiento);
    }
  }
  
  // Recorrido en orden
  function enorden(nodo) {
    if (nodo) {
      if (nodo.hijos.length > 0) {
        enorden(nodo.hijos[0]);
      }
      console.log(nodo.nombreCompleto, nodo.fechaNacimiento);
      if (nodo.hijos.length > 1) {
        enorden(nodo.hijos[1]);
      }
    }
  }
  
  console.log("Recorrido en preorden:");
  preorden(abuelo);
  
  console.log("\nRecorrido en postorden:");
  postorden(abuelo);
  
  console.log("\nRecorrido en orden:");
  enorden(abuelo);
  