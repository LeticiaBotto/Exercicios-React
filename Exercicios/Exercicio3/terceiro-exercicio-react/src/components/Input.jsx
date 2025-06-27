import { useState } from 'react';


const Input = ({ taskList, setTaskList }) => {
    const [input, setInput] = useState("");

    const handleAddTask = (e) => {
        e.preventDefault()
        setTaskList([...taskList, input]);
        setInput("");
    }

    return (
        <>
            <form className="input-caixa">
                <input
                    className="input"
                    type="text"
                    placeholder="Add uma tarefa"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button
                    className="botao"
                    onClick={handleAddTask}>Adicionar</button>
            </form>
        </>
    )
}

export default Input