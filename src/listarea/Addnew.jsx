import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from  "../hooks/useAxiosPublic"
import { FaUtensils } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";



const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Addnew = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit,reset } = useForm();
    const axiosPublic = useAxiosPublic();
    
    const onSubmit = async (data) => {
        console.log(data)
        //  upload an image on imagebb then get the url of the image 
        const imageFile = { image: data.image[0] };
        const res = await axiosPublic.post(image_hosting_api,imageFile,{
            headers:{
                'Content-Type':'multipart/form-data'
            }
        });
        if(res.data.success){
            // now send the menu item data to the server with the image
            const menuItem = {
                title: data.name,
                priority: data.category,
                deadline: data.price,
                details: data.recipe,
                image: res.data.data.display_url,
                email: user?.email
            }
            
             const menuRes = await axiosPublic.post('/tasklist', menuItem);
             console.log(menuRes.data);
             if(menuRes.data.insertedId){
                // show success popup
                reset();
                Swal.fire({
                    title: 'New task added successfully',
                    icon:"success",
                    text: ' item add successfully',
                    timer: 2000
                  })
             }
        }
        console.log('with image url', res.data);
    }



    return (
        <div>
              <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Task title</span>
                        </label>
                        <input type="text"
                            {...register('name', { required: true })}
                            placeholder="Type here" className="input input-bordered w-full " />
                    </div>

                    <div className=" flex gap-6">
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">priority</span>
                            </label>
                            <select defaultValue="default" {...register('category', { required: true })}
                                className="select select-bordered w-full ">
                                <option disabled value="default">select a category</option>
                                <option value="low">low</option>
                                <option value="mideum">mideum</option>
                                <option value="high">high</option>
                               
                            </select>
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">deadlines</span>
                            </label>
                            <input type="date"
                                {...register('price', { required: true })}
                                placeholder="Type here" className="input input-bordered w-full " />
                        </div>

                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Task details</span>
                        </label>
                        <textarea {...register('recipe', { required: true })} className="textarea textarea-bordered h-24" placeholder="write here"></textarea>

                    </div>
                    <div className="form-control">
                    <label className="label">
                            <span className="label-text">Task Photo</span>
                        </label>
                        <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs border-2" />
                    </div>
                    <button className="btn btn-secondary mt-4">
                        Add New task <FaUtensils className="ml-4"></FaUtensils>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Addnew;