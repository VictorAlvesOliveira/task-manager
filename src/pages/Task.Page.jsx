import { ChevronLeftIcon } from "lucide-react";
import { useSearchParams } from "react-router-dom";

function TaskPage(){
    const [searchParams] = useSearchParams();
    const title = searchParams.get('title')
    const description = searchParams.get('description')
    return(
       <div className ="w-screen h-screen bg-slate-500 p-6">
        <div className = "flex justify-center relative">
            <button className = "absolute left-0 top-0 botton-0 text-slate-100">
                <ChevronLeftIcon />
            </button>
        </div>
    <div className="w-[500px]  space-y-4 bg-slate-">
      <h1 className="text-3xl text-slate-100 font-bold text-center">
        detalhes da tarefa
        </h1>
        <div className = "bg-slate-200 p-4 rounded-md">
            <h2 className ="text-xl font-bold text-slate-600">{title}</h2>
            <p className = "text-slate-600">{description}</p>
        </div>
      </div>
      </div>
    )

}

export default TaskPage;