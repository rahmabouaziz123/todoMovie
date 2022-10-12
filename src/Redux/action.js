import { ADDMOVIE, DELETEELEMENT, EDITMOVIE } from "./actionType"




 export const hendelDelete=(todo)=>{
    return {
        type: DELETEELEMENT,
        payload: todo

    }
 }


  ////////////////////////////////////// Add ////

  export const handelAdd=(data)=>{
    return{
        type:ADDMOVIE,
        payload:data
    }
}


////////////////////////////////////////

export const handelEdit=(ID)=>{
    return {
        type:EDITMOVIE,
        payload: ID
    }
}