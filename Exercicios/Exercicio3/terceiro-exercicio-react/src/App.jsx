import Board from "./components/Board.jsx";
import Input from "./components/input.jsx";
import { useState } from "react";
import './App.css';

function App() {
  const [taskList, setTaskList] = useState([]);

  return (
    <>
      <div className="caixa">
        <div className="conteudo">
          <h1 className="titulo">Lista de Tarefas</h1>
          <Input taskList={taskList} setTaskList={setTaskList} />
        </div>
        <div className="items">
          {taskList.map((task, index) =>
            <Board
              key={index}
              index={index}
              task={task}
              taskList={taskList}
              setTaskList={setTaskList}
            />
          )}
        </div>
      </div>
    </>
  )
}

export default App
