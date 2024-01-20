import { Task } from '../Task'

export const TaskList = () => {
    return (
        <div className="md:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-4 ">
            <Task />
        </div>
    )
}
