import './App.css'

function App() {

  const todoList = [
    {id: 1, title: "Wake ups"},
    {id: 2, title: "Get ready"},
    {id: 3, title: "Walk the dog"},
]

  return (
    <div>
      <h1>To Do List</h1>
      <ul>
        {todoList.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul> 
    </div>
  )
}

export default App
