import { useQuery } from "@tanstack/react-query";
import useAxiospublic from "../hooks/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";



const ManageTask = () => {
  const { user } = useContext(AuthContext);

  const axiosPublic = useAxiospublic();
  const getdata = async () => {
    const res = await axiosPublic.get(`/tasklist/${user.email}`);
    return res;
  };

  const { data, isLoading, refetch  } = useQuery({
    queryKey: ['tasklist'],
    queryFn: getdata,
  });

//   get ongo
const { data : ongo, refetch: ongofetch } = useQuery({
    queryKey: ['ongo'],
    queryFn: () => axiosPublic.get(`/ongo/${user.email}`),
  });

//  get done
const { data : done, refetch: donefetch } = useQuery({
    queryKey: ['done'],
    queryFn: () => axiosPublic.get(`/done/${user.email}`),
  });
  const handledelete = (id) => {
    axiosPublic.delete(`/tasklist/${id}`)
    .then((response) => {
        // Handle success, e.g., update the UI or refetch the data
        console.log("Item deleted successfully", response);
        if(response.data.deletedCount > 0){
            refetch()
              Swal.fire({
                title: "successfully move it",
                text: "Your file has been deleted.",
                icon: "success"
              });
          }
        // You may want to trigger a refetch of the wishlist data here
    })
    .catch((error) => {
        // Handle error, e.g., show an error message
        console.error("Error deleting item", error);
    })
}
const handleongo = (item) => {
   axiosPublic.post('/ongo',item)
   .then((res) =>{
    console.log(res)
    refetch();
    ongofetch();
    handledelete(item._id);
   })

   .catch((error) =>{
    console.error(error)
   })
}
const handledone = (item) => {
   axiosPublic.post('/done',item)
   .then((res) =>{
    console.log(res)
    refetch();
    donefetch();
    handledelete(item._id);
   })

   .catch((error) =>{
    console.error(error)
   })
}

  if (isLoading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }

  return (
    <div>
      <div className="border-2 border-red-200">
        <h1 className="text-center font-bold text-2xl pb-4">To Do list</h1>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Task title</th>
                <th>Task photo</th>
                <th>priority</th>
                <th>Deadline</th>
                <th>Will be</th>
                <th>action</th>
              </tr>
            </thead>
           
              
                <tbody >
                  {data?.data.map((item, index) => (
                        <tr key={item._id}>
                          <th>{index + 1}</th>
                          <td>{item.title}</td>
                          <td>
                            <div className="rounded-full w-12 h-12">
                              <img src={item.image} alt="Avatar Tailwind CSS Component" />
                            </div>
                          </td>
                          <td>{item.priority}</td>
                          <td>{item.deadline}</td>
                          <td><button onClick={()=> handleongo(item)} className="btn btn-sm bg-green-300">ongoing</button><button onClick={()=> handledone(item)}className="btn btn-sm pl-3 bg-green-400">done</button></td>
                          <td><button className="btn btn-sm"><FaRegEdit /></button><button onClick={()=> handledelete(item._id)} className="btn btn-sm"><MdDeleteForever /></button></td>
                        </tr>
                  ))}
                </tbody>
          </table>
        </div>
      </div>
           {/* ongoing section */}
      <div className="border-2 border-red-300 h-60 overflow-y-auto mt-7">
        <h1 className="text-center text-2xl font-bold text-green-300">Ongoing task list</h1>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Task title</th>
                <th>Task photo</th>
                <th>priority</th>
                <th>Deadline</th>
                <th>Will be</th>
               
              </tr>
            </thead>
           
              
                <tbody >
                  {ongo?.data.map((item, index) => (
                        <tr key={item._id}>
                          <th>{index + 1}</th>
                          <td>{item.title}</td>
                          <td>
                            <div className="rounded-full w-12 h-12">
                              <img src={item.image} alt="Avatar Tailwind CSS Component" />
                            </div>
                          </td>
                          <td>{item.priority}</td>
                          <td>{item.deadline}</td>
                          <td><button onClick={()=> handledone(item)} className="btn btn-sm pl-3 bg-green-400">done</button></td>
                         
                        </tr>
                  ))}
                </tbody>
          </table>
        </div>
      </div>
          {/* compleated section */}
      <div className="border-2 border-red-300 h-60 overflow-y-auto mt-7">
        <h1 className="text-center text-2xl font-bold text-green-600">Completed task list</h1>
        <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Task title</th>
                <th>Task photo</th>
                <th>priority</th>
                <th>Deadline</th>
                <th>action</th>
                
              </tr>
            </thead>
                <tbody >
                  {done?.data.map((item, index) => (
                        <tr key={item._id}>
                          <th>{index + 1}</th>
                          <td>{item.title}</td>
                          <td>
                            <div className="rounded-full w-12 h-12">
                              <img src={item.image} alt="Avatar Tailwind CSS Component" />
                            </div>
                          </td>
                          <td>{item.priority}</td>
                          <td>{item.deadline}</td>
                          <td><button className="btn btn-sm"><FaRegEdit /></button><button onClick={()=> handledelete(item._id)} className="btn btn-sm"><MdDeleteForever /></button></td>
                        </tr>
                  ))}
                </tbody>
          </table>
      </div>
    </div>
  );
};

export default ManageTask;
