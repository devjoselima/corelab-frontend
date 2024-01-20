import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../services/api'

export interface ITaskProps {
    id: string
    title: string
    description: string
    color: string
    isFavorited: boolean
}

interface ITaskContextType {
    tasks: ITaskProps[]
    editTask: (
        taskId: string,
        updatedTaskData: Partial<ITaskProps>
    ) => Promise<void>
    searchValue: string
    setSearchValue: React.Dispatch<React.SetStateAction<string>>
}

const TaskContext = createContext({} as ITaskContextType)

interface TaskProviderProps {
    children: ReactNode
}

export function TaskProvider({ children }: TaskProviderProps) {
    const [tasks, setTasks] = useState<ITaskProps[]>([])
    const [searchValue, setSearchValue] = useState('')

    async function getTask() {
        const response = await api.get('/tasks')
        const data = response.data

        setTasks(data.tasks)
    }

    async function editTask(
        taskId: string,
        updatedTaskData: Partial<ITaskProps>
    ) {
        const response = await api.patch(`/tasks/${taskId}`, updatedTaskData)

        const updatedTask = response.data

        setTasks((prevTasks) => {
            return prevTasks.map((task) => {
                if (task.id === updatedTask.id) {
                    return { ...task, ...updatedTask }
                }
                return task
            })
        })
    }

    useEffect(() => {
        getTask()
    }, [])

    return (
        <TaskContext.Provider
            value={{ tasks, editTask, searchValue, setSearchValue }}
        >
            {children}
        </TaskContext.Provider>
    )
}

export default TaskContext
