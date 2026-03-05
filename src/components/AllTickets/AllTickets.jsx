import React, { use } from 'react';
import SingleTicket from './singleTicket';

const AllTickets = ({ TiketsPromise, handleTaskAdd }) => {
    const allTickets = use(TiketsPromise);


    return (
        <div>
            <h1 className="text-[24px] font-bold text-[#34485A] ms-5" >Customers Tickets {allTickets.length}</h1>
            <div className="grid lg:grid-cols-2 gap-4" >
                {allTickets.map(ticket =><SingleTicket key={ticket.id} ticket={ticket} handleTaskAdd = {handleTaskAdd} ></SingleTicket>
            
            )}
            </div>
        </div>
    );
};

export default AllTickets;