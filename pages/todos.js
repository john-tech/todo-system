import React, { useEffect, useState } from 'react'
const todos = () => {



    const [todos, setTodos] = useState([]);
    useEffect(() => {
        let todos = localStorage.getItem("todos");
        setTodos(JSON.parse(todos))

    }, [])


    const deleteTodo = (title) => {
        let newTodos = todos.filter(item => {
            return item.title != title
        })
        localStorage.setItem("todos", JSON.stringify(newTodos))
        setTodos(newTodos)
    }

    const editTodo = () => {

    }
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">YOUR TODOS</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Your Todos show up here.</p>
                </div>
                <div className="flex flex-wrap -m-4">

                    {todos.map(item => {
                        return <div className="p-4 lg:w-1/4 md:w-1/2">
                            <div className="h-full flex flex-col items-center text-center">
                                <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src={`https://picsum.photos/600/900?a=${item.title}`} />
                                <div className="w-full">
                                    <h2 className="title-font font-medium text-lg text-gray-900">{item.title}</h2>
                                    <h3 className="text-gray-500 mb-3">{item.desc}</h3>
                                    <span className="inline-flex">
                                        <a className="text-gray-500" onClick={() => { deleteTodo(item.title) }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                                            </svg>

                                        </a>
                                        <a className="ml-2 text-gray-500" href={`/edit/${item.title}`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                            </svg>

                                        </a>
                                        {/* <a className="ml-2 text-gray-500">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                            </svg>
                                        </a> */}
                                    </span>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </section>
    )
}

export default todos