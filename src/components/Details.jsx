import React from "react"
import Header from "./Header"
import CompanyProfile from "./CompanyProfile"
export default function Details({data, id}){
    return <div>
        <Header/>
        <CompanyProfile data={data.at(id-1)}/>
    </div>
}