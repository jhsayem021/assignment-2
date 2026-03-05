import React from 'react';

const SingleTicket = ({ticket, handleTaskAdd}) => {
    return (
        <div onClick={()=>handleTaskAdd(ticket)} class="card  mx-auto bg-[#FFFFFF] rounded-xl p-6 shadow-sm">

                <div class="flex items-start justify-between mb-4">

                    <div>
                        <h2 class="text-[18px] font-semibold text-slate-800">
                            {ticket.title}
                        </h2>
                        <p class="text-gray-500 mt-2 text-[16px] line-clamp-2">
                            {ticket.description}
                        </p>
                    </div>
                    <span class="flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-[14px] font-medium">
                        <span class="w-3 h-3 bg-green-600 rounded-full"></span>
                        {ticket.status}
                    </span>

                </div>
                <div class="flex items-center justify-between text-gray-600 mt-6">

                    <div class="flex items-center gap-4">
                        <span class="text-gray-500 font-medium text-[14px]">
                            #{ticket.id}
                        </span>
                        <span class="text-red-500 font-semibold text-[14px]">
                            {ticket.priority}  PRIORITY
                        </span>
                    </div>
                    <div class="flex items-center gap-6">
                        <span class="text-gray-500 text-[14px]">
                            {ticket.customer}
                        </span>
                        <span class="flex items-center gap-2 *:">
                            <i class="fa-solid fa-calendar"></i>

                            {ticket.createdAt}
                        </span>
                    </div>

                </div>

            </div>
    );
};

export default SingleTicket;