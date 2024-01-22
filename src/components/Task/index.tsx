import { useContext, useEffect, useState } from 'react'

import TaskContext, { ITaskProps } from '../../context/TaskContext'

import { TaskHeader } from './components/TaskHeader'
import { TaskBody } from './components/TaskBody'
import { api } from '../../services/api'

export const Task = () => {
    const { searchValue } = useContext(TaskContext)

    const [tasks, setTasks] = useState<ITaskProps[]>([])

    const [favoritedTasks, setFavoritedTasks] = useState<ITaskProps[]>([])
    const [noFavoritedTasks, setNoFavoritedTasks] = useState<ITaskProps[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await api.get('/tasks')
            const data = response.data

            setTasks(data.tasks)
        }

        fetchData()
    }, [tasks])

    useEffect(() => {
        const filteredTasks = tasks.filter((task) =>
            task.title.toLowerCase().includes(searchValue.toLowerCase())
        )
        const favorited = filteredTasks.filter(
            (task) => task.isFavorited === true
        )
        const noFavorited = filteredTasks.filter(
            (task) => task.isFavorited === false
        )

        setFavoritedTasks(favorited)
        setNoFavoritedTasks(noFavorited)
    }, [tasks])

    return (
        <>
            {favoritedTasks.length > 0 && (
                <div className="mb-10">
                    <h4>Favoritas</h4>
                    <div className="md:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-4">
                        {favoritedTasks.map((favoritedTask) => (
                            <div
                                key={favoritedTask.id}
                                className="md:w-[390px] md:mx-0 mx-auto mb-4 h-[437px] max-w-[90%] w-[400px rounded-[25px] shadow"
                                style={{ backgroundColor: favoritedTask.color }}
                            >
                                <TaskHeader
                                    title={favoritedTask.title}
                                    taskId={favoritedTask.id}
                                />
                                <TaskBody
                                    description={favoritedTask.description}
                                    taskId={favoritedTask.id}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <div className="md:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-4">
                {noFavoritedTasks.map((task) => (
                    <div
                        key={task.id}
                        className="md:w-[390px] md:mx-0 mx-auto mb-4 h-[437px] max-w-[90%] w-[400px rounded-[25px] shadow"
                        style={{ backgroundColor: task.color }}
                    >
                        <TaskHeader title={task.title} taskId={task.id} />
                        <TaskBody
                            description={task.description}
                            taskId={task.id}
                        />
                    </div>
                ))}
            </div>
        </>
    )
}
