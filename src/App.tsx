import { Header } from './components/Header'
import { TaskInput } from './components/TaskInput'
import { TaskList } from './components/TaskList'
import { TaskProvider } from './context/TaskContext'

import { Toaster } from 'sonner'

function App() {
    return (
        <TaskProvider>
            <Toaster position="top-right" richColors visibleToasts={1} />
            <Header />
            <TaskInput />
            <div className="md:container mx-auto">
                <TaskList />
            </div>
        </TaskProvider>
    )
}

export default App
