import { ReactNode, createContext, useState } from 'react'
import { api } from '../services/api'
import { toast } from 'sonner'

export interface ITaskProps {
    id: string
    title: string
    description: string
    color: string
    isFavorited: boolean
}

interface ITaskContextType {
    tasks: ITaskProps[]
    createTask: (
        title: string,
        description: string,
        color: string,
        isFavorited: boolean
    ) => void
    editTask: (
        taskId: string,
        updatedTaskData: Partial<ITaskProps>
    ) => Promise<void>
    deleteTask: (taskId: string) => Promise<void>
    searchValue: string
    setSearchValue: React.Dispatch<React.SetStateAction<string>>
}

const TaskContext = createContext({} as ITaskContextType)

interface TaskProviderProps {
    children: ReactNode
}

export function TaskProvider({ children }: TaskProviderProps) {
    const [tasks, setTasks] = useState<ITaskProps[]>([])

    const [searchValue, setSearchValue] = useState<string>('')

    async function createTask(
        title: string,
        description: string,
        color: string,
        isFavorited: boolean
    ) {
        try {
            const response = await api.post('/tasks', {
                title,
                description,
                color,
                isFavorited,
            })

            const createdTask = response.data

            setTasks((prevTasks) => [...prevTasks, createdTask])

            const updatedResponse = await api.get('/tasks')
            const updatedData = updatedResponse.data

            setTasks(updatedData.tasks)
        } catch (error) {
            console.error('Erro ao criar tarefa:', error)
        }
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

        const updatedResponse = await api.get('/tasks')
        const updatedData = updatedResponse.data
        setTasks(updatedData.tasks)
    }

    async function deleteTask(taskId: string) {
        try {
            await api.delete(`/tasks/${taskId}`)

            setTasks((prevTasks) =>
                prevTasks.filter((task) => task.id !== taskId)
            )

            toast.success('Tarefa removida com sucesso!')
        } catch (error) {
            console.error('Error deleting task:', error)
        }
    }

    return (
        <TaskContext.Provider
            value={{
                tasks,
                createTask,
                editTask,
                deleteTask,
                searchValue,
                setSearchValue,
            }}
        >
            {children}
        </TaskContext.Provider>
    )
}

export default TaskContext
