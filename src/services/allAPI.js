import commonAPI from "./commonAPI"
import ServerURL from "./ServerURL"

//resume add api - called by userInputs,when finished btn clicked

export const addResumeAPI = async(resume)=>{
    return await commonAPI(`${ServerURL}/resumes`,"POST",resume)
}

//get resume api - called from ViewResume , when the page load , inside useEffect hook
export const getResumeAPI = async(id)=>{
    return await commonAPI(`${ServerURL}/resumes/${id}`,"GET",{})
}
//update resume api
export const updateResumeAPI = async(id,resume)=>{
    return await commonAPI(`${ServerURL}/resumes/${id}`,"PUT",resume)
}
//add history appi
//get history api