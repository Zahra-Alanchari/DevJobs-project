import React from "react";
import Header from "./Header";
import CompanyProfile from "./CompanyProfile";
import JobDetails from "./JobDetails";
import { useQuery } from "@tanstack/react-query";
import { jobFetcher, jobItemFetcher } from "../fetcher";


export default function Details({ id }) {
  const { isLoading, data } = useQuery({
    queryKey: ["jobDetail"],
    queryFn: jobFetcher,
  });
  if (isLoading) return <div>Loading...</div>;


  console.log(data, "dataid");
  const clickJob = data.filter((item) => item.id === id);
  console.log(clickJob, "click");

  
  return (
    <div>
      <Header />
      <CompanyProfile item={clickJob[0]} />
      <JobDetails item={clickJob[0]} />
    </div>
  );
}
