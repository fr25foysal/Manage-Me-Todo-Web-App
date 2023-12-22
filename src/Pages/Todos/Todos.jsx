import { useQuery } from '@tanstack/react-query';
import BoxContainer from '../../Components/Container/BoxContainer'
import AddTask from '../../Pages/Todos/AddTask'
import usePublicAxios from '../../Hooks/usePublicAxios';

const Todos = () => {
    const usePublcAxio = usePublicAxios()

    const { data:todo_tasks ,isLoading} = useQuery({
        queryKey: ['todo'],
        queryFn: ()=>{
            return usePublcAxio.get('/todo-tasks')
        }
    })
    const { data:inprogress_tasks,isLoading:dataload } = useQuery({
        queryKey: ['inprogress'],
        queryFn: ()=>{
            return usePublcAxio.get('/inprogress-tasks')
        }
    })
    const { data:completed_tasks,isLoading: taskload } = useQuery({
        queryKey: ['completed'],
        queryFn: ()=>{
            return usePublcAxio.get('/completed-tasks')
        }
    })

    if (isLoading,taskload,dataload) {
        return "";
    }

    return (
      <div className="mt-5">
        <BoxContainer>
          <AddTask></AddTask>
          <div className="grid lg:grid-cols-3 gap-8 mt-5 ">
            <div className="bg-accent p-5 rounded-md min-h-64">
              <h2 className="bg-gray-100 rounded-md p-2 text-center font-medium text-lg">
                To-dos
              </h2>


              {todo_tasks?.data?.map((task) => (
                <div className='bg-gray-100 rounded-md p-2 mt-2 text-left font-medium ' key={task}>
                  <div className='flex gap-5'>
                    {/* TODO: make the priority color responsive , if high another ,if low another */}
                  <h2>{task.Title}</h2> <p className='text-[12px] bg-secondary px-2 py-[2px] rounded-md '>{task.Priority}</p>
                  </div>
                  
                  <p className='text-sm'>{task.Description}</p>
                  <p className='text-sm'>Deadline: {task.Deadline}</p>
                </div>
              ))}

            </div>
            <div className="bg-neutral p-5 rounded-md min-h-64">
              <h2 className="bg-gray-100 rounded-md p-2 text-center font-medium text-lg">
                In progress
              </h2>
                
              {inprogress_tasks?.data?.map((task) => (
                <div className='bg-gray-100 rounded-md p-2 mt-2 text-left font-medium ' key={task}>
                  <div className='flex gap-5'>
                    {/* TODO: make the priority color responsive , if high another ,if low another */}
                  <h2>{task.Title}</h2> <p className='text-[12px] bg-secondary px-2 py-[2px] rounded-md '>{task.Priority}</p>
                  </div>
                  
                  <p className='text-sm'>{task.Description}</p>
                  <p className='text-sm'>Deadline: {task.Deadline}</p>
                </div>
              ))}

            </div>
            <div className="bg-secondary p-5 rounded-md min-h-64">
              <h2 className="bg-gray-100 rounded-md p-2 text-center font-medium text-lg">
                Completed
              </h2>

              {completed_tasks?.data?.map((task) => (
                <div className='bg-gray-100 rounded-md p-2 mt-2 text-left font-medium ' key={task}>
                  <div className='flex gap-5'>
                    {/* TODO: make the priority color responsive , if high another ,if low another */}
                  <h2>{task.Title}</h2> <p className='text-[12px] bg-secondary px-2 py-[2px] rounded-md '>{task.Priority}</p>
                  </div>
                  
                  <p className='text-sm'>{task.Description}</p>
                  <p className='text-sm'>Deadline: {task.Deadline}</p>
                </div>
              ))}

            </div>
          </div>
        </BoxContainer>
      </div>
    );
};

export default Todos;