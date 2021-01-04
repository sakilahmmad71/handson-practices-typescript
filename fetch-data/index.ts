import axios from 'axios';

interface Todo {
  id: number,
  title: string,
  completed: boolean
}

const uri: string = 'https://jsonplaceholder.typicode.com/todos/1';

axios.get(uri)
  .then(res => {
    const todo = res.data as Todo;

    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;

    logTodo(id, title, completed);
  })
  .catch(err => console.log(err))

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
      Todo id is : ${id}
      Todo title is: ${title}
      Todo is completed: ${completed}
    `)
}