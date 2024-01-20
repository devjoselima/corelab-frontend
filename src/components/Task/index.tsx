import { TaskHeader } from './components/TaskHeader'
import { TaskBody } from './components/TaskBody'
import { useContext } from 'react'
import TaskContext from '../../context/TaskContext'

export const Task = () => {
    const { tasks } = useContext(TaskContext)
    return (
        <>
            {tasks.map((task) => (
                <div
                    key={task.id}
                    className="md:w-[390px] md:mx-0 mx-auto mb-4 h-[437.59px] max-w-[90%] w-[400px] bg-white rounded-[25px] shadow"
                >
                    <TaskHeader title={task.title} taskId={task.id} />
                    <TaskBody description={task.description} taskId={task.id} />
                </div>
            ))}
        </>
    )
}
