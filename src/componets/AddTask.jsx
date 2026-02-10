import { useState } from "react";

// eslint-disable-next-line react/prop-types
function AddTask({ onAddTaskSubmit}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <input
        type="text"
        placeholder="Digite o titulo da tarefa"
        className="bg-white border border-slate-200 outline-slate-400 px-4 py-2 rounded-md"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Digite a descrição da tarefa"
        className="bg-white border border-slate-200 outline-slate-400 px-4 py-2 rounded-md"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      ></input>
      <button
        onClick={() =>{
        //VERIFICAR SE O TITULO E A DESCRIÇÃO FORAM PREENCHIDOS
          if (!title.trim()|| !description.trim()){
            return alert("Por favor, preencha o título e a descrição da tarefa.");
          }
           onAddTaskSubmit(title, description);
           setTitle("");
           setDescription("");
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
