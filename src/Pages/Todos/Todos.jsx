import { useQuery } from '@tanstack/react-query';
import BoxContainer from '../../Components/Container/BoxContainer'
import AddTask from '../../Pages/Todos/AddTask'
import usePublicAxios from '../../Hooks/usePublicAxios';
import useProvider from '../../Hooks/useProvider';
import { FaMinusCircle } from 'react-icons/fa';
import { RiEditCircleFill } from "react-icons/ri";
import toast from 'react-hot-toast';
import EditTodos from './EditTodos';
import { useNavigate } from 'react-router-dom';

const Todos = () => {
    const usePublcAxio = usePublicAxios()
    const {user} = useProvider()
    const navigate = useNavigate()

    const { data:todo_tasks ,isLoading,refetch} = useQuery({
        queryKey: ['todo'],
        queryFn: ()=>{
            return usePublcAxio.get(`/todo-tasks?email=${user?.email}`)
        }
    })
    const { data:inprogress_tasks,isLoading:dataload, refetch:inprogressRefetch } = useQuery({
        queryKey: ['inprogress'],
        queryFn: ()=>{
            return usePublcAxio.get(`/inprogress-tasks?email=${user?.email}`)
        }
    })
    const { data:completed_tasks,isLoading: taskload,refetch:completedRefetch } = useQuery({
        queryKey: ['completed'],
        queryFn: ()=>{
            return usePublcAxio.get(`/completed-tasks?email=${user?.email}`)
        }
    })

    const handleDeleteTask = (id) =>{
      usePublcAxio.delete(`/task-delete/${id}`)
      .then((e)=>{
        if (e.data.deletedCount>0) {
          toast.success("Task Deleted!")
          refetch()
          inprogressRefetch()
          completedRefetch()
        }
        console.log(e.data)
      })
      .catch((e)=>{
        console.error(e.message);
      })
    }

    if (isLoading,taskload,dataload) {
        return "";
    }

    return (
      <div className="mt-5">
        <BoxContainer>
          <div className="flex flex-col md:flex-row gap-5 ">
            <div className="md:w-2/6 flex text-white bg-gray-400 rounded-md p-5">
              <div className="avatar bg-accent rounded-md p-2">
                <div className="w-24 lg:w-32 rounded">
                  <img src={user?.photoURL} />
                </div>
              </div>
              <div className="p-5">
                <h2 className="font-medium text-xl bg-secondary px-4 py-2 rounded-md">
                  {user?.displayName}
                </h2>
              </div>
            </div>
            <div className="md:w-4/6">
              <AddTask
                todoRefetch={refetch}
                inprogressRefetch={inprogressRefetch}
                completedRefetch={completedRefetch}
              ></AddTask>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mt-5 ">
            <div className="bg-accent p-5 rounded-md min-h-64">
              <h2 className="bg-gray-100 rounded-md p-2 text-center font-medium text-lg">
                To-dos
              </h2>

              {todo_tasks?.data?.map((task) => (
                <div
                  className="bg-gray-100 relative rounded-md min-h-20 p-2 mt-2 text-left font-medium "
                  key={task}
                >
                  <div className="flex gap-5">
                    {/* TODO: make the priority color responsive , if high another ,if low another */}
                    <h2>{task.Title}</h2>{" "}
                    <p className="text-[12px] bg-secondary px-2 py-[2px] rounded-md ">
                      {task.Priority}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm">{task.Description}</p>
                    <p className="text-sm">Deadline: {task.Deadline}</p>
                  </div>
                  <div className="text-xl text-secondary absolute right-4 top-3 space-y-2">
                    <button>
                      <RiEditCircleFill onClick={()=>navigate(`/edit-todos/${task._id}`)} />
                     
                    </button>
                    <br />
                    <button onClick={()=>handleDeleteTask(task._id)}>
                      <FaMinusCircle />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-neutral p-5 rounded-md min-h-64">
              <h2 className="bg-gray-100 rounded-md p-2 text-center font-medium text-lg">
                In progress
              </h2>

              {inprogress_tasks?.data?.map((task) => (
                <div
                  className="bg-gray-100  min-h-20 relative rounded-md p-2 mt-2 text-left font-medium "
                  key={task}
                >
                  <div className="flex gap-5">
                    {/* TODO: make the priority color responsive , if high another ,if low another */}
                    <h2>{task.Title}</h2>{" "}
                    <p className="text-[12px] bg-secondary px-2 py-[2px] rounded-md ">
                      {task.Priority}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm">{task.Description}</p>
                    <p className="text-sm">Deadline: {task.Deadline}</p>
                  </div>

                  <div className="text-xl text-secondary absolute right-4 top-3 space-y-2">
                    <button>
                      <RiEditCircleFill onClick={()=>document.getElementById('my_modal_3').showModal()} />
                      <EditTodos></EditTodos>
                    </button>
                    <br />
                    <button onClick={handleDeleteTask(task._id)}>
                      <FaMinusCircle />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-secondary p-5 rounded-md min-h-64">
              <h2 className="bg-gray-100 relative rounded-md p-2 text-center font-medium text-lg">
                Completed
              </h2>

              {completed_tasks?.data?.map((task) => (
                <div
                  className="bg-gray-100  min-h-20 rounded-md p-2 mt-2 text-left font-medium "
                  key={task}
                >
                  <div className="flex gap-5">
                    {/* TODO: make the priority color responsive , if high another ,if low another */}
                    <h2>{task.Title}</h2>{" "}
                    <p className="text-[12px] bg-secondary px-2 py-[2px] rounded-md ">
                      {task.Priority}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm">{task.Description}</p>
                    <p className="text-sm">Deadline: {task.Deadline}</p>
                  </div>

                  <div className="text-xl text-secondary absolute right-4 top-3 space-y-2">
                    <button>
                      <RiEditCircleFill onClick={()=>document.getElementById('my_modal_3').showModal()} />
                      <EditTodos></EditTodos>
                    </button>
                    <br />
                    <button onClick={handleDeleteTask(task._id)}>
                      <FaMinusCircle />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </BoxContainer>
      </div>
    );
};

export default Todos;