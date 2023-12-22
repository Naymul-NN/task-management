import { useQuery } from "@tanstack/react-query";
import useAxiospublic from "../hooks/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";

const ManageTask = () => {

    const { user } = useContext(AuthContext);

    const axiosPublic = useAxiospublic();
    const getdata = async () => {
        const res = await axiosPublic.get(`/tasklist/${user.email}`)
        return res

    }
    const { data, isLoading, isFetching } = useQuery({
        queryKey: ['tasklist'],
        queryFn: getdata,
    })
    if (isLoading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }
    console.log(data?.data, isFetching, isLoading);

    return (
        <div>
            
            <div className="border-2 border-red-200">
                <h1 className="text-center font-bold text-2xl pb-4">To Do list</h1>
                <div className="overflow-x-auto">
                    <table className="table ">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Task title</th>
                                <th>Task photo</th>
                                <th>priority</th>
                                <th>Deadline</th>
                                <th>Details</th>

                            </tr>
                        </thead>
                        <tbody>
                            {data?.data.map((item, index) => (
                                <tr key={item._id}>
                                    <th>{index + 1}</th>
                                    <td>{item.title}</td>
                                    <td>
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </td>
                                    <td>{item.priority}</td>
                                    <td>{item.deadline} </td>
                                    <td>{item.details} </td>

                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>
            <div className="border-2 border-red-300 h-60 overflow-y-auto mt-7">
                <h1 className="text-center text-2xl font-bold text-green-300">Ongoing task list</h1>
            </div>
            <div className="border-2 border-red-300 h-60 overflow-y-auto mt-7">
                <h1 className="text-center text-2xl font-bold text-green-600">Compleate task list</h1>
            </div>
           
        </div>
    );
};

export default ManageTask;