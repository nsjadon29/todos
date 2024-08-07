import { useState } from 'react'
import {FaPlus, FaPencilAlt, FaTrash} from 'react-icons/fa'

function App() {
    const [todos, settodos] = useState([
])
    const [input, setinput] = useState('')

    const [editIndex, seteditIndex]=useState(-1)

    const setedit=(index)=>{
      setinput(todos[index].todo);
      seteditIndex(index);
    }

    const addTodo = async () => {
      try {
        if(input.trim!=''){
          settodos([...todos, {id: new Date(), todo:input }])
          setinput('')
         
        }
      } catch (error) {
        console.log(error.message)
      }
    }

    const updateTodo = async () => {
      try {
        if(input.trim!=''){const updatedtodos=[...todos]
      updatedtodos[editIndex].todo=input;
      
      settodos(updatedtodos);
      seteditIndex(-1)
      setinput('')}
      } catch (error) {
        console.log(error.message)
      }
    }

    const removetodo=async(id)=>{
      let filteredtodos=todos.filter((todo)=>todo.id!=id)
      settodos(filteredtodos);
    }

  return (
    <>
      <div className='min-h-screen flex flex-col items-center justify-center gap-4 p-4 bg-custom-background bg-center bg-cover'>
        <div className='bg-gray-200 p-6 rounded shadow-md w-full max-w-lg: lg:w-1/4'>
        <h1 className="text-3xl font-bold text-center">
          ToDo App
        </h1>
        <div className='flex'>
          <input 
          type="text"
          placeholder='Add a todo'
          className='px-4 py-2 my-2 border rounded w-full focus:outline-none mr-2'
          value={input}
          onChange={(e)=>setinput(e.target.value)} />
          <button onClick= {editIndex==-1? addTodo: updateTodo} className='bg-gradient-to-r from-blue-400 to-blue-600 px-3 py-2 rounded text-white'>{editIndex==-1? <FaPlus />: <FaPencilAlt />}</button>
        </div>
        </div>

        {
          todos.length>0 && (
            <div className='bg-gray-200 px-6 py-2 shadow-md w-full max-w-lg: lg:w-1/4'>
          <ul>
            {todos.map((todo,index)=>(
              <li key={index} className='flex items-center justify-between bg-white p-2 my-3 rounded shadow-md'>
              <span className='text-lg'>{todo.todo}</span>
              <div>
              <button onClick={()=>setedit(index)} className='mr-2 p-2 bg-gradient-to-r from-green-300 to-green-500 text-white rounded hover:from-green-400 hover:to-green-600'><FaPencilAlt /></button>

              <button onClick={()=>removetodo(todo.id)}className='p-2 bg-gradient-to-r from-red-400 to-red-600 text-white rounded hover:from-red-400 hover:to-red-700'><FaTrash /></button>
              </div> 
            </li>
            ))}
              {/* <li  className='flex items-center justify-between bg-white p-2 my-3 rounded shadow-md'>
              <span className='text-lg'>Learn React</span>
              <div>
              <button className='mr-2 p-2 bg-gradient-to-r from-green-300 to-green-500 text-white rounded hover:from-green-400 hover:to-green-600'><FaPencilAlt /></button>
              <button className='p-2 bg-gradient-to-r from-red-400 to-red-600 text-white rounded hover:from-red-400 hover:to-red-700'><FaTrash /></button>
              </div>
            </li> */}
            
            
          </ul>
        </div>
          )
        }
      </div>
    </>
  )
}

export default App
