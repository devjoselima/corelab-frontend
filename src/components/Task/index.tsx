import { useContext, useEffect, useState } from 'react'

import TaskContext, { ITaskProps } from '../../context/TaskContext'

import { TaskHeader } from './components/TaskHeader'
import { TaskBody } from './components/TaskBody'

export const Task = () => {
    const { tasks, searchValue } = useContext(TaskContext)
    const [filteredTasks, setFilteredTasks] = useState<ITaskProps[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const filtered = tasks.filter((task) =>
                task.title.toLowerCase().includes(searchValue?.toLowerCase())
            )

            setFilteredTasks(filtered)
        }

        fetchData()
    }, [tasks, searchValue])

    return (
        <>
            {filteredTasks.map((task) => (
                <div
                    key={task.id}
                    className="md:w-[390px] md:mx-0 mx-auto mb-4 h-[437.59px] max-w-[90%] w-[400px rounded-[25px] shadow"
                    style={{ backgroundColor: task.color }}
                >
                    <TaskHeader title={task.title} taskId={task.id} />
                    <TaskBody description={task.description} taskId={task.id} />
                </div>
            ))}
        </>
    )
}
