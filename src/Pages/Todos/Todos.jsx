import { useQuery } from '@tanstack/react-query';
import BoxContainer from '../../Components/Container/BoxContainer'
import AddTask from '../../Pages/Todos/AddTask'
import usePublicAxios from '../../Hooks/usePublicAxios';
import useProvider from '../../Hooks/useProvider';

const Todos = () => {
    const usePublcAxio = usePublicAxios()
    const {user} = useProvider()

    const { data:todo_tasks ,isLoading} = useQuery({
        queryKey: ['todo'],
        queryFn: ()=>{
            return usePublcAxio.get(`/todo-tasks?email=${user?.email}`)
        }
    })
    const { data:inprogress_tasks,isLoading:dataload } = useQuery({
        queryKey: ['inprogress'],
        queryFn: ()=>{
            return usePublcAxio.get(`/inprogress-tasks?email=${user?.email}`)
        }
    })
    const { data:completed_tasks,isLoading: taskload } = useQuery({
        queryKey: ['completed'],
        queryFn: ()=>{
            return usePublcAxio.get(`/completed-tasks?email=${user?.email}`)
        }
    })

    if (isLoading,taskload,dataload) {
        return "";
    }
console.log(user);
    return (
      <div className="mt-5">
        <BoxContainer>
          <div className="flex flex-col md:flex-row gap-5 ">
            <div className="md:w-2/6 flex text-white bg-gray-400 rounded-md p-5">
              <div className="avatar">
                <div className="w-24 lg:w-32 rounded">
                  <img src={user?.photoURL} />
                </div>
              </div>
              <div className='p-5'>
              <h2 className='font-medium text-xl '>{user?.displayName}</h2>
              </div>
              
            </div>
            <div className="md:w-4/6">
              <AddTask></AddTask>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mt-5 ">
            <div className="bg-accent p-5 rounded-md min-h-64">
              <h2 className="bg-gray-100 rounded-md p-2 text-center font-medium text-lg">
                To-dos
              </h2>

              {todo_tasks?.data?.map((task) => (
                <div
                  className="bg-gray-100 rounded-md p-2 mt-2 text-left font-medium "
                  key={task}
                >
                  <div className="flex gap-5">
                    {/* TODO: make the priority color responsive , if high another ,if low another */}
                    <h2>{task.Title}</h2>{" "}
                    <p className="text-[12px] bg-secondary px-2 py-[2px] rounded-md ">
                      {task.Priority}
                    </p>
                  </div>

                  <p className="text-sm">{task.Description}</p>
                  <p className="text-sm">Deadline: {task.Deadline}</p>
                </div>
              ))}
            </div>
            <div className="bg-neutral p-5 rounded-md min-h-64">
              <h2 className="bg-gray-100 rounded-md p-2 text-center font-medium text-lg">
                In progress
              </h2>

              {inprogress_tasks?.data?.map((task) => (
                <div
                  className="bg-gray-100 rounded-md p-2 mt-2 text-left font-medium "
                  key={task}
                >
                  <div className="flex gap-5">
                    {/* TODO: make the priority color responsive , if high another ,if low another */}
                    <h2>{task.Title}</h2>{" "}
                    <p className="text-[12px] bg-secondary px-2 py-[2px] rounded-md ">
                      {task.Priority}
                    </p>
                  </div>

                  <p className="text-sm">{task.Description}</p>
                  <p className="text-sm">Deadline: {task.Deadline}</p>
                </div>
              ))}
            </div>
            <div className="bg-secondary p-5 rounded-md min-h-64">
              <h2 className="bg-gray-100 rounded-md p-2 text-center font-medium text-lg">
                Completed
              </h2>

              {completed_tasks?.data?.map((task) => (
                <div
                  className="bg-gray-100 rounded-md p-2 mt-2 text-left font-medium "
                  key={task}
                >
                  <div className="flex gap-5">
                    {/* TODO: make the priority color responsive , if high another ,if low another */}
                    <h2>{task.Title}</h2>{" "}
                    <p className="text-[12px] bg-secondary px-2 py-[2px] rounded-md ">
                      {task.Priority}
                    </p>
                  </div>

                  <p className="text-sm">{task.Description}</p>
                  <p className="text-sm">Deadline: {task.Deadline}</p>
                </div>
              ))}
            </div>
          </div>
        </BoxContainer>
      </div>
    );
};

export default Todos;