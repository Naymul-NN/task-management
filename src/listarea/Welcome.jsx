import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Wellcome = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-orange-500 pb-7">Wellcome to your task management area.................</h1>
            <div>
            <Carousel  autoPlay infiniteLoop   >
           <div>
               <img src="https://i.ibb.co/99rcKfj/d4eaf149-task-management.jpg" />
           </div>
           <div>
               <img src="https://i.ibb.co/SX2j7S8/task-management-officetimer.png" />
           </div>
           <div>
               <img src="https://i.ibb.co/nm3p3Ws/task-management-tile-To-Do-0.png" />
           </div>
       </Carousel>
            </div>
        </div>
    );
};

export default Wellcome;