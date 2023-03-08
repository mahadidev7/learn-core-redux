import { useDispatch, useSelector } from "react-redux";
import { statusChanged } from "../redux/filtera/actions";

const numberOfTodos = (no_of_todos) => {
  switch (no_of_todos) {
    case 0:
      return "No task";
    case 1:
      return "1 task";

    default:
      return `${no_of_todos} tasks`;
  }
};

export default function Footer() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const todoRemaining = todos.filter((todo) => !todo.completed).length;

  const handleStatusChange = (status) => {
    dispatch(statusChanged(status));
  };
  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      <p>{numberOfTodos(todoRemaining)} left</p>
      <ul className="flex space-x-1 items-center text-xs">
        <li className="cursor-pointer font-bold" onClick={()=> handleStatusChange('All')}>All</li>
        <li>|</li>
        <li className="cursor-pointer" onClick={()=> handleStatusChange('Incomplete')}>Incomplete</li>
        <li>|</li>
        <li className="cursor-pointer" onClick={()=> handleStatusChange('Complete')}>Complete</li>
        <li></li>
        <li></li>
        <li className="h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer bg-green-500"></li>
        <li className="h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer"></li>
        <li className="h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer"></li>
      </ul>
    </div>
  );
}
