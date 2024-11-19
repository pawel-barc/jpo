const api = async (className, methodName, payload = null) => {
    const body = {
        className,
        methodName
    }

    if(payload){
        body.payload = payload;
    }

    const request = await fetch(`http://localhost/JPO-CONNECT/index.php`, {
        method: 'post',
        body: JSON.stringify(body)
    });

    const response = await request.text();

    try{
        return JSON.parse(response)
    }
    catch(e){
        return response;
    }
}

export default api;