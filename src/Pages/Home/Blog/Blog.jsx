import React from 'react';

const Blog = () => {
    return (
        <div className=' overflow-hidden'>
        <div><h1 className=' text-center text-5xl my-32 text-orange-600'>OUR BLOG</h1>
            <div className=' mb-32 flex gap-8'>

                <div data-aos="fade-right"
                    data-aos-offset="600"
                    data-aos-easing="ease-in-sine" data-aos-duration="500"><img className=' h-screen' src="https://images.unsplash.com/photo-1534637950656-9e6753b6da6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80" alt="" /></div>

                <div>   <div data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500"> <img className=' h-64 w-full mb-14' src="https://images.unsplash.com/photo-1625047509248-ec889cbff17f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80" alt="" /></div>

                    <div data-aos="fade-up"
                        data-aos-duration="3000" className=' flex gap-5'>
                        <p><img className=' h-80 ' src="https://images.unsplash.com/photo-1599474151975-1f978922fa02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" /></p>
                        <p> <img className=' h-80 ' src=" https://images.unsplash.com/photo-1548184274-f1d3776448b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" /></p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Blog;