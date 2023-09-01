import { useState } from "react";
import TaskCreate from "./TaskCreate";

function TaskShow({ task, onDelete, onUpdate }) {
  const [showEdit, setShowEdit] = useState(false);
  const handleDelete = () => {
    onDelete(task.id);
  };

  const handleUpdate = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, newTitle, newTaskDesc) => {
    setShowEdit(false);
    onUpdate(id, newTitle, newTaskDesc);
  };

  return (
    <div className="task-show">
      {showEdit ? (
        <TaskCreate task={task} taskformUpdate={true} onUpdate={handleSubmit} />
      ) : (
        <div>
          <h3 className="task-title">Göreviniz :</h3>
          <p>{task.title}</p>
          <h3 className="task-title">Yapılacaklar :</h3>
          <p>{task.taskdesc}</p>
          <div>
            <button className="task-delete" onClick={handleDelete}>
              Sil
            </button>
            <button className="task-update" onClick={handleUpdate}>
              Güncelle
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskShow;
