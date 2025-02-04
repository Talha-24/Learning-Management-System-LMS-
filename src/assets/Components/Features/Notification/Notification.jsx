import React from 'react'
import "./Notification.css";
const Notification = () => {
    return (
        <div id="Notification" className='w-[250px] absolute top-[10%] right-[5%] bg-[#EBE8D0] text-center'>
            <p className='text'>Notification</p>
            <div id='iconsContainer'>
               
                    <img id='notificationimage' className='rounded-full object-cover' src="src\assets\Components\Others\image.png" alt="" />
                    {/* Dynamic Image */}
              
                <div id='NotificationDetails'>
                    <p id='NotificationText' className="">Lorem, ipsum dolor sit amet consectetur adipisicing <br /> <br /> <span id="NotificationTime">1m ago</span> </p>

                </div>
            </div>
            <div id='iconsContainer'>
               
               <img id='notificationimage' className='rounded-full object-cover' src="src\assets\Components\Others\image.png" alt="" />
               {/* Dynamic Image */}
         
           <div id='NotificationDetails'>
               <p id='NotificationText' className="">Lorem, ipsum dolor sit amet consectetur adipisicing <br /> <span id="NotificationTime">1m ago</span> </p>

           </div>
       </div>
       <div id='iconsContainer'>
               
               <img id='notificationimage' className='rounded-full object-cover' src="src\assets\Components\Others\image.png" alt="" />
               {/* Dynamic Image */}
         
           <div id='NotificationDetails'>
               <p id='NotificationText' className="">Lorem, ipsum dolor sit amet consectetur adipisicing <br /> <br /> <span id="NotificationTime">1m ago</span> </p>

           </div>
       </div>
       <div id='iconsContainer'>
               
               <img id='notificationimage' className='rounded-full object-cover' src="src\assets\Components\Others\image.png" alt="" />
               {/* Dynamic Image */}
         
           <div id='NotificationDetails'>
               <p id='NotificationText' className="">Lorem, ipsum dolor sit amet consectetur adipisicing <br /> <br /> <span id="NotificationTime">1m ago</span> </p>

           </div>
       </div>
       <div id='iconsContainer'>
               
               <img id='notificationimage' className='rounded-full object-cover' src="src\assets\Components\Others\image.png" alt="" />
               {/* Dynamic Image */}
         
           <div id='NotificationDetails'>
               <p id='NotificationText' className="">Lorem, ipsum dolor sit amet consectetur adipisicing <br /> <br /> <span id="NotificationTime">1m ago</span> </p>

           </div>
       </div>
       <div id='iconsContainer'>
               
               <img id='notificationimage' className='rounded-full object-cover' src="src\assets\Components\Others\image.png" alt="" />
               {/* Dynamic Image */}
         
           <div id='NotificationDetails'>
               <p id='NotificationText' className="">Lorem, ipsum dolor sit amet consectetur adipisicing <br /> <br /> <span id="NotificationTime">1m ago</span> </p>

           </div>
       </div>
            
            
        </div>
    )
}

export default Notification