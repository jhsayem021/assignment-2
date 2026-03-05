import React from 'react';

const TaskList = ({taskAdded, taskResolved, handleTaskResolve}) => {
    
    return (
        <div className='m-4'>
            <div className='mb-8'>
                <h1 className='text-xl font-bold text-[#34485A]'>Task Status</h1>
                {
                    taskAdded.length === 0 ? (
                        <p className="text-slate-600">No tasks in progress.</p>
                    ) : (   
                    taskAdded.map((task)=><div class="w-92 mx-auto bg-gray-100 rounded-xl p-6 shadow-sm">
                    <h2 className="text-xl font-semibold text-slate-800 mb-6">
                        {task.title}
                    </h2>
                    <button onClick={()=>handleTaskResolve(task)}
                        class="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 rounded-md transition">
                        Complete
                    </button>
                </div>))
                }
                
            </div>
            <div>
                <h1 className='text-xl font-bold text-[#34485A]'>Resolved Task</h1>
                    {
                       taskResolved.length === 0 ? (
                            <p className="text-slate-600">No resolved tasks.</p>
                        ) : (
                            taskResolved.map((task)=><div class="w-92 mx-auto bg-[#E0E7FF] rounded-xl p-6 shadow-sm mt-4">
                                <h2 className="text-xl font-semibold text-slate-800 mb-6 ">
                                    {task.title}
                                </h2>
                            </div>)
                        )
                    }
                </div>
        </div>
    );
};

export default TaskList;