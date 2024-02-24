import { useState } from 'react';
import './App.css';

import Todos from './components/Todos';

function Comments() {
  const [data, setData] = useState('');

  const [todo, setTodo] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();


    const newData = [...todo, data];
    setTodo(newData);

    setData('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='flex gap-4 m-4 aligin-middle justify-center '>
        <input
          type='text'
          value={data}
          placeholder='Enter message'
          onChange={(e) => setData(e.target.value)}

          className='border-2 border-black font-semibold py-2 px-4 rounded mt-4'
        />
        <button type='submit' className='bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded mt-4'>ADD MESSAGE</button>
      </form>

      <Todos todo={todo} setData={setTodo} />
    </div>
  );
}

export default Comments;
