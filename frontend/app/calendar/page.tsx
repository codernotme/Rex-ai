'use client'

import { useState } from 'react'
import Card from '@/components/Card'
import Button from '@/components/Button'

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date())

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate()
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay()

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
  }

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Calendar & Alarm</h1>
      <Card className="mb-4">
        <div className="flex justify-between items-center mb-4">
          <Button onClick={prevMonth}>&lt;</Button>
          <h2 className="text-xl font-semibold">
            {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
          </h2>
          <Button onClick={nextMonth}>&gt;</Button>
        </div>
        <div className="grid grid-cols-7 gap-2">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="text-center font-semibold">{day}</div>
          ))}
          {Array(firstDayOfMonth).fill(null).map((_, i) => (
            <div key={`empty-${i}`} />
          ))}
          {days.map(day => (
            <div key={day} className="text-center p-2 border rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
              {day}
            </div>
          ))}
        </div>
      </Card>
      <Card title="Upcoming Alarms">
        <ul>
          <li className="mb-2">Team Meeting - Today, 2:00 PM</li>
          <li className="mb-2">Project Deadline - Tomorrow, 5:00 PM</li>
          <li className="mb-2">Client Call - Friday, 10:00 AM</li>
        </ul>
      </Card>
    </div>
  )
}

