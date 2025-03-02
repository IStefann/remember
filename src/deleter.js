import { tasks } from "./maker";
import { allTasksLoad } from "./loader";

function deleteTask(index) {
            tasks.splice(index,1);
            allTasksLoad();
}


export { deleteTask };