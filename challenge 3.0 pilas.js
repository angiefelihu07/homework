//Challege 3.0  Pilas
class Libro {
    constructor(nombre, isbn, autor, editorial) {
      this.nombre = nombre;
      this.isbn = isbn;
      this.autor = autor;
      this.editorial = editorial;
    }
  }
  
  class PilaDeLibros {
    constructor() {
      this.libros = [];
    }
  
    push(libro) {
      this.libros.push(libro);
    }
  
    pop() {
      if (this.libros.length > 0) {
        return this.libros.pop();
      } else {
        return null; // Pila vacía no hay nada
      }
    }
  
    peek() {
      if (this.libros.length > 0) {
        return this.libros[this.libros.length - 1];
      } else {
        return null; // Pila vacía no hay nada
      }
    }
  
    size() {
      return this.libros.length;
    }
  
    print() {
      console.log("Libros en la pila:");
      this.libros.forEach((libro, index) => {
        console.log(`Libro ${index + 1}:`);
        console.log(`Nombre: ${libro.nombre}`);
        console.log(`ISBN: ${libro.isbn}`);
        console.log(`Autor: ${libro.autor}`);
        console.log(`Editorial: ${libro.editorial}`);
      });
    }
  }
  
  // Creacion de los libros
  const libro1 = new Libro("Habitos atomicos", "123456", "Jack", "ADN");
  const libro2 = new Libro("Biblia", "7891011", "Jesus", "Iglesia Catolica");
  const libro3 = new Libro("El quinto dragon rojo", "12345678910", "Emilia", "Semana");
  
  // Crear la pila y agregar los libros 
  const pilaDeLibros = new PilaDeLibros();
  pilaDeLibros.push(libro1);
  pilaDeLibros.push(libro2);
  pilaDeLibros.push(libro3);
  
  // Imprimir los libros en la pila
  pilaDeLibros.print();
  
  // Obtener el tamaño de la pila
  console.log("Tamaño de la pila:", pilaDeLibros.size());
  
  // Ver el libro en la cima de la pila (metodo peek)
  console.log("ver ultimo libro de la pila:", pilaDeLibros.peek());
  
  // Quitar un libro de la pila
  const libroEliminado = pilaDeLibros.pop();
  console.log("Eliminar libro:");
  console.log(libroEliminado);
  
  // Mostrar los libros restantes en la pila
  pilaDeLibros.print();
  