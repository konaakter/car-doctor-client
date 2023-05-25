import React from 'react';
import person from '../../../images/about_us/person.jpg';
import parts from '../../../images/about_us/parts.jpg';

const About = () => {
    return (
        <div className=' overflow-hidden'>
            <div data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500" className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='lg:w-1/2 relative'>
                        <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                        <div >
                            <img src={parts} className="w-1/2 absolute right-5 top-1/2 rounded-lg border-8 border-white shadow-2xl" />
                        </div>

                    </div>
                    <div data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500" className='lg:w-1/2 space-y-5 p-4'>
                        <div> <h3 className='text-3xl text-orange-500 font-bold'>About Us</h3></div>
                        <div><h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1></div>
                        <div><p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p></div>
                        <div data-aos="fade-up"
                            data-aos-duration="3000"><button className="btn btn-warning">Get More Info</button></div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;