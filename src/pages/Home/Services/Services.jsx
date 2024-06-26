import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])


    return (
        <div>
            <div className="text-center">
                <h3 className="text-3xl text-orange-500 mb-5 font-bold">Services</h3>
                <h3 className="text-black font-bold text-5xl">Our Service Area</h3>
                <h3 className="text-xl mt-4">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServiceCard
                    key={service._id}
                    service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};



export default Services;