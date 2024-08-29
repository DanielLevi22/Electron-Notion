import { Routes } from '../Router'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import * as Collapsible from '@radix-ui/react-collapsible'

export function App() {
  return (
    <div className="h-screen w-screen bg-rotion-900 text-rotion-100 flex">
      <Collapsible.Root>
        <Sidebar />
      </Collapsible.Root>

      <div className="flex-1 flex flex-col max-h-screen">
        <Header isSidebarOpen={false} />
        <Routes />
      </div>
    </div>
  )
}
