
import CountCardBg from '../../assets/vector1.png';
const CountCard = ({title,color1,color2, taskAdded ,taskResolved}) => {

    return (
        <div className= {`card bg-[${CountCardBg}]  bg-linear-to-r from-[${color1}] to-[${color2}] lg:w-96 py-8`}>
            <div className={`card-body  items-center text-center`}>
                <h2 className="card-title text-white">{title}</h2>
                <p className='text-4xl font-bold'> {title === "In-Progress" ? taskAdded.length : taskResolved.length}</p>
            </div>
        </div>
    );
};

export default CountCard;

// ((${title} === "In-Progress")? bg-gradient-to-r from-[#632EE3] to-[#9F62F2]:bg-gradient-to-r from-[#54CF68] to-[#00827A])