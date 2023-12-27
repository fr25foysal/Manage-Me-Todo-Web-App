import toast from "react-hot-toast";
import { FaMinusCircle } from "react-icons/fa";
import { RiEditCircleFill } from "react-icons/ri";
import usePublicAxios from "../../Hooks/usePublicAxios";
import { useNavigate } from "react-router-dom";
import { useDrag } from "react-dnd";
import {motion } from 'framer-motion'
const SingleTaskCard = ({task,refetch,inprogressRefetch,completedRefetch,index}) => {
    
    const usePublcAxio = usePublicAxios()

    const item = {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1
      }
    };

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "task",
        item: {id: task._id},
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging()
        })
      }))
      
    const navigate = useNavigate()
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

    return (
      <motion.div variants={item} ref={drag} className="bg-gray-100 relative rounded-md min-h-20 p-2 mt-2 text-left font-medium ">
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
            <RiEditCircleFill
              onClick={() => navigate(`/edit-todos/${task._id}`)}
            />
          </button>
          <br />
          <button onClick={() => handleDeleteTask(task._id)}>
            <FaMinusCircle />
          </button>
        </div>
      </motion.div>
    );
};

export default SingleTaskCard;