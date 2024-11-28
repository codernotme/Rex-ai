"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

interface Todo {
  id: number
  title: string
  completed: boolean
}

export default function TodoPage() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, title: "Complete project proposal", completed: false },
    { id: 2, title: "Schedule team meeting", completed: false },
    { id: 3, title: "Review client feedback", completed: true },
  ])
  const [newTodoTitle, setNewTodoTitle] = useState("")

  const addTodo = () => {
    if (newTodoTitle.trim()) {
      setTodos([...todos, { id: Date.now(), title: newTodoTitle, completed: false }])
      setNewTodoTitle("")
    }
  }

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Todo Manager</CardTitle>
          <CardDescription>Manage your tasks efficiently</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="newTodo">New Todo</Label>
              <div className="flex space-x-2">
                <Input
                  id="newTodo"
                  placeholder="Enter a new todo"
                  value={newTodoTitle}
                  onChange={(e) => setNewTodoTitle(e.target.value)}
                />
                <Button onClick={addTodo}>Add</Button>
              </div>
            </div>
          </div>
          <div className="mt-6 space-y-4">
            {todos.map(todo => (
              <div key={todo.id} className="flex items-center space-x-2">
                <Checkbox
                  id={`todo-${todo.id}`}
                  checked={todo.completed}
                  onCheckedChange={() => toggleTodo(todo.id)}
                />
                <label
                  htmlFor={`todo-${todo.id}`}
                  className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
                    todo.completed ? "line-through text-muted-foreground" : ""
                  }`}
                >
                  {todo.title}
                </label>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-muted-foreground">
            You have {todos.filter(todo => !todo.completed).length} incomplete todos
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}

