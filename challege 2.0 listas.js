//challegue 2.0
// Definir la clase para las tareas TODO con el metodo y constructor
class Todo {
    constructor(titulo, descripcion, nuevotodo) {
      this.titulo = titulo;
      this.descripcion = descripcion;
      this.nuevotodo = nuevotodo;
    }
  }
  
  // Creacion de algunas tareas TODO 
  const todoList = [
    new Todo("Tarea 1", "Descripción de la tarea 1", 2),
    new Todo("Tarea 2", "Descripción de la tarea 2", 3),
    new Todo("Tarea 3", "Descripción de la tarea 3", 0)
  ];
  
  // Imprimir todas las tareas TODO
  console.log("Lista de Tareas TODO:");
  todoList.forEach((todo, index) => {
    console.log(`Tarea ${index + 1}:`);
    console.log(`Título: ${todo.titulo}`);
    console.log(`Descripción: ${todo.descripcion}`);
    if (todo.nuevotodo > 0) {
      console.log(`Puntos a la siguiente tarea: ${todo.nuevotodo}`);
    } else {
      console.log("No hay siguiente tarea.");
    }
    console.log("----------------------------");
  });
  