import { Header } from './components/Header'
import { TaskInput } from './components/TaskInput'
import { TaskList } from './components/TaskList'

function App() {
    return (
        <>
            <Header />
            <TaskInput />
            <div className="md:container mx-auto">
                <TaskList />
            </div>
        </>
    )
}

export default App
