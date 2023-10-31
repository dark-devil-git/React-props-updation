import React, { useState } from "react"
import "./App.css"
import { Child } from "./Child"

export const Parent=()=>{

    const arr=[ {name:"krishna",age:23,mark:462},
                {name:"kumar",age:26,mark:452},
                {name:"charan",age:25,mark:492},
                {name:"ram",age:21,mark:382},
                {name:"krishna kumar",age:28,mark:499}
            ]
    
    const[ar,setAr]=useState(arr)
    
    const [page,setPage]=useState(<Child a={ar}/>)

    
    const agee=()=>{
        var x=ar.sort((A,B)=>{
            return A.age - B.age
        })
        setPage(<Child a={x}/>)
    }

    const mark=()=>{
        var y=ar.sort((A,B)=>{
            return B.mark - A.mark
        })
        setPage(<Child a={y}/>) 
    }

    return(
        <>
            <div className="container">
                <div className="row">
                    <p>Sort By</p>
                    <div className="button">
                        <button onClick={()=>agee()}>Age</button> 
                    </div>
                    <div className="button"> 
                        <button onClick={()=>mark()}>Mark</button>
                    </div>
                </div>

                {page}
            </div>
        </>
    )
}