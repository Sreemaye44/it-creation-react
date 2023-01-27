import React from 'react';
import { FaArrowCircleRight, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Area from './Area';

const HomeSwiper = () => {
    return (
        <div className='bg-purple-400'>
            <div className='w-10/12 mx-auto pt-16 '>
            <Link to='/profile'><div className='flex gap-5'>
            <div className="avatar">
  <div className="w-16 rounded-full">
    <img src="https://s3-alpha-sig.figma.com/img/f74e/1e9b/93cb672b662caf016b8cd02a8bd52524?Expires=1675641600&Signature=LFDPr5rznkSJppwUVyvAxecGwY-h4nsmMdDe7KA3MXFDItk7zStT91xSp~ki0zN24ks7RsBYgKVhv67ZTUl06aeYx3ce0OTQKVnsxFnQpnrtI~4jUz9llNb7LYYr~~L4S62lanpaQznbowUr2Bq~8DtpvnHZYFv~cQk9RX0fZ6NndHMhQJeyD5f16Asc2vbQi15tcqY-yU9Ro69pZ2xznxXuLkW8r9qeMD~htbXtnB~UXwmFj9I5Ku8DfCV21urrebAGhTSgxUh6YNp2CP1M3F1nuKKPh~C41ey7yNaAhePk6VOtR8gPu~nQhI5Xb7-8Hkx1tHKdSaQBNakjLWLw8g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt='' />
                    </div>
                    
                </div>
                <div>
                        <h1 className='font-bold text-lg'>Danial</h1>
                        <h2 className='font-semibold'>Marketing Officer</h2>
                    </div>
            </div></Link>


            </div>
            <div className="carousel max-w-sm p-5 space-x-4 mx-2 rounded-box">
  <div id="slide1" className="carousel-item">
                    <div className='bg-indigo-300 p-5 rounded-lg relative'>
                    <svg width="16" height="25" viewBox="0 0 16 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.238 10.4208C14.0015 12.0296 14.0148 13.4142 12.2823 15.0517L13.9594 16.5817C16.6162 14.0705 16.59 11.3305 13.8856 8.86348L12.238 10.4208ZM10.6236 17.2769C10.6063 16.9939 10.4713 16.7282 10.2471 16.5359C10.0228 16.3436 9.72689 16.2398 9.42173 16.2463L5.38763 16.332C4.99523 15.8058 4.32156 14.6388 4.30149 12.8012C4.28471 10.9604 4.93843 9.78016 5.31992 9.25291L9.35417 9.26981C9.65949 9.27157 9.95358 9.16295 10.1742 8.96693C10.3948 8.77091 10.5246 8.50288 10.5361 8.21957L10.7848 2.22926C10.7967 1.94542 10.6891 1.66842 10.4847 1.45709C10.2803 1.24576 9.99518 1.11675 9.68997 1.09745L6.33716 0.886591C6.04924 0.889449 5.77246 0.990334 5.55932 1.17011C5.34079 1.3533 0.222364 5.74584 0.288513 12.8358C0.348482 19.0188 4.31506 23.0856 5.47397 24.1428C5.64336 24.2973 5.75229 24.3875 5.78161 24.4112C5.99793 24.5875 6.27687 24.6834 6.56473 24.6803L9.91297 24.4126C10.2178 24.3885 10.5004 24.255 10.7009 24.0404C10.9014 23.8259 11.004 23.5473 10.9868 23.2637L10.6236 17.2769Z" fill="#CA33FF" />
                            

                        </svg> 
                        
                        <div className='flex mt-10 justify-between'>
                            <div>
                            <p className='font-semibold'>Get in touch today</p>
                        <h2 className='text-xl font-semibold'>10</h2>
                       </div>
                        <a href="#slide2" className="rounded-full"><FaArrowRight className='bg-white text-xl rounded-2xl p-1 ml-3 mt-3'></FaArrowRight></a>
                       </div>


    </div>
  </div> 
  <div id="slide2" className="carousel-item">
                    <div className='bg-indigo-300 p-5 rounded-lg relative'>
                    <svg width="17" height="24" viewBox="0 0 17 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.1029 9.98223V6.24172C11.3228 6.5403 12.5152 7.10896 13.4908 8.00357L13.4949 7.99802C13.5678 8.05611 13.6562 8.09607 13.7569 8.09607C13.8893 8.09607 14.0029 8.03206 14.0813 7.93771L14.0869 7.93882L15.6637 5.71598L15.66 5.71413C15.7248 5.6394 15.7677 5.54468 15.7677 5.43813C15.7677 5.31233 15.7111 5.20208 15.6245 5.12401C14.162 3.77321 12.2947 2.96222 10.1029 2.7184V0.570295H10.1026C10.1026 0.334617 9.91165 0.143707 9.67598 0.143707H7.9822C7.74653 0.143707 7.55562 0.334617 7.55562 0.570295V2.66401C3.89651 3.04324 1.72843 5.37449 1.72843 8.11197C1.72843 11.7981 4.76412 12.8551 7.55562 13.5329V17.7337C5.76306 17.4125 4.2898 16.4835 3.28752 15.4435C3.28049 15.4357 3.2731 15.4291 3.26533 15.422L3.24609 15.4032L3.24313 15.4072C3.16893 15.3436 3.07484 15.3079 2.97711 15.3062C2.90099 15.3069 2.82648 15.3282 2.76147 15.3678C2.69647 15.4074 2.64339 15.4639 2.60787 15.5312L2.60269 15.5304L1.07652 17.7962L1.07837 17.7999C1.00978 17.8759 0.971356 17.9743 0.970337 18.0767C0.970337 18.2124 1.03767 18.3279 1.13609 18.4059L1.13202 18.4119C2.62267 19.9025 4.70973 20.9865 7.55562 21.2307V23.2434C7.55562 23.4791 7.74653 23.67 7.9822 23.67H9.67598C9.91165 23.67 10.1026 23.4787 10.1026 23.2434H10.1029V21.2304C14.0873 20.8234 16.0659 18.4933 16.0659 15.4842C16.0659 11.7714 12.9218 10.6867 10.1029 9.98223ZM7.55525 9.35844C6.4442 9.00659 5.685 8.59961 5.685 7.8134C5.685 6.89215 6.3628 6.24172 7.55525 6.07893V9.35844ZM10.1029 17.7881V14.1563C11.2957 14.5356 12.136 14.9699 12.136 15.8638C12.136 16.7314 11.4852 17.5169 10.1029 17.7881Z" fill="#CA33FF"/>
</svg>

                        
                        <div className='flex mt-10 justify-between'>
                            <div>
                            <p className='font-semibold'>Get in touch today</p>
                        <h2 className='text-xl font-semibold'>10</h2>
                       </div>
                        <a href="#slide3" className="rounded-full"><FaArrowRight className='bg-white text-xl rounded-2xl p-1 ml-3 mt-3'></FaArrowRight></a>
                       </div>


    </div>
  </div> 
  <div id="slide3" className="carousel-item">
                    <div className='bg-indigo-300 p-5 rounded-lg relative'>
                    <svg width="17" height="24" viewBox="0 0 17 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.1029 9.98223V6.24172C11.3228 6.5403 12.5152 7.10896 13.4908 8.00357L13.4949 7.99802C13.5678 8.05611 13.6562 8.09607 13.7569 8.09607C13.8893 8.09607 14.0029 8.03206 14.0813 7.93771L14.0869 7.93882L15.6637 5.71598L15.66 5.71413C15.7248 5.6394 15.7677 5.54468 15.7677 5.43813C15.7677 5.31233 15.7111 5.20208 15.6245 5.12401C14.162 3.77321 12.2947 2.96222 10.1029 2.7184V0.570295H10.1026C10.1026 0.334617 9.91165 0.143707 9.67598 0.143707H7.9822C7.74653 0.143707 7.55562 0.334617 7.55562 0.570295V2.66401C3.89651 3.04324 1.72843 5.37449 1.72843 8.11197C1.72843 11.7981 4.76412 12.8551 7.55562 13.5329V17.7337C5.76306 17.4125 4.2898 16.4835 3.28752 15.4435C3.28049 15.4357 3.2731 15.4291 3.26533 15.422L3.24609 15.4032L3.24313 15.4072C3.16893 15.3436 3.07484 15.3079 2.97711 15.3062C2.90099 15.3069 2.82648 15.3282 2.76147 15.3678C2.69647 15.4074 2.64339 15.4639 2.60787 15.5312L2.60269 15.5304L1.07652 17.7962L1.07837 17.7999C1.00978 17.8759 0.971356 17.9743 0.970337 18.0767C0.970337 18.2124 1.03767 18.3279 1.13609 18.4059L1.13202 18.4119C2.62267 19.9025 4.70973 20.9865 7.55562 21.2307V23.2434C7.55562 23.4791 7.74653 23.67 7.9822 23.67H9.67598C9.91165 23.67 10.1026 23.4787 10.1026 23.2434H10.1029V21.2304C14.0873 20.8234 16.0659 18.4933 16.0659 15.4842C16.0659 11.7714 12.9218 10.6867 10.1029 9.98223ZM7.55525 9.35844C6.4442 9.00659 5.685 8.59961 5.685 7.8134C5.685 6.89215 6.3628 6.24172 7.55525 6.07893V9.35844ZM10.1029 17.7881V14.1563C11.2957 14.5356 12.136 14.9699 12.136 15.8638C12.136 16.7314 11.4852 17.5169 10.1029 17.7881Z" fill="#CA33FF"/>
</svg>

                        
                        <div className='flex mt-10 justify-between'>
                            <div>
                            <p className='font-semibold'>Get in touch today</p>
                        <h2 className='text-xl font-semibold'>10</h2>
                       </div>
                        <a href="#slide1" className="rounded-full"><FaArrowRight className='bg-white text-xl rounded-2xl p-1 ml-3 mt-3'></FaArrowRight></a>
                       </div>


    </div>
  </div> 
 
            </div>
            <Area></Area>
            
        </div>
    );
};

export default HomeSwiper;