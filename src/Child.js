import React from "react";
import "./App.css"

export const Child=(props)=>{

    return(
        <>
            <div className="container">
                <table cellPadding={"20px"} border={1} style={{width:"90%"}}>
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Mark</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.a.map((v,i)=>{
                                return(
                                    <tr key={i}>
                                        <td>{i+1}</td>
                                        <td>{v.name}</td>
                                        <td>{v.age}</td>
                                        <td>{v.mark}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}