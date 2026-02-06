import { useState } from "react";
import AddTask from "./componets/AddTask";
import Tasks from "./componets/tasks";
import { v4 as uuidv4, v4  } from "uuid";

function App() {
  const[tasks, setTasks] = useState([{
    id: 1,
    title: "estudar programação",
    description: "descrição da tarefa",
    isCompleted: false
  },
  {id:2,
    title: "estudar react",
    description: "estudar react até entender os conceitos básicos",
    isCompleted: false
  },
  {id:3,
    title: "estudar tailwindcss",
    description: "estudar tailwindcss para estilizar meus projetos",
    isCompleted: false
  }

  ]);
  function onTasksClick(taskId){
    const newtasks=tasks.map(task=>{
      //PRECISO ATUALIZAR ESSA TAREFA
      if (task.id===taskId){
        return{...task, isCompleted: !task.isCompleted};
      
      }
      //NÂO PRECISA ATUALIZAR ESSA TAREFA
      return task;
    });
    setTasks(newtasks);

  }
  function onDeleteTaskClick(taskId){
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasks(newTasks);
  }
  function onAddTaskSubmit(title, description){
    const newTask ={
      id: v4(),
      title,
      description,
      isCompleted: false
    };
    setTasks([...tasks,newTask]);
    }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
      <h1 className="text-3xl text-slate-100 font-bold text-center">
        Gerenciador de Tarefas
        </h1>
      <AddTask onAddTaskSubmit={onAddTaskSubmit} />
      <Tasks tasks={tasks} onTasksClick={onTasksClick} onDeleteTaskClick={onDeleteTaskClick} />
      </div>
    </div>
  );
}

export default App;
