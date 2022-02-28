import service from "./request"

export const getHomepage = (params)=>{
    return service({
        url:'/homepage',
        method:'GET',
        params
    })
}