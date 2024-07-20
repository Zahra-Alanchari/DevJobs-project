import React from "react"
import Header from "./Header"
import CompanyProfile from "./CompanyProfile"
import JobDetails from "./JobDetails"
export default function Details({data, id}){
    return <div>
        <Header/>
        <CompanyProfile data={data.at(id-1)}/>
        <JobDetails data={data.at(id-1)}/>
    </div>
}