import "./TodoList.css";

const TodoList = (props) => {
    return (
        <ul>
            {
                props.dataTodos.map(element => {
                    return <li key={element.id}>{ element.title }</li>
                })
            }
        </ul>
    );
}

export default TodoList;