import React from 'react';


const Todos = ({ todo, setData }) => {

    const handleDelete = (indexId) => {
        const newData = todo.filter((d, index) => index !== indexId);
        setData(newData);
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {todo.map((d, index) => (
                    <div key={index} className="bg-white shadow-md rounded-md p-4 flex flex-col justify-between">
                        <p className="text-gray-800 text-lg">{d}</p>
                        <button onClick={() => handleDelete(index)} className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded mt-4">
                            DELETE
                        </button>
                       
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Todos;
