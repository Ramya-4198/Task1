/* eslint-disable react/prop-types */
import { Button, TextInput } from '@mantine/core';

const Task = ({ task, onEditTask, onDelete }) => {
  return (
    <div>
    <TextInput
      maw={150}
      value={task.name}
      onChange={(e) => onEditTask(task.id, e.currentTarget.value)}
    />
     <Button onClick={()=>onDelete(task.id)}>Delete</Button>
     </div>
  );
};

export default Task;
