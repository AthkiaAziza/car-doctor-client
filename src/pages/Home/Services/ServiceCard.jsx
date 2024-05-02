import PropTypes from 'prop-types';
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {_id, title, img, price} = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold">{title}</h2>
                <div className='flex items-center mt-4'>
                <p className=' text-orange-500 text-2xl'>Price: ${price}</p>
                <Link to={`/checkout/${_id}`}>
                <button className='text-orange-500 text-2xl'><FaArrowRight></FaArrowRight></button>
                </Link>
                </div>
            </div>
        </div>
    );
};

ServiceCard.propTypes = {
    service:PropTypes.object
}

export default ServiceCard;