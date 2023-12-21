import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div>
              <div className="carousel-item relative  h-[500px]  ">
                <img src='https://i.ibb.co/1sgWLMC/Project-Manager.jpg' className=" w-full " />
                <div className='absolute text-center h-full bg-gradient-to-r from-[#15151557] to-[rgba(21, 21, 21, 0.00)] w-full '>
                    <div className=' space-y-5 pt-40'>
                        <h1 className='text-5xl text-pink-300 font-bold '> Manage your time with  <br /> <span className=" text-orange-500">your own way</span> </h1>
                       
                       
                        <Link to="/latest"> 
                         <button className='btn btn-accent hover:bg-orange-500 text-2xl mt-5 border rounded-lg text-white'>Let&apos;s Explore</button>
                        </Link></div>
                </div>

            </div>
        </div>
    );
};

export default Banner;