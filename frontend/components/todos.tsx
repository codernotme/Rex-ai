import { useState } from 'react'
import Card from '@/components/Card'
import Button from '@/components/Button'
import Modal from '@/components/Modal'

interface Todo {
  id: number
  title: string
  completed: boolean
}

const TodoPage = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, title: 'Complete project proposal', completed: false },
    { id: 2, title: 'Schedule team meeting', completed: false },
    { id: 3, title: 'Review client feedback', completed: true },
  ])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [newTodoTitle, setNewTodoTitle] = useState('')

  const addTodo = () => {
    if (newTodoTitle.trim()) {
      setTodos([...todos, { id: Date.now(), title: newTodoTitle, completed: false }])
      setNewTodoTitle('')
      setIsModalOpen(false)
    }
  }

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Todo Manager</h1>
        <Button onClick={() => setIsModalOpen(true)}>Add Todo</Button>
      </div>
      <Card>
        <ul>
          {todos.map(todo => (
            <li key={todo.id} className="flex items-center mb-2">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                className="mr-2"
              />
              <span className={todo.completed ? 'line-through' : ''}>{todo.title}</span>
            </li>
          ))}
        </ul>
      </Card>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add New Todo">
        <input
          type="text"
          value={newTodoTitle}
          onChange={(e) => setNewTodoTitle(e.target.value)}
          className="input mb-4"
          placeholder="Enter todo title"
        />
        <Button onClick={addTodo}>Add Todo</Button>
      </Modal>
    </div>
  )
}

export default TodoPage

