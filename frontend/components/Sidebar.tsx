"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { LayoutDashboard, ListTodo, Calendar, FileText, MessageSquare, Settings, ChevronLeft, ChevronRight } from 'lucide-react'
import { useSidebar } from "./sidebar-provider"

const sidebarNavItems = [
  {
    title: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Todo Manager",
    href: "/todos",
    icon: ListTodo,
  },
  {
    title: "Calendar & Alarm",
    href: "/calendar",
    icon: Calendar,
  },
  {
    title: "File Management",
    href: "/files",
    icon: FileText,
  },
  {
    title: "AI Query",
    href: "/ai-query",
    icon: MessageSquare,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
]

export function Sidebar() {
  const pathname = usePathname()
  const { isExpanded, toggleSidebar } = useSidebar()

  return (
    <div className={cn(
      "flex flex-col border-r bg-background transition-all duration-300",
      isExpanded ? "w-64" : "w-[70px]"
    )}>
      <div className="flex h-14 items-center border-b px-3">
        <Link href="/" className="flex items-center space-x-2">
          {isExpanded && <span className="font-bold">RexAI</span>}
        </Link>
        <Button variant="ghost" size="icon" className="ml-auto" onClick={toggleSidebar}>
          {isExpanded ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
        </Button>
      </div>
      <ScrollArea className="flex-1">
        <nav className="grid items-start px-2 py-2">
          {sidebarNavItems.map((item) => (
            <Button
              key={item.href}
              variant={pathname === item.href ? "secondary" : "ghost"}
              className={cn(
                "w-full justify-start",
                pathname === item.href && "bg-muted",
                !isExpanded && "px-2"
              )}
              asChild
            >
              <Link href={item.href}>
                <item.icon className="mr-2 h-4 w-4" />
                {isExpanded && <span>{item.title}</span>}
              </Link>
            </Button>
          ))}
        </nav>
      </ScrollArea>
    </div>
  )
}

