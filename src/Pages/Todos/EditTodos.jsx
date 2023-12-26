import { useQuery } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import usePublicAxios from '../../Hooks/usePublicAxios';
import BoxContainer from '../../Components/Container/BoxContainer';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

const EditTodos = () => {
    const publicAxios = usePublicAxios()
    const {id} = useParams()
    const {data:task,isLoading} = useQuery({
        queryKey: [id],
        queryFn:()=>{
            return publicAxios.get(`task/${id}`)
        }
    })
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => {
        // return console.log(data);
        publicAxios.patch(`/edit-task/${id}`,data)
        .then((e)=>{
            if (e.data.modifiedCount>0) {
                toast.success("Task Updated!")
            }
        })
        .catch(()=>{
            toast.error("Something went wrong!")
        })
      }

    // console.log(task.data);
    if (isLoading) {
      return ''
    }
    return (
      <div className='px-5 md:p-0'>
        <BoxContainer>
           <div className='lg:flex flex-col md:flex-row py-10 space-y-5 md:space-y-0 gap-5'>
            <div className='md:w-1/3 bg-secondary text-white rounded-md p-5'>
                <h2 className='text-2xl text- uppercase text-center pb-2 font-medium'>Rise Beyond Limits</h2>
                <p className='text-justify '>Embrace the power within, break free from self-imposed limitations, and witness the extraordinary unfold. This section is a testament to the indomitable spirit that resides in each of us, urging us to reach new heights and conquer the unknown. Let's navigate this path of inspiration, turning adversity into strength and aspirations into achievements. Your journey to rise beyond limits begins here.</p>
            </div>
            <form className=' md:w-2/3 bg-accent rounded-md p-5' onSubmit={handleSubmit(onSubmit)}>
                <h2 className='text-white font-medium text-3xl text-center pb-3'>Edit Task</h2>
              <div className="grid md:grid-cols-2 justify-center gap-5">
                <input
                  type="text"
                  placeholder="Title"
                  defaultValue={task?.data?.Title}
                  
                  className="input input-bordered w-full focus:border-0 outline-0 border-secondary"
                  name='Title'
                  {...register("Title", {
                    min: 2,
                    maxLength: 15,
                  })}
                />
                <input
                  type="text"
                  defaultValue={task?.data?.Description}
                  className="input input-bordered w-full focus:border-0 outline-0 border-secondary"
                  placeholder="Description"
                  name='Description'
                  {...register("Description")}
                />
                <input
                  type="date"
                  defaultValue={'task?.data?.Deadline'}
                  className="input input-bordered w-full focus:border-0 outline-0 border-secondary"
                  placeholder="Deadline"
                  name='Deadline'
                  {...register("Deadline")}
                />
                <select
                  className="select select-bordered w-full  focus:border-0 outline-0 border-secondary"
                  {...register("Priority")}
                  name='Priority'
                  defaultValue={task?.data?.Priority}
                >
                  <option value="Low">Low</option>
                  <option value=" Moderate "> Moderate </option>
                  <option value=" High"> High</option>
                </select>
              </div>
                  <button type='submit' className="btn btn-secondary mx-auto w-32 mt-5 text-white">Save</button>
            </form>
        </div> 
        </BoxContainer>
        
       
      </div>
    );
};

export default EditTodos;