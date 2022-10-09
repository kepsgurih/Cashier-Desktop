import axios from "axios";

const PostWithoutHeader = async (url, data) => {
    const req = await axios.post('http://localhost:5000/apiv1/'+url, data)
    return req
}

export {
    PostWithoutHeader
}