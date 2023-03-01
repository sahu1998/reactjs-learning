const serverUrl = "https://63621ce67521369cd064f91d.mockapi.io";

export const getApiHandler = async (endpoint) => {
    try {
        const getReq = await fetch(serverUrl + endpoint);
        const data = await getReq.json();
        return {status: 200, data};
    } catch (error) {
        return {status: 400, error};
    }
};

export const postApiHandler = async (endpoint, addData) => {
    try{
        const postReq = await fetch(serverUrl + endpoint, {
            method: "post",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(addData)
        });
        const data = await postReq.json();
        return data;
    }catch (error){
        return error;
    }
}
export const putApiHandler = async (endpoint, updateData) => {
    try {
        const putReq = await fetch(serverUrl + endpoint, {
            method: "put",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updateData)
        });
        const data = await putReq.json();
        return data;
    }catch (error){
        return error;
    }
}

export const deleteApiHandler = async (endpoint)=> {
    try {
        const deleteReq = await fetch(serverUrl + endpoint, {
            method: "delete",
            headers: {
                "content-type": "application/json"
            }
        });

        const data = deleteReq.json();
        return data;
    }catch(error){
        return error;
    }
}