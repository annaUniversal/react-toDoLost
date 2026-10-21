function TodoList() {
    const todoList = [
    {id: 1, title: "Wake up"},
    {id: 2, title: "Get ready"},
    {id: 3, title: "Walk the dog"},
  ]
    return (
    <ul>
        {todoList.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
    </ul> 
  );
}

export default TodoList;