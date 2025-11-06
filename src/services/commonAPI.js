import axios from "axios";



const commonAPI = async(url,httpMethod,reqBody)=>{
    const requestConfig = {
        url,
        method:httpMethod,
        data:reqBody
    }

    // API call
    return await axios(requestConfig).then(res=>res).catch(err=>err)
}


export default commonAPI

