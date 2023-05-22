import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [todo, setTodo] = useState({ title: "", desc: "" })

  const addTodo = () => {
    let todos = localStorage.getItem("todos");
    if (todos) {
      let todosJson = JSON.parse(todos);
      if (todosJson.filter(value => {
        return value.title == todo.title
      }).length > 0) {
        alert("Todo already interd")
        // setTodo({ title: "", desc: "" })
      } else {
        todosJson.push(todo);
        localStorage.setItem("todos", JSON.stringify(todosJson))
        alert("Todo has been Added")
        setTodo({ title: "", desc: "" })
      }
    }
    else {
      localStorage.setItem("todos", JSON.stringify([todo]))
    }
  }
  const onChange = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value })
    console.log(todo)
  }
  return (
    <div className="my-2 text-3xl">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <h1 className='mb-4 text-black'></h1>

          <div className="  bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Add a Todo</h2>
            <div className="relative mb-4">
              <label for="title" className="leading-7 text-sm text-gray-600">Todo Title</label>
              <input onChange={onChange} value={todo.title} type="text" id="title" name="title" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-4">
              <label for="desc" className="leading-7 text-sm text-gray-600">Todo List</label>
              <input onChange={onChange} value={todo.desc} type="desc" id="desc" name="desc" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <button onClick={addTodo} className="text-white bg-indigo-500 border-0 py-2 w-1/12 px-8 focus:outline-none hover:bg-indigo-600 rounded w-fit text-lg">Add Todo</button>
            <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
