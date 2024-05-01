import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'


const About = () => {
    return (
        <div className="hero min-h-screen mt-6">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                <img src={parts} className="w-1/2 absolute right-5 top-1/2 border-8 border-white rounded-lg shadow-2xl" />
                </div>
                <div className='lg:w-1/2'>
                    <h3 className='text-orange-500 text-2xl font-bold mb-5'>About Us</h3>
                    <h1 className="text-5xl font-bold text-black">We are qualified & of experience in this field</h1>
                    <p className="py-6 text-slate-600">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <p className='text-slate-600'>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <button className="btn bg-orange-500 mt-5 text-white">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;