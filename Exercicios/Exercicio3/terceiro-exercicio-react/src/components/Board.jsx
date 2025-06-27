const Board = ({ task, index, taskList, setTaskList }) => {
    const handleDelete = () => {
        let removeIndex = taskList.indexOf(task);
        taskList.splice(removeIndex, 1);
        setTaskList((currentTasks => currentTasks.filter(todo => index === removeIndex)))
    }
    return (
        <>
            <div className="paragrafo">
                <p>{task}</p>
                <button className="botao-deletar"
                    onClick={handleDelete}>
                    Deletar
                </button>
            </div>
        </>
    )
}

export default Board;