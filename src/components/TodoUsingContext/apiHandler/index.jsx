import axios from "axios";
const serverUrl = "https://63621ce67521369cd064f91d.mockapi.io";
export const getApiHandler = async (endpoint) => {
    try {
        const response = await axios.get(serverUrl+endpoint);
        // console.log("Axios Get : ", response);
        if(response.status===200){
            return response;
        }
    } catch (error) {
        console.log("Axios Get Error: ",error);
        return error;
    }
}

export const postApiHandler = async (endpoint, values) => {
    try {
        const response = await axios.post(serverUrl+endpoint, values)
        // console.log("Axios post : ", response);
        if (response.status === 201) {
            return response;
        }
    } catch (error) {
        console.log("Axios Get Error: ",error);
        return error;
    }
}

export const putApiHandler = async (endpoint, values) => {
    try {
        const response = await axios.put(serverUrl + endpoint, values);
        // console.log("Axios put: ",response);
        if (response.status === 200) {
            return response;
        }
    }
    catch(error){
        console.log("Axios Get Error: ",error);
        return error;
    }
}

export const deleteApiHandler = async (endpoint) => {
    try {
        const response = await axios.delete(serverUrl + endpoint);
        // console.log("Axios delete: ", response);
        if (response.status === 200) {
            return response;
        }
    }catch(error){
        console.log("Axios Delete Error: ", error);
        return error;
    }
}

