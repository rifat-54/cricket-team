import React from 'react';
import bgLogo from '../../assets/image/bg-shadow.png'
import flogo from '../../assets/image/logo-footer.png'

const Footer = () => {
    return (
        <div className=' relative  mt-64'>
            {/* part 1 */}
            <div className=' absolute -top-[20%] right-[5%] w-11/12 md:w-9/12 mx-auto border border-white   md:mx-20   space-y-6 p-4 rounded-md'>

            
            <div style={{backgroundImage:`url(${bgLogo})`}} className=' 
            0 rounded-md space-y-6 px-10 md:px-20 py-16 text-center' >
                <h2 className='text-3xl md:text-4xl font-bold'>Subscribe to our Newsletter</h2>
                <p className='text-white'>Get the latest updates and news right in your inbox!</p>
                <div className='flex flex-col sm:flex-row items-center justify-center gap-3'>
                    <input className='px-8 py-3 rounded-md border border-gray-400'  type="text" placeholder='Enter your mail' />
                    <button className='btn bg-gradient-to-t from-[#e462d0] to-[#ccc72b]'>Subscribe</button>
                </div>
            </div>

            </div>

            {/* part 2 */}
            <div className='bg-black pt-56 pb-16 px-4 sm:px-8  md:px-20 flex flex-col  items-center'>
                <div>
                    <img src={flogo} alt="" />
                </div>
                {/* text */}
                <div className='grid grid-cols-1 mt-12 md:grid-cols-3 gap-4 justify-between text-white'>
                    <div className='w-5/6'>
                        <h4 className='text-xl font-bold mb-4'>About Us</h4>
                        <p className='text-gray-300'>We are a passionate team dedicated to providing the best services to our customers.</p>
                    </div>
                    <div>
                        <h3 className='text-2xl font-bold mb-7'>Quick Links</h3>
                        <p className='text-gray-400'>Home</p>
                        <p className='text-gray-400'>Service</p>
                        <p className='text-gray-400'>About</p>
                        <p className='text-gray-400'>Contact</p>
                    </div>
                    {/* subscribe */}
                    <div>
                        <h3 className='text-2xl font-bold'>Subscribe</h3>
                        <p className='text-gray-400 my-5 w-4/6'>Subscribe to our newsletter for the latest updates.</p>
                        <div className='flex space-x-4'>
                            <input className='px-8 py-3 rounded-md border border-gray-400' type="text" placeholder='Enter your mail' />
                           <button className='btn bg-gradient-to-t from-[#e462d0] to-[#ccc72b]'>Subscribe</button>
                        </div>
                    </div>
                </div>
                <p className='text-gray-400 mt-20'>@2024 Your Company All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;