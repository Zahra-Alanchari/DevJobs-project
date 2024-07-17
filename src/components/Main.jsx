
import React from "react";
import Body from "./Body";
import Header from "./Header";

export default function Main({data}){
    return <div>
        <Header/>
        <Body data={data}/>
    </div>
}