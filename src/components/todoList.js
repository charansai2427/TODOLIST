import {FiEdit2} from "react-icons/fi"
import {RiDeleteBin3Line} from "react-icons/ri"


const TodoList = ({todo,updateList}) => {
    return<div>
        <span>{todo.title}</span>
        <FiEdit2 onClick={() => updateList("edit", todo)}/>
        <RiDeleteBin3Line onClick={() => updateList("delete", todo)}/>
    </div>
    
}

export default TodoList;
