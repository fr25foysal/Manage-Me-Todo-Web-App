import { useQuery } from '@tanstack/react-query';
import BoxContainer from '../../Components/Container/BoxContainer'
import AddTask from '../../Pages/Todos/AddTask'
import usePublicAxios from '../../Hooks/usePublicAxios';
import useProvider from '../../Hooks/useProvider';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider, useDrop } from 'react-dnd';
import SingleTaskCard from './SingleTaskCard';
import { motion } from 'framer-motion';
const Todos = () => {
    const usePublcAxio = usePublicAxios()
    const {user} = useProvider()

    const [{ isOver }, drop] = useDrop(
      () => ({
        accept: "task",
        drop: (item) => dropedTask(item),
        collect: (monitor) => ({
          isOver: !!monitor.isOver()
        })
      })
    )

    const dropedTask=({id})=>{
      console.log(id,"status:",status)
    }

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
        
          <div ref={drop} className="grid lg:grid-cols-3 gap-8 mt-5 ">
            <TaskSection bgColor={"bg-accent"} status={"to-do"} statusText={"To-Do"} taskDataName={todo_tasks} refetch={refetch}></TaskSection>
            
            <TaskSection bgColor={"bg-neutral"} status={"inprogress"} statusText={"In Progress"} taskDataName={inprogress_tasks} refetch={inprogressRefetch}></TaskSection>
            <TaskSection bgColor={"bg-secondary"} status={"completed"} statusText={"Completed"} taskDataName={completed_tasks} refetch={completedRefetch}></TaskSection>
            
          </div>
        </BoxContainer>
      </div>
    );
};

export default Todos;

// const allTaskStatus = ["to-do", "inprogress", "completed"]
const TaskSection = ({taskDataName,statusText,refetch,bgColor, status})=>{
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  


  return (
    <div className={` ${bgColor} p-5 rounded-md min-h-64`} >
      <h2 className="bg-gray-100 rounded-md p-2 text-center font-medium text-lg">
       {statusText}
      </h2>

      <motion.section 
       variants={container}
    initial="hidden"
    animate="visible"
      >
        {taskDataName?.data?.map((task, index) => (
          <SingleTaskCard
            key={task._id}
            index={index}
            status={status}
            task={task}
            refetch={refetch}
            // inprogressRefetch={inprogressRefetch}
            // completedRefetch={completedRefetch}
          ></SingleTaskCard>
        ))}
      </motion.section>
    </div>
  );
}