import { Header } from './components/Header'
import { Task } from './components/Task'
import { TaskInput } from './components/TaskInput'

import { ColorProvider } from './context/ColorContext'
import { TaskProvider } from './context/TaskContext'

import { Toaster } from 'sonner'

function App() {
    return (
        <TaskProvider>
            <ColorProvider>
                <Toaster position="top-right" richColors visibleToasts={1} />
                <Header />
                <TaskInput />
                <div className="md:container mx-auto">
                    <Task />
                </div>
            </ColorProvider>
        </TaskProvider>
    )
}

export default App
