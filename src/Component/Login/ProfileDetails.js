import React from 'react';
import { FaCalendarAlt, FaClock, FaHome, FaMap, FaPhone, FaPhoneAlt, FaUserCircle } from 'react-icons/fa';

const ProfileDetails = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const date= form.date.value;
        const name = form.name.value;
        const phone = form.phone.value;
        const time= form.time.value;
        const address= form.address.value;
        const contact= form.contact.value;
        const operator= form.operator.value;
        const neighbourhood= form.neighbourhood.value;
        const comment= form.comment.value;
        const target= form.target.value;
        console.log(target,name)
    }
    return (
        <div className='w-10/12 mx-auto'>
            <div>
                <h1 className='mt-8'>Jane D Modric</h1>
                <div className='flex'>
                    <img src="https://www.svgrepo.com/show/127575/location-sign.svg" alt="" className='h-3 w-4 my-1 mr-2'/>
                    <p className='text-sm'>Ariana Jarusica</p>
                </div>
                <form onSubmit={handleSubmit} className='my-5 space-y-5'>
                <div className='relative flex'>
                        <input type="text" name="date" placeholder="30 December, 2022" className="input input-bordered w-full" required />
                            <div className='absolute top-1/2 transform -translate-y-1/2 right-3 text-slate-600'><FaCalendarAlt></FaCalendarAlt></div>
                       </div>
                <div className='relative flex'>
                        <input type="text" name="name" placeholder="Sure Name" className="input input-bordered w-full" required />
                            <div className='absolute top-1/2 transform -translate-y-1/2 right-3 text-slate-600'><FaUserCircle></FaUserCircle></div>
                       </div>
                <div className='relative flex'>
                        <input type="number" name="phone" placeholder="Contact Number" className="input input-bordered w-full" required />
                            <div className='absolute top-1/2 transform -translate-y-1/2 right-3 text-slate-600'><FaPhoneAlt></FaPhoneAlt></div>
                       </div>
                <div className='relative flex'>
                        <textarea  id="w3review" name="address" placeholder="Address" rows="2" cols="50" className="border rounded-lg p-3 w-full" ></textarea>
                            <div className='absolute top-1/3 transform -translate-y-1/2 right-3 text-slate-600'><FaHome></FaHome></div>
                       </div>
                <div className='relative flex'>
                        <input type="text" name="time" placeholder="time" className="input input-bordered w-full" required />
                            <div className='absolute top-1/2 transform -translate-y-1/2 right-3 text-slate-600'><FaClock></FaClock></div>
                    </div>
                    <select name="contact" id="cars" className='input input-bordered w-full text-slate-400'>
                      <option value="volvo">Entered into contact</option>
                      <option value="saab">Saab</option>
                      <option value="mercedes">Mercedes</option>
 
                    </select>
                    <select name="operator" id="cars" className='input input-bordered w-full text-slate-400'>
                      <option value="volvo">Operator</option>
                      <option value="saab">Saab</option>
                      <option value="mercedes">Mercedes</option>
 
                    </select>
                    <input type="text" name="comment" placeholder="Comment" className="input input-bordered w-full " required />
                    <input type="text" name="neighbourhood" placeholder="Neighbourhood" className="input input-bordered w-full" required />
                    
                    <select name="target" id="cars" className='input input-bordered w-full text-slate-400'>
                      <option  value="volvo">Daily target</option>
                      <option value="saab">Saab</option>
                      <option value="mercedes">Mercedes</option>
 
                    </select>
                    <div className='flex justify-center'>
                        <input className='btn bg-violet-500 border-none mr-8' type="cancel" value="cancel" />
                        <input className='btn bg-violet-500 border-none' type="submit" value="Save" />
                    </div>
              
                </form>
            </div>
            
        </div>
    );
};

export default ProfileDetails;