import axios from "axios";

const axiosPublic = axios.create({
    baseURL:'https://task-server-silk-seven.vercel.app'
})
const useAxiospublic = () => {
    return axiosPublic;
};

export default useAxiospublic;