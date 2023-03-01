import axios from "axios";
import swal from "sweetalert";
const serverUrl = "https://63621ce67521369cd064f91d.mockapi.io";
export const getApiHandler = async (endpoint) => {
    try {
        const response = await axios.get(serverUrl + endpoint);
        if (response.status === 200) {
            return response;
        }
    } catch (error) {
        console.log("Axios Get Error: ", error);
        return error;
    }
}

export const postApiHandler = async (endpoint, values) => {
    try {
        const response = await axios.post(serverUrl + endpoint, values)
        if (response.status === 201) {
            await swal("Success", "Data Added Succesfully...", "success")
            return response;
        }
    } catch (error) {
        console.log("Axios Get Error: ", error);
        return error;
    }
}

export const putApiHandler = async (endpoint, values) => {
    try {
        const updateDecision = await swal({
            title: "Are you sure?",
            text: "Are you sure, you want to update the data!",
            icon: "warning",
            dangerMode: true,
            buttons: [true, "Yes"]
        })
        if (updateDecision) {
            const response = await axios.put(serverUrl + endpoint, values);
            if (response.status === 200) {
                await swal("Updated", "Data Updated Succesfully...", "success")
                return response;
            }
        }
    }
    catch (error) {
        console.log("Axios Get Error: ", error);
        return error;
    }
}

export const deleteApiHandler = async (endpoint) => {
    try {
        const deleteDecision = await swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this file!",
            icon: "warning",
            dangerMode: true,
            buttons: [true, "Yes"]
        })
        if (deleteDecision) {
            const response = await axios.delete(serverUrl + endpoint);
            if (response.status === 200) {
                await swal("Deleted", "Data Deleted Succesfully...", "success")
                return response;
            }
        }
    } catch (error) {
        console.log("Axios Delete Error: ", error);
        return error;
    }
}

