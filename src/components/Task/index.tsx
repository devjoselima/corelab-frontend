import { TaskHeader } from './components/TaskHeader'
import { TaskBody } from './components/TaskBody'

export const Task = () => {
    return (
        <div className="md:w-[390px] md:mx-0 mx-auto mb-4 h-[437.59px] max-w-[90%] w-[400px] bg-white rounded-[25px] shadow">
            <TaskHeader />
            <TaskBody />
        </div>
    )
}
