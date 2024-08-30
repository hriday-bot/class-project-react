import { useState } from "react";

export function TodoList () {
    const [tasks, setTasks] = useState(["do homework", "eat bhaat"]);
    const [inputTask, setinputTask] = useState(null);

    const handleInputNewTask = (e) => {
        const value = e.target.value /// user le input gareko value esma auxa
        setinputTask(value);
    };

    const handleAddNewTask = () => {
        /**
         * say user input value is "cook food"
         * tasks = [ "do homework", "eat bhaat" ]
         * inputTask = "cook food"
         * [...tasks, inputTask] = ["do homework", "eat bhaat", "cook food"]
         */
        setTasks([...tasks, inputTask]);
    };

    return (
        <div>
            <h1>Task Manager</h1>
            <div>
                <label>
                    Enter task: 
                    <input onInput={handleInputNewTask} />
                </label>
                <button onClick={handleAddNewTask} >add task</button>
            </div>
            <ul>
                {
                    tasks.map((task) => {
                        return (
                            <li>
                                <span>{task}</span>
                                <button>remove task</button>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}