import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



const CanUse = () => {

    useEffect(() => {
        Aos.init({
          duration: 2000,
          offset: 50,
        });
        Aos.refresh();  
      }, []);
    
    return (
        <div className="pt-5 pb-10">
            <h1 className="text-3xl text-center font-bold" >Who can be our regular user </h1>
            <div className="flex justify-between items-center gap-10">
                <div className="w-[40%]">
                   <p className="font-bold text-xl text-orange-500 pt-5">Clear your mind</p>  
                   <h1 className="text-4xl font-bold py-10">The fastest way to get tasks out of your head.</h1>
                   <p className="text-xl font-bold text-justify">Type just about anything into the task field and Todoist&apos;s one-of-its-kind natural language recognition will instantly fill your to-do list</p>

                </div>
                <div className="w-[60%] pt-10 grid grid-cols-2 gap-5 justify-center items-center">
                   <div  data-aos="zoom-in-left">
                    <img className="w-60" src="https://i.ibb.co/DV5SzWB/1-BLv541u-ZGXTFe-VXb-BOYOWw.jpg" alt="" />
                    <h1 className="pl-16 font-bold">Product manager</h1>
                   </div>
                   <div data-aos="zoom-in-right">
                    <img className="w-60" src="https://i.ibb.co/nnbgBLY/download-1.png" alt="" />
                    <h1 className="pl-12 font-bold">Software engineer</h1>
                   </div>
                   <div data-aos="zoom-in-left">
                    <img className="w-52" src="https://i.ibb.co/88JtpmT/83690332-smiling-banking-clerk-showing-bank-credit-loan-contract-or-mortgage-agreement-sitting-at-de.jpg" alt="" />
                    <h1 className="pl-20 font-bold">Banker</h1>
                   </div>
                   <div data-aos="zoom-in-right">
                    <img className="w-60" src="https://i.ibb.co/V9ggSnb/download-2.png" alt="" />
                    <h1 className="pl-16 font-bold">Personal assistant</h1>
                   </div>
                   <div data-aos="zoom-in-left">
                    <img className="w-60" src="https://i.ibb.co/nD1FXf5/isometric-business-people-vector-illustration-cartoon-d-man-woman-employee-character-office-professi.jpg" alt="" />
                    <h1 className="pl-8 font-bold">Corporate professionals</h1>
                   </div>
                   <div data-aos="zoom-in-right">
                    <img className="w-60" src="https://i.ibb.co/BqThFh7/main-qimg-6e5f036f2fe01123689936dc3c241904-lq.jpg" alt="" />
                    <h1 className="pl-16 pt-16 font-bold">Stock broker</h1>
                   </div>
                  
                </div>
            </div>
        </div>
    );
};

export default CanUse;