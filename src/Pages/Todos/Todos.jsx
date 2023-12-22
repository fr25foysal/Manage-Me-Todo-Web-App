import BoxContainer from '../../Components/Container/BoxContainer'
import AddTask from '../../Pages/Todos/AddTask'

const Todos = () => {
    return (
      <div className='mt-5'>
        <BoxContainer>
            <AddTask></AddTask>
          <div className="grid lg:grid-cols-3 gap-8 mt-5 ">
            
            
            <div className="bg-accent p-5 rounded-md min-h-64">
              <h2 className="bg-gray-100 rounded-md p-2 text-center font-medium text-lg">
                To-dos
              </h2>
            </div>
            <div className="bg-neutral p-5 rounded-md">
              <h2 className="bg-gray-100 rounded-md p-2 text-center font-medium text-lg">
                In progress
              </h2>
            </div>
            <div className="bg-secondary p-5 rounded-md">
              <h2 className="bg-gray-100 rounded-md p-2 text-center font-medium text-lg">
                Completed
              </h2>
            </div>
          </div>
        </BoxContainer>
      </div>
    );
};

export default Todos;