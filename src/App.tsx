import { Header } from './components/Header'
import { TaskInput } from './components/TaskInput'
import { TaskList } from './components/TaskList'
import { TaskProvider } from './context/TaskContext'

function App() {
    return (
        <TaskProvider>
            <Header />
            <TaskInput />
            <div className="md:container mx-auto">
                <TaskList />
            </div>
        </TaskProvider>
    )
}

export default App
