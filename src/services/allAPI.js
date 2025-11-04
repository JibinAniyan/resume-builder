import commonAPI from "./commonAPI"
import ServerURL from "./ServerURL"

//resume add api - called by userInputs,when finished btn clicked

export const addResumeAPI = async(resume)=>{
    return await commonAPI(`${ServerURL}/resumes`,"POST",resume)
}

//get resume api
//update resume api
//add history appi
//get history api