import { useState } from 'react';

const EditTask = ({ taskId, currentName, onSave }: any) => {
  const [newName, setNewName] = useState(currentName);

  const handleInputChange = (e: any) => {
    setNewName(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if(newName === '') { return }
    onSave(taskId, newName); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newName}
        onChange={handleInputChange}
        placeholder="Enter new task name..."
        className='rounded-lg mr-2 bg-darkGray2 pl-2 text-white'
      />
    </form>
  );
};

export default EditTask;
