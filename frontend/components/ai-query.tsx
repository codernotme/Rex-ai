import { useState } from 'react'
import Card from '@/components/Card'
import Button from '@/components/Button'

interface Message {
  id: number
  text: string
  sender: 'user' | 'ai'
}

const AIQueryPage = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hello! How can I assist you today?", sender: 'ai' },
  ])
  const [input, setInput] = useState('')

  const sendMessage = () => {
    if (input.trim()) {
      const newMessage: Message = { id: Date.now(), text: input, sender: 'user' }
      setMessages([...messages, newMessage])
      setInput('')
      
      // Simulate AI response
      setTimeout(() => {
        const aiResponse: Message = { id: Date.now() + 1, text: "I'm processing your request. Please wait a moment.", sender: 'ai' }
        setMessages(prev => [...prev, aiResponse])
      }, 1000)
    }
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">AI Query</h1>
      <Card className="h-[calc(100vh-200px)] flex flex-col">
        <div className="flex-1 overflow-y-auto mb-4 neon-scrollbar">
          {messages.map(message => (
            <div
              key={message.id}
              className={`mb-2 p-2 rounded-lg ${
                message.sender === 'user' ? 'bg-primary text-white ml-auto' : 'bg-gray-200 dark:bg-gray-700'
              } max-w-[70%]`}
            >
              {message.text}
            </div>
          ))}
        </div>
        <div className="flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="input flex-1 mr-2"
            placeholder="Type your message..."
          />
          <Button onClick={sendMessage}>Send</Button>
        </div>
      </Card>
    </div>
  )
}

export default AIQueryPage

