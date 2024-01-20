import { Header } from './components/Header'
import { TaskInput } from './components/TaskInput'
import { TaskList } from './components/TaskList'
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
                    <TaskList />
                </div>
            </ColorProvider>
        </TaskProvider>
    )
}

export default App
