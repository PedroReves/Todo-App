'use client'
import EditTask from '@/components/EditTask'
import { createId } from '@paralleldrive/cuid2'
import 'material-symbols'
import { useState } from 'react'


export default function Home() {
  
  const [input, setInput] = useState('')
  const [todoList, setTodoList] = useState<string[]>([])
  const [editingTaskId,setEditingTaskId] = useState(null)
  
  function handleSubmit(e: any) {
    e.preventDefault()

    if(input === '') {
      return
    }
    
    const id = createId()

    setTodoList((prev: any) => [
      ...prev,
      {
        id: id,
        task: input,
        completed: false
      }
    ])
    setInput('')
  }

  const handleCompleteOrDelete = (id: string) => {
    const updatedList = todoList.filter((task: any) => task.id !== id);
    setTodoList(updatedList);
  };

  const handleTaskNameEdit = (taskId: string, newName: string) => {
    const updatedList = todoList.map((task: any) => {
      if (task.id === taskId) {
        return { ...task, task: newName };
      }
      return task;
    });
  
    setTodoList(updatedList);
  };
  



  return (
    <section className='h-screen flex flex-col items-center justify-center bg-lightGray'>
      <div className='bg-white rounded-xl'>
        <h3 className="text-3xl font-semibold text-center mt-7 pb-8">Todo App</h3>
        <form className='flex flex-row gap-x-6 px-10 pb-8'>
          <input type="text" name="InputTask" value={input} placeholder="Enter your Task..." onChange={(e) => setInput(e.target.value)} required className='pl-4 border-transparent border-none outline-0 outline-none scursor-pointer rounded-xl bg-lightGray'/>
          <button type="submit"  onClick={(e) => handleSubmit(e)} className="rounded-xl bg-grayishBlue text-white w-12 h-12 flex items-center justify-center"><span className="material-symbols-outlined">add</span></button>
        </form>
        <ul>
          {todoList.map((todo: any, key: number) => {
            return (
              <div className='flex flex-row items-center justify-between bg-darkGray rounded-lg mx-8 p-4 mb-4' key={key}>
                <li key={key} className='text-white text-normal font-medium'>
                  {todo.id === editingTaskId ? (
                    <EditTask 
                      taskId={todo.id}
                      currentName={todo.task}
                      onSave={(taskId: string, newName: string) => {
                        handleTaskNameEdit(taskId, newName)
                        setEditingTaskId(null)
                      }}
                    />
                  ) :  (
                    todo.task
                  )}
                </li>
                <div className='flex flex-row gap-x-2'>
                  <span className="material-symbols-outlined text-strongRed cursor-pointer" onClick={() => handleCompleteOrDelete(todo.id)}>delete</span>
                  <span className="material-symbols-outlined text-white cursor-pointer" onClick={() => setEditingTaskId(todo.id)}>stylus</span>
                  <span className="material-symbols-outlined text-strongGreen cursor-pointer" onClick={() => handleCompleteOrDelete(todo.id)}>check</span>  
                </div>
              </div>
                
            )
          })}
        </ul>
      </div>
    </section>
  )
}

/**/
