import { Check, X } from 'lucide-react'

const todos = [
  {
    id: "1",
    title: "Complete project proposal",
    status: "incomplete",
  },
  {
    id: "2",
    title: "Review client feedback",
    status: "incomplete",
  },
  {
    id: "3",
    title: "Prepare presentation slides",
    status: "incomplete",
  },
]

export function RecentTodos() {
  return (
    <div className="space-y-8">
      {todos.map((todo) => (
        <div key={todo.id} className="flex items-center">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-muted">
            {todo.status === "complete" ? (
              <Check className="w-4 h-4 text-primary" />
            ) : (
              <X className="w-4 h-4 text-muted-foreground" />
            )}
          </div>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{todo.title}</p>
            <p className="text-sm text-muted-foreground">
              {todo.status === "complete" ? "Completed" : "Incomplete"}
            </p>
          </div>
          <div className="ml-auto font-medium">
            {todo.status === "complete" ? "Done" : "Todo"}
          </div>
        </div>
      ))}
    </div>
  )
}

